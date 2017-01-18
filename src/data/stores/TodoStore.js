import ReduceStore from '../../../flux/ReduceStore.js';
import dispatcher from '../IssueTrackerDispatcher.js';
import actionTypes from '../IssueTrackerActionTypes.js';

import uuid from 'uuid';
import Immutable from 'immutable';

export default class TodoStore extends ReduceStore {

    constructor() {
        super(dispatcher);
        this.dispatcher = dispatcher;
    }

    getInitialState() {
        return Immutable.OrderedMap();
    }

    reduce(state, action) {
        switch (action.get('type')) {
            case actionTypes.POPULATE_STORE:
                let projects = action.get('projects');
                return TodoStore._toImmutableState(projects);

            case actionTypes.ADD_ISSUE_START:
                if (!action.getIn(['issue', 'title'])) return state;
                let fakeId = action.get('id');
                return state
                    .setIn([action.get('projectId'), 'issues', fakeId], action.get('issue').set('id', fakeId));

            case actionTypes.ADD_ISSUE_SUCCEED:
                return state
                    .deleteIn([action.get('projectId'), 'issues', action.get('fakeId')])
                    .setIn([action.get('projectId'), 'issues', action.get('id')],
                        action.get('issue').set('id', action.get('id')));

            case actionTypes.ADD_ISSUE_FAIL:
                console.log('Failed to add issue');
                return state
                    .deleteIn([action.get('projectId'), 'issues', fakeId]);

            case actionTypes.DELETE_ISSUE:
                return state
                    .deleteIn([this._getProjectId(state, action.get('id')), 'issues', action.get('id')]);

            case actionTypes.TOGGLE_ISSUE:
                return state
                    .updateIn([this._getProjectId(state, action.get('id')), 'issues', action.get('id'), 'done'], val => !val);

            case actionTypes.ADD_PROJECT_START:
                if (!action.get('title')) return state;
                let projectId = action.get('id');
                return state
                    .setIn([projectId, 'title'], action.get('title')).setIn([projectId, 'id'], projectId).setIn([projectId, 'issues'], Immutable.OrderedMap());

            case actionTypes.ADD_PROJECT_SUCCEED:
                projectId = action.get('id');
                return state
                    .delete(action.get('fakeId'))
                    .setIn([projectId, 'title'], action.get('title')).setIn([projectId, 'id'], projectId).setIn([projectId, 'issues'], Immutable.OrderedMap());

            case actionTypes.ADD_PROJECT_FAIL:
                console.log('Failed to add project');
                return state
                    .delete(action.get('fakeId'));

            case actionTypes.DELETE_PROJECT:
                return state.delete(action.get('id'));

            case actionTypes.CHANGE_PROJECT:
                return state.set('active', action.get('id'));

            default:
                return state;
        }
    }

    _getProjectId(state, id) {
        return state.findKey(cur => cur.get != null && cur.get('issues') != null && cur.get('issues').has(id));
    }

    static _toImmutableState(projects) {
        let state = Immutable.OrderedMap();
        for (let project of projects) {
            let id = project.id;
            state = state.setIn([id, 'id'], id).setIn([id, 'title'], project.title).setIn([id, 'issues'], Immutable.OrderedMap());
            for (let issue of project.issues) {
                let newIssue = Immutable.OrderedMap()
                    .set('id', issue.id)
                    .set('title', issue.title)
                    .set('done', issue.done)
                    .set('duedate', issue.duedate)
                    .set('priority', issue.priority)
                    .set('projectId', issue.projectId);
                state = state.setIn([id, 'issues', issue.id], newIssue);
            }
        }
        return state;
    }

}
