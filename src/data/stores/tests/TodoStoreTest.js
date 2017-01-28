import Immutable from 'immutable';
import assert from 'assert';

import actionTypes from '../../IssueTrackerActionTypes';
import TodoStore from '../TodoStore';

describe('TodoStore', () => {
  describe('_getProjectId()', () => {
    it('should return project id when issue with id is present', (done) => {
      const sut = new TodoStore();
      const beginState = Immutable.OrderedMap().setIn([1, 'issues', 42, 'done'], false);

      assert.equal(sut._getProjectId(beginState, 42), 1);
      done();
    });

    it('should return undefined  when issue with id is not present', (done) => {
      const sut = new TodoStore();
      const beginState = Immutable.OrderedMap().setIn([1, 'issues', 31, 'done'], false);

      assert.equal(sut._getProjectId(beginState, 42), undefined);
      done();
    });
  });

  describe('getInitialState()', () => {
    it('should return empty ordered map', (done) => {
      const sut = new TodoStore();

      assert.equal(sut.getInitialState(), Immutable.OrderedMap());
      done();
    });
  });

  describe('reduce()', () => {
    it('should return initial state when state is initial state and no action is fired', (done) => {
      const sut = new TodoStore();

      assert.equal(sut.getInitialState(), Immutable.OrderedMap());
      done();
    });

    it('should add issue when action ADD_ISSUE with title is fired', (done) => {
      const sut = new TodoStore();

      const beginState = Immutable.OrderedMap().setIn([1, 'issues'], Immutable.OrderedMap());
      const issue = Immutable.OrderedMap().set('title', 'whatever');

      const action = Immutable.OrderedMap().set('type', actionTypes.ADD_ISSUE).set('projectId', 1).set('issue', issue);

      assert.equal(sut.reduce(beginState, action).getIn([1, 'issues']).toArray()[0].get('title'), 'whatever');
      done();
    });

    it('should not add issue when action ADD_ISSUE without title is fired', (done) => {
      const sut = new TodoStore();

      const beginState = Immutable.OrderedMap().setIn([1, 'issues'], Immutable.OrderedMap());

      const action = Immutable.OrderedMap().set('type', actionTypes.ADD_ISSUE).set('projectId', 1).setIn(['issue', 'title'], '');

      assert.equal(sut.reduce(beginState, action).getIn([1, 'issues']), beginState.getIn([1, 'issues']));
      done();
    });

    it('should delete issue when action DELETE_ISSUE with matching id of existing issue is fired', (done) => {
      const sut = new TodoStore();

      const beginState = Immutable.OrderedMap().setIn([1, 'issues', 1, 'title'], 'whatever');

      const action = Immutable.OrderedMap().set('type', actionTypes.DELETE_ISSUE).set('id', 1);

      assert.ok(sut.reduce(beginState, action).getIn([1, 'issues']).isEmpty());
      done();
    });

    it('should toggle issue when action TOGGLE_ISSUE with matching id of existing issue is fired', (done) => {
      const sut = new TodoStore();

      const beginState = Immutable.OrderedMap().setIn([1, 'issues', 1, 'done'], true);
      const expectedState = Immutable.OrderedMap().setIn([1, 'issues', 1, 'done'], false);

      const action = Immutable.OrderedMap().set('type', actionTypes.TOGGLE_ISSUE).set('id', 1);

      assert.equal(sut.reduce(beginState, action).getIn([1, 'issues', 1, 'done']), expectedState.getIn([1, 'issues', 1, 'done']));
      done();
    });

    it('should add project when action ADD_PROJECT with valid project id is fired', (done) => {
      const sut = new TodoStore();

      const beginState = Immutable.OrderedMap();

      const action = Immutable.OrderedMap().set('type', actionTypes.ADD_PROJECT).set('title', 'whatever');

      assert.ok(sut.reduce(beginState, action).findKey(cur => cur.get('title') === 'whatever') != null);
      done();
    });

    it('should delete project when action DELETE_PROJECT with matching id of existing project is fired', (done) => {
      const sut = new TodoStore();

      const beginState = Immutable.OrderedMap().setIn([1, 'issues'], Immutable.OrderedMap());

      const action = Immutable.OrderedMap().set('type', actionTypes.DELETE_PROJECT).set('id', 1);

      assert.ok(sut.reduce(beginState, action).isEmpty());
      done();
    });
  });

  describe('_toImmutableState()', () => {
    it('should return immutable state from js object', (done) => {
      const target = [{
        id: 1,
        title: 'whatever1',
        issues: [],
      }, {
        id: 2,
        title: 'whatever2',
        issues: [{
          id: 42,
          done: false,
          duedate: 'somedate',
          priority: 'high',
          title: 'whatever3',
        }, {
          id: 43,
          done: false,
          duedate: 'somedate',
          priority: 'high',
          title: 'whatever4',
        }],
      }];

      const state = TodoStore._toImmutableState(target);

      assert.ok(state.getIn([1, 'issues']).isEmpty());
      assert.equal(state.getIn([2, 'issues', 42, 'title']), 'whatever3');
      assert.equal(state.getIn([2, 'issues', 43, 'title']), 'whatever4');
      done();
    });
  });
});
