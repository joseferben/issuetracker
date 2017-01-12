import actionTypes from '../../IssueTrackerActionTypes.js';
import TodoStore from '../TodoStore.js';
import Immutable from 'immutable';
import assert from 'assert';

describe('TodoStore', () => {
    describe('_getProjectId()', () => {
        it('should return project id if when issue with id is present', (done) => {
            let sut = new TodoStore();
            let beginState = Immutable.OrderedMap().setIn([1, 'issues', 42, 'done'], false);
            let expectedId = 1;

            assert.equal(sut._getProjectId(beginState, 42), expectedId);
            done();
        });

        it('should return -1 if when issue with id is not present', (done) => {
            let sut = new TodoStore();
            let beginState = Immutable.OrderedMap().setIn([1, 'issues', 31, 'done'], false);
            let expectedId = undefined;

            assert.equal(sut._getProjectId(beginState, 42), expectedId);
            done();
        });
    });


    describe('reduce()', () => {
        it('should return initial state when no action given', (done) => {
            let sut = new TodoStore();
            let expectedState = Immutable.OrderedMap();

            assert.equal(sut.getInitialState(), expectedState);
            done();
        });

        it('should add issue when action ADD_ISSUE with title is given', (done) => {
            let sut = new TodoStore();

            let beginState = Immutable.OrderedMap().setIn([1, 'issues'], []);
            let expectedState = Immutable.OrderedMap().setIn([1, 'issues', 1], {
                title: "whatever"
            });

            let action = Immutable.OrderedMap().set('type', actionTypes.ADD_ISSUE).set('projectId', 1).setIn(['issue', 'title'], 'whatever');
            assert.equal(sut.reduce(beginState, action).get(0), expectedState.get(0));
            done();
        });

        it('should not add issue when action ADD_ISSUE without title is given', (done) => {
            let sut = new TodoStore();

            let beginState = Immutable.OrderedMap().setIn([1, 'issues'], []);

            let action = Immutable.OrderedMap().set('type', actionTypes.ADD_ISSUE).set('projectId', 1).setIn(['issue', 'title'], '');

            assert.equal(sut.reduce(beginState, action).getIn([1, 'issues']), beginState.getIn([1, 'issues']));
            done();
        });

        it('should delete issue when id matches with existing issue', (done) => {
            let sut = new TodoStore();

            let beginState = Immutable.OrderedMap().setIn([1, 'issues', 1, 'title'], 'whatever');

            let action = Immutable.OrderedMap().set('type', actionTypes.DELETE_ISSUE).set('id', 1);

            assert.ok(sut.reduce(beginState, action).getIn([1, 'issues']).isEmpty());
            done();
        });

        it('should toggle issue when id matches with existing', (done) => {
            let sut = new TodoStore();

            let beginState = Immutable.OrderedMap().setIn([1, 'issues', 1, 'done'], true);
            let expectedState = Immutable.OrderedMap().setIn([1, 'issues', 1, 'done'], false);

            let action = Immutable.OrderedMap().set('type', actionTypes.TOGGLE_ISSUE).set('id', 1);

            assert.equal(sut.reduce(beginState, action).getIn([1, 'issues', 1, 'done']), expectedState.getIn([1, 'issues', 1, 'done']));
            done();
        });

        it('should add project when action with project payload fires', (done) => {
            let sut = new TodoStore();

            let beginState = Immutable.OrderedMap();

            let action = Immutable.OrderedMap().set('type', actionTypes.ADD_PROJECT).set('title', 'whatever');

            assert.ok(sut.reduce(beginState, action).findKey(cur => cur.get('title') === 'whatever') != null);
            done();
        });

        it('should delete project when action with project id fires', (done) => {
            let sut = new TodoStore();

            let beginState = Immutable.OrderedMap().setIn([1, 'issues'], Immutable.OrderedMap());

            let action = Immutable.OrderedMap().set('type', actionTypes.DELETE_PROJECT).set('id', 1);

            assert.ok(sut.reduce(beginState, action).isEmpty());
            done();
        });
    });
});
