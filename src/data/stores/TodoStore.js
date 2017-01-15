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
            case actionTypes.ADD_ISSUE:
                if (!action.getIn(['issue', 'title'])) return state;
                let issueId = uuid.v1();
                return state.setIn([action.get('projectId'), 'issues', issueId], action.get('issue').set('id', issueId));

            case actionTypes.DELETE_ISSUE:
                return state.deleteIn([this._getProjectId(state, action.get('id')), 'issues', action.get('id')]);

            case actionTypes.TOGGLE_ISSUE:
                return state.updateIn([this._getProjectId(state, action.get('id')), 'issues', action.get('id'), 'done'], val => !val);

            case actionTypes.ADD_PROJECT:
                if (!action.get('title')) return state;
                let projectId = uuid.v1();
                return state.setIn([projectId, 'title'], action.get('title')).setIn([projectId, 'id'], projectId);

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
}
