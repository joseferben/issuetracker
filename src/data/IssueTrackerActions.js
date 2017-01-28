import Immutable from 'immutable';
import axios from 'axios';
import uuid from 'uuid';

import actionTypes from './IssueTrackerActionTypes';
import dispatcher from './IssueTrackerDispatcher';

const baseUrl = 'http://localhost:8080/api';

const Actions = {

  addIssue(opts) {
    const fakeId = `fake-${uuid.v1()}`;
    const projectId = opts.projectId;
    const issue = Immutable.OrderedMap()
      .set('title', opts.title)
      .set('priority', opts.priority)
      .set('duedate', opts.duedate)
      .set('done', opts.duedate);

    dispatcher.dispatch(Immutable.OrderedMap().set('type', actionTypes.ADD_ISSUE_START).set('id', fakeId).set('projectId', projectId)
      .set('issue', issue));

    axios.post(`${baseUrl}/projects/${projectId}/issues`, {
        clientId: '',
        projectId,
        title: opts.title,
        priority: opts.priority,
        duedate: opts.duedate,
        done: opts.done,
      }).then(
        res => dispatcher.dispatch(Immutable.OrderedMap().set('type', actionTypes.ADD_ISSUE_SUCCEED).set('fakeId', fakeId).set('id', res.data.id)
          .set('projectId', projectId)
          .set('issue', issue)),
        () => dispatcher.dispatch(Immutable.OrderedMap().set('type', actionTypes.ADD_ISSUE_FAIL).set('fakeId', fakeId).set('projectId', projectId)))
      .catch(err => console.log(`Whoops: ${err}`));
  },

  deleteIssue(id) {
    dispatcher.dispatch(Immutable.OrderedMap().set('type', actionTypes.DELETE_ISSUE).set('id', id));
  },

  toggleIssue(id) {
    dispatcher.dispatch(Immutable.OrderedMap().set('type', actionTypes.TOGGLE_ISSUE).set('id', id));
  },

  addProject(title) {
    const fakeId = `fake-${uuid.v1()}`;

    dispatcher.dispatch(Immutable.OrderedMap().set('type', actionTypes.ADD_PROJECT_START).set('title', title).set('id', fakeId));
    axios.post(`${baseUrl}/projects`, {
      title,
      issues: [],
    }).then(
      res => dispatcher.dispatch(Immutable.OrderedMap().set('type', actionTypes.ADD_PROJECT_SUCCEED).set('title', title).set('fakeId', fakeId)
        .set('id', res.data.id)),
      () => dispatcher.dispatch(Immutable.OrderedMap().set('type', actionTypes.ADD_PROJECT_FAIL).set('fakeId', fakeId)));
  },

  deleteProject(id) {
    dispatcher.dispatch(Immutable.OrderedMap().set('type', actionTypes.DELETE_PROJECT).set('id', id));
  },

  changeProject(id) {
    dispatcher.dispatch(Immutable.OrderedMap().set('type', actionTypes.CHANGE_PROJECT).set('id', id));
  },

  populateStore() {
    axios.get(`${baseUrl}/projects`).then(
      (res) => {
        const projects = res.data.projects.map(cur => axios.get(`${baseUrl}/projects/${cur}`));

        Promise.all(projects)
          .then(
            vals => dispatcher.dispatch(Immutable.OrderedMap().set('type', actionTypes.POPULATE_STORE).set('projects', vals.map(cur => cur.data))))
          .catch(
            err => console.log(err));
      });
  },
};

export default Actions;
