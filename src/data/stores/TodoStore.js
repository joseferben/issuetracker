import Immutable from 'immutable';
import ReduceStore from '../../../flux/ReduceStore';
import dispatcher from '../IssueTrackerDispatcher';
import actionTypes from '../IssueTrackerActionTypes';


export default class TodoStore extends ReduceStore {

  constructor() {
    super(dispatcher);
    this.dispatcher = dispatcher;
  }

  getInitialState() {
    return Immutable.OrderedMap();
  }

  reduce(state, action) {
    switch (action.type) {
      case actionTypes.POPULATE_STORE:
        {
          const projects = action.projects;
          return TodoStore.toImmutableState(state, projects);
        }

      case actionTypes.ADD_ISSUE_START:
        {
          if (!action.issue.title) return state;
          return state
            .setIn([action.get('projectId'), 'issues', action.id], action.issue.set('id', action.id));
        }

      case actionTypes.ADD_ISSUE_SUCCEED:
        {
          return state
            .deleteIn([action.projectId, 'issues', action.fakeId])
            .setIn([action.projectId, 'issues', action.id],
              action.issue.set('id', action.id));
        }

      case actionTypes.ADD_ISSUE_FAIL:
        {
          return state
            .deleteIn([action.projectId, 'issues', action.fakeId]);
        }

      case actionTypes.DELETE_ISSUE_START:
        {
          return state
            .deleteIn([TodoStore.getProjectId(state, action.id), 'issues', action.id]);
        }

      case actionTypes.TOGGLE_ISSUE_START:
        {
          return state
            .updateIn([TodoStore.getProjectId(state, action.id), 'issues', action.id, 'done'], val => !val);
        }

      case actionTypes.ADD_PROJECT_START:
        {
          if (!action.title) return state;
          const projectId = action.id;
          return state
            .setIn([projectId, 'title'], action.title).setIn([projectId, 'id'], projectId).setIn([projectId, 'issues'], Immutable.OrderedMap());
        }

      case actionTypes.ADD_PROJECT_SUCCEED:
        {
          const projectId = action.id;
          return state
            .delete(action.fakeId)
            .setIn([projectId, 'title'], action.title).setIn([projectId, 'id'], projectId).setIn([projectId, 'issues'], Immutable.OrderedMap());
        }

      case actionTypes.ADD_PROJECT_FAIL:
        {
          return state
            .delete(action.fakeId);
        }

      case actionTypes.DELETE_PROJECT_START:
        {
          return state.delete(action.id);
        }

      case actionTypes.CHANGE_PROJECT:
        {
          return state.set('active', action.id);
        }

      default:
        return state;
    }
  }

  static getProjectId(state, id) {
    return state.findKey(cur => cur.get != null && cur.get('issues') != null && cur.get('issues').has(id));
  }

  static toImmutableState(preState, projects) {
    let state = Immutable.OrderedMap();

    projects.forEach((project) => {
      const id = project.id;
      state = state.setIn([id, 'id'], id).setIn([id, 'title'], project.title).setIn([id, 'issues'], Immutable.OrderedMap());
      project.issues.forEach((issue) => {
        const newIssue = Immutable.OrderedMap()
          .set('id', issue.id)
          .set('title', issue.title)
          .set('done', issue.done)
          .set('duedate', issue.duedate)
          .set('priority', issue.priority)
          .set('projectId', issue.projectId);
        state = state.setIn([id, 'issues', issue.id], newIssue);
      });
    });
    return state.set('active', preState.get('active'));
  }
}
