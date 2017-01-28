import Immutable from 'immutable';
import axios from 'axios';
import uuid from 'uuid';

import actionTypes from './IssueTrackerActionTypes';
import dispatcher from './IssueTrackerDispatcher';

const baseUrl = 'https://issuetracker-web3.herokuapp.com/api';

const Actions = {

  addIssue(opts) {
    const fakeId = `fake-${uuid.v1()}`;
    const projectId = opts.projectId;
    const issue = Immutable.OrderedMap()
      .set('title', opts.title)
      .set('priority', opts.priority)
      .set('duedate', opts.duedate)
      .set('done', opts.duedate);

    dispatcher.dispatch({
      type: actionTypes.ADD_ISSUE_START,
      id: fakeId,
      projectId,
      issue,
    });

    axios.post(
        `${baseUrl}/projects/${projectId}/issues`, {
          clientId: '',
          projectId,
          title: opts.title,
          priority: opts.priority,
          duedate: opts.duedate,
          done: opts.done,
        }).then(
        res => dispatcher.dispatch({
          type: actionTypes.ADD_ISSUE_SUCCEED,
          fakeId,
          id: res.data.id,
          projectId,
          issue,
        }),
        () => dispatcher.dispatch({
          type: actionTypes.ADD_ISSUE_FAIL,
          fakeId,
          projectId,
        }))
      .catch(err => console.log(`Whoops: ${err}`));
  },

  deleteIssue(id) {
    dispatcher.dispatch({
      type: actionTypes.DELETE_ISSUE_START,
      id,
    });

    axios.delete(
        `${baseUrl}/issues/${id}`, {
          id,
        }).then(
        () => dispatcher.dispatch({
          type: actionTypes.DELETE_ISSUE_SUCCEED,
          id,
        }),
        () => dispatcher.dispatch({
          type: actionTypes.DELETE_ISSUE_FAIL,
          id,
        }))
      .catch(err => console.log(`Whoops: ${err}`));
  },

  toggleIssue(id) {
    dispatcher.dispatch({
      type: actionTypes.TOGGLE_ISSUE_START,
      id,
    });

    axios.post(
      `${baseUrl}/issues/${id}`, {
        id,
      }).then(
      () => dispatcher.dispatch({
        type: actionTypes.TOGGLE_ISSUE_SUCCEED,
        id,
      }),
      () => dispatcher.dispatch({
        type: actionTypes.TOGGLE_ISSUE_FAIL,
        id,
      })).catch(err => console.log(`Whoops: ${err}`));
  },

  addProject(title) {
    const fakeId = `fake-${uuid.v1()}`;

    dispatcher.dispatch({
      type: actionTypes.ADD_PROJECT_START,
      title,
      id: fakeId,
    });

    axios.post(
      `${baseUrl}/projects`, {
        title,
        issues: [],
      }).then(
      res => dispatcher.dispatch({
        type: actionTypes.ADD_PROJECT_SUCCEED,
        title,
        fakeId,
        id: res.data.id,
      }),
      () => dispatcher.dispatch({
        type: actionTypes.ADD_PROJECT_FAIL,
        fakeId,
      }));
  },

  deleteProject(id) {
    dispatcher.dispatch({
      type: actionTypes.DELETE_PROJECT_START,
      id,
    });

    axios.delete(
      `${baseUrl}/projects/${id}`, {
        id,
      }).then(
      () => dispatcher.dispatch({
        type: actionTypes.DELETE_PROJECT_SUCCEED,
        id,
      }),
      () => dispatcher.dispatch({
        type: actionTypes.DELETE_PROJECT_FAIL,
        id,
      })).catch(err => console.log(`Whoops: ${err}`));
  },

  changeProject(id) {
    dispatcher.dispatch({
      type: actionTypes.CHANGE_PROJECT,
      id,
    });
  },

  populateStore() {
    axios.get(`${baseUrl}/projects`).then(
      (res) => {
        const projects = res.data.projects.map(cur => axios.get(`${baseUrl}/projects/${cur}`));

        Promise.all(projects)
          .then(
            vals => dispatcher.dispatch({
              type: actionTypes.POPULATE_STORE,
              projects: vals.map(cur => cur.data),
            }))
          .catch(
            err => console.log(err));
      });
  },
};

export default Actions;
