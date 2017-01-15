import actionTypes from './IssueTrackerActionTypes.js';
import dispatcher from './IssueTrackerDispatcher.js';

import Immutable from 'immutable';

const Actions = {
    addIssue(opts) {
        let issue = Immutable.OrderedMap()
            .set('title', opts.title)
            .set('priority', opts.priority)
            .set('duedate', opts.duedate)
            .set('done', opts.duedate);

        dispatcher.dispatch(Immutable.OrderedMap().set('type', actionTypes.ADD_ISSUE).set('projectId', opts.projectId).set('issue', issue));
    },


    deleteIssue(id) {
        dispatcher.dispatch(Immutable.OrderedMap().set('type', actionTypes.DELETE_ISSUE).set('id', id));
    },

    toggleIssue(id) {
        dispatcher.dispatch(Immutable.OrderedMap().set('type', actionTypes.TOGGLE_ISSUE).set('id', id));
    },

    addProject(title) {
        dispatcher.dispatch(Immutable.OrderedMap().set('type', actionTypes.ADD_PROJECT).set('title', title));
    },

    deleteProject(id) {
        dispatcher.dispatch(Immutable.OrderedMap().set('type', actionTypes.DELETE_PROJECT).set('id', id));
    },

    changeProject(id) {
        dispatcher.dispatch(Immutable.OrderedMap().set('type', actionTypes.CHANGE_PROJECT).set('id', id));
    }
}

export default Actions;
