import actionTypes from '../../IssueTrackerActionTypes.js';
import TodoStore from '../TodoStore.js';
import Immutable from 'immutable';
import assert from 'assert';

describe('TodoStore', () => {
    describe('_getProjectId()', () => {
        it('should return project id when issue with id is present', (done) => {
            let sut = new TodoStore();
            let beginState = Immutable.OrderedMap().setIn([1, 'issues', 42, 'done'], false);

            assert.equal(sut._getProjectId(beginState, 42), 1);
            done();
        });

        it('should return undefined  when issue with id is not present', (done) => {
            let sut = new TodoStore();
            let beginState = Immutable.OrderedMap().setIn([1, 'issues', 31, 'done'], false);

            assert.equal(sut._getProjectId(beginState, 42), undefined);
            done();
        });
    });

    describe('getInitialState()', () => {
        it('should return empty ordered map', (done) => {
            let sut = new TodoStore();

            assert.equal(sut.getInitialState(), Immutable.OrderedMap());
            done();
        });
    });

    describe('reduce()', () => {
        it('should return initial state when state is initial state and no action is fired', (done) => {
            let sut = new TodoStore();
            let expectedState = Immutable.OrderedMap();

            assert.equal(sut.getInitialState(), Immutable.OrderedMap());
            done();
        });

        it('should add issue when action ADD_ISSUE with title is fired', (done) => {
            let sut = new TodoStore();

            let beginState = Immutable.OrderedMap().setIn([1, 'issues'], Immutable.OrderedMap());
            let issue = Immutable.OrderedMap().set('title', 'whatever');

            let action = Immutable.OrderedMap().set('type', actionTypes.ADD_ISSUE).set('projectId', 1).set('issue', issue);

            assert.equal(sut.reduce(beginState, action).getIn([1, 'issues']).toArray()[0].get('title'), 'whatever');
            done();
        });

        it('should not add issue when action ADD_ISSUE without title is fired', (done) => {
            let sut = new TodoStore();

            let beginState = Immutable.OrderedMap().setIn([1, 'issues'], Immutable.OrderedMap());

            let action = Immutable.OrderedMap().set('type', actionTypes.ADD_ISSUE).set('projectId', 1).setIn(['issue', 'title'], '');

            assert.equal(sut.reduce(beginState, action).getIn([1, 'issues']), beginState.getIn([1, 'issues']));
            done();
        });

        it('should delete issue when action DELETE_ISSUE with matching id of existing issue is fired', (done) => {
            let sut = new TodoStore();

            let beginState = Immutable.OrderedMap().setIn([1, 'issues', 1, 'title'], 'whatever');

            let action = Immutable.OrderedMap().set('type', actionTypes.DELETE_ISSUE).set('id', 1);

            assert.ok(sut.reduce(beginState, action).getIn([1, 'issues']).isEmpty());
            done();
        });

        it('should toggle issue when action TOGGLE_ISSUE with matching id of existing issue is fired', (done) => {
            let sut = new TodoStore();

            let beginState = Immutable.OrderedMap().setIn([1, 'issues', 1, 'done'], true);
            let expectedState = Immutable.OrderedMap().setIn([1, 'issues', 1, 'done'], false);

            let action = Immutable.OrderedMap().set('type', actionTypes.TOGGLE_ISSUE).set('id', 1);

            assert.equal(sut.reduce(beginState, action).getIn([1, 'issues', 1, 'done']), expectedState.getIn([1, 'issues', 1, 'done']));
            done();
        });

        it('should add project when action ADD_PROJECT with valid project id is fired', (done) => {
            let sut = new TodoStore();

            let beginState = Immutable.OrderedMap();

            let action = Immutable.OrderedMap().set('type', actionTypes.ADD_PROJECT).set('title', 'whatever');

            assert.ok(sut.reduce(beginState, action).findKey(cur => cur.get('title') === 'whatever') != null);
            done();
        });

        it('should delete project when action DELETE_PROJECT with matching id of existing project is fired', (done) => {
            let sut = new TodoStore();

            let beginState = Immutable.OrderedMap().setIn([1, 'issues'], Immutable.OrderedMap());

            let action = Immutable.OrderedMap().set('type', actionTypes.DELETE_PROJECT).set('id', 1);

            assert.ok(sut.reduce(beginState, action).isEmpty());
            done();
        });
    });

  describe('_toImmutableState()', () => {
    it('should return immutable state from js object', (done) => {
      let target = [
        {
          id: 1,
          title: 'whatever1',
          issues: [],
        },
        {
          id: 2,
          title: 'whatever2',
          issues: [
            {
              id: 42,
              done: false,
              duedate: 'somedate',
              priority: 'high',
              title: 'whatever3',
            },
            {
              id: 43,
              done: false,
              duedate: 'somedate',
              priority: 'high',
              title: 'whatever4',
            },
          ]
        }
      ];

      let state = TodoStore._toImmutableState(target);

      assert.ok(state.getIn([1, 'issues']).isEmpty());
      assert.equal(state.getIn([2, 'issues', 42, 'title']), 'whatever3');
      assert.equal(state.getIn([2, 'issues', 43, 'title']), 'whatever4');
      done();
    });
  });
});
