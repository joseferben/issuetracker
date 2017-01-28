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
    switch (action.get('type')) {
      case actionTypes.POPULATE_STORE:
        {
          const projects = action.get('projects');
          return TodoStore.toImmutableState(projects);
        }

      case actionTypes.ADD_ISSUE_START:
        {
          if (!action.getIn(['issue', 'title'])) return state;
          const fakeId = action.get('id');
          return state
            .setIn([action.get('projectId'), 'issues', fakeId], action.get('issue').set('id', fakeId));
        }

      case actionTypes.ADD_ISSUE_SUCCEED:
        {
          return state
            .deleteIn([action.get('projectId'), 'issues', action.get('fakeId')])
            .setIn([action.get('projectId'), 'issues', action.get('id')],
              action.get('issue').set('id', action.get('id')));
        }

      case actionTypes.ADD_ISSUE_FAIL:
        {
          return state
            .deleteIn([action.get('projectId'), 'issues', action.get('fakeId')]);
        }

      case actionTypes.DELETE_ISSUE:
        {
          return state
            .deleteIn([this.getProjectId(state, action.get('id')), 'issues', action.get('id')]);
        }

      case actionTypes.TOGGLE_ISSUE:
        {
          return state
            .updateIn([this.getProjectId(state, action.get('id')), 'issues', action.get('id'), 'done'], val => !val);
        }

      case actionTypes.ADD_PROJECT_START:
        {
          if (!action.get('title')) return state;
          const projectId = action.get('id');
          return state
            .setIn([projectId, 'title'], action.get('title')).setIn([projectId, 'id'], projectId).setIn([projectId, 'issues'], Immutable.OrderedMap());
        }

      case actionTypes.ADD_PROJECT_SUCCEED:
        {
          const projectId = action.get('id');
          return state
            .delete(action.get('fakeId'))
            .setIn([projectId, 'title'], action.get('title')).setIn([projectId, 'id'], projectId).setIn([projectId, 'issues'], Immutable.OrderedMap());
        }

      case actionTypes.ADD_PROJECT_FAIL:
        {
          return state
            .delete(action.get('fakeId'));
        }

      case actionTypes.DELETE_PROJECT:
        {
          return state.delete(action.get('id'));
        }

      case actionTypes.CHANGE_PROJECT:
        {
          return state.set('active', action.get('id'));
        }

      default:
        return state;
    }
  }

  static getProjectId(state, id) {
    return state.findKey(cur => cur.get != null && cur.get('issues') != null && cur.get('issues').has(id));
  }

  static toImmutableState(projects) {
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
    return state;
  }
}
