import actionTypes from './IssueTrackerActionTypes.js';
import dispatcher from './IssueTrackerDispatcher.js';

import Immutable from 'immutable';

const Actions = {
    addIssue(opts) {
        console.log(`Action fired: addIssue(${opts.title}, ${opts.priority}, ${opts.duedate}, ${opts.done})`);
        let issue = Immutable.OrderedMap()
            .set('title', opts.title)
            .set('priority', opts.priority)
            .set('duedate', opts.duedate)
            .set('done', opts.duedate);

        dispatcher.dispatch(Immutable.OrderedMap().set('type', actionTypes.ADD_ISSUE).set('projectId', opts.projectId).set('issue', issue));
    },


    deleteIssue(id) {
        console.log(`Action fired: deleteIssue(${id})`);
        dispatcher.dispatch(Immutable.OrderedMap().set('type', actionTypes.DELETE_ISSUE).set('id', id));
    },

    toggleIssue(id) {
        console.log(`Action fired: toggleIssue(${id})`);
        dispatcher.dispatch(Immutable.OrderedMap().set('type', actionTypes.TOGGLE_ISSUE).set('id', id));
    },

    addProject(title) {
        console.log(`Action fired: addProject(${title})`);
        dispatcher.dispatch(Immutable.OrderedMap().set('type', actionTypes.ADD_PROJECT).set('title', title));
    },

    deleteProject(id) {
        console.log(`Action fired: deleteProject(${id})`);
        dispatcher.dispatch(Immutable.OrderedMap().set('type', actionTypes.DELETE_PROJECT).set('id', id));
    }
}

export default Actions;
