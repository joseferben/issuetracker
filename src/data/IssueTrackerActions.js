import Immutable from 'immutable';
import axios from 'axios';
import uuid from 'uuid';

import actionTypes from './IssueTrackerActionTypes.js';
import dispatcher from './IssueTrackerDispatcher.js';

const baseUrl = 'http://localhost:8080/api';

const Actions = {

    addIssue(opts) {
        let fakeId = `fake-${uuid.v1()}`;
        let projectId = opts.projectId;
        let issue = Immutable.OrderedMap()
            .set('title', opts.title)
            .set('priority', opts.priority)
            .set('duedate', opts.duedate)
            .set('done', opts.duedate);

        dispatcher.dispatch(Immutable.OrderedMap().set('type', actionTypes.ADD_ISSUE_START).set('id', fakeId).set('projectId', projectId).set('issue', issue));

        axios.post(`${baseUrl}/projects/${projectId}/issues`, {
            clientId: "",
            projectId: fakeId,
            title: opts.title,
            priority: opts.priority,
            duedate: opts.duedate,
            done: opts.done,
        }).then(
            res => dispatcher.dispatch(Immutable.OrderedMap().set('type', actionTypes.ADD_ISSUE_SUCCEED).set('fakeId', fakeId).set('id', res.data.id).set('projectId', projectId).set('issue', issue)),
            res => dispatcher.dispatch(Immutable.OrderedMap().set('type', actionTypes.ADD_ISSUE_FAIL).set('fakeId', fakeId))
        );
    },

    deleteIssue(id) {
        dispatcher.dispatch(Immutable.OrderedMap().set('type', actionTypes.DELETE_ISSUE).set('id', id));
    },

    toggleIssue(id) {
        dispatcher.dispatch(Immutable.OrderedMap().set('type', actionTypes.TOGGLE_ISSUE).set('id', id));
    },

    addProject(title) {
        let fakeId = `fake-${uuid.v1()}`;

        dispatcher.dispatch(Immutable.OrderedMap().set('type', actionTypes.ADD_PROJECT_START).set('title', title).set('id', fakeId));
        axios.post(`${baseUrl}/projects`, {
            title,
            issues: [],
        }).then(
          res => dispatcher.dispatch(Immutable.OrderedMap().set('type', actionTypes.ADD_PROJECT_SUCCEED).set('title', title).set('fakeId', fakeId).set('id', res.data.id)),
                res => dispatcher.dispatch(Immutable.OrderedMap().set('type', actionTypes.ADD_PROJECT_FAIL).set('fakeId', fakeId)));
    },

    deleteProject(id) {
        dispatcher.dispatch(Immutable.OrderedMap().set('type', actionTypes.DELETE_PROJECT).set('id', id));
    },

    changeProject(id) {
        dispatcher.dispatch(Immutable.OrderedMap().set('type', actionTypes.CHANGE_PROJECT).set('id', id));
    }
}

export default Actions;
