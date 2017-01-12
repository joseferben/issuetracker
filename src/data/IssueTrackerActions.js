import actionTypes from './IssueTrackerActionTypes.js';
import dispatcher from './IssueTrackerDispatcher.js';
import Immutable from 'immutable';

const Action = {
    addIssue(projectId, issue) {
        dispatcher.dispatch(Immutable.OrderedMap().set('type', actionTypes.ADD_ISSUE).set('project', projectId).set('issue', issue));
    },


    deleteIssue(id) {
        dispatcher.dispatch(Immutable.OrderedMap().set('type', actionTypes.DELETE_ISSUE).set('id', id));
    },

    toggleIssue(id) {
        dispatcher.dispatch(Immutable.OrderedMap().set('type', actionTypes.TOGGLE_ISSUE).set('id', id);
    },

    addProject(title) {
        dispatcher.dispatch(Immutable.OrderedMap().set('type', actionTypes.ADD_PROJECT).set('title', title));
    },

    deleteProject(id) {
        dispatcher.dispatch(Immutable.OrderedMap().set('type', actionTypes.DELETE_PROJECT).set('id', id));
    }
}

export default Actions;
