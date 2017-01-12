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
                return state.setIn([action.projectId, 'issues', '1'], action.issue);

            case actionTypes.DELETE_ISSUE:
                return state.deleteIn([this._getProjectId(state, action.get('id')), 'issues', action.get('id')]);

            case actionTypes.TOGGLE_ISSUE:
                return state.updateIn([this._getProjectId(state, action.get('id')), 'issues', action.get('id'), 'done'], val => !val);

            case actionTypes.ADD_PROJECT:
                if (!action.get('title')) return state;
                return state.setIn([uuid.v1(), 'title'], action.get('title'));

            case actionTypes.DELETE_PROJECT:
                return state.delete(action.get('id'));

            default:
                return state;
        }
    }

    _getProjectId(state, id) {
        return state.findKey(cur => cur.get('issues').has(id));
    }
}
