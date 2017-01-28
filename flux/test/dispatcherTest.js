import assert from 'assert';
import Dispatcher from '../Dispatcher';

describe('Dispatcher', () => {
  it('should change state when callback gets dispatched', (done) => {
    const sut = new Dispatcher();
    let state = 0;
    sut.register(() => {
      state = 42;
    });
    sut.dispatch();
    assert.equal(state, 42);
    done();
  });

  it('should change state to payload value when callback gets dispatched', (done) => {
    const sut = new Dispatcher();
    let state = '';
    sut.register((somePayload) => {
      state = somePayload;
    });
    sut.dispatch('whatever');
    assert.equal(state, 'whatever');
    done();
  });

  it('should throw exception when dispatch happens during dispatch', (done) => {
    const sut = new Dispatcher();
    sut.isDispatching = true;
    assert.throws(sut.dispatch, Error, 'We are dispatching alread!');
    done();
  });

  it('should have no callbacks registered when unregistering the only callback', (done) => {
    const sut = new Dispatcher();
    const token = sut.register(() => {});
    sut.unregister(token);
    assert.equal(Object.keys(sut.callbacks).length, 0);
    done();
  });

  it('should invoke callbacks in correct order when using waitFor()', (done) => {
    const sut = new Dispatcher();
    const orderedState = [];
    const token = sut.register(() => orderedState.push('first'));
    sut.register(() => {
      sut.waitFor([token]);
      orderedState.push('second');
    });
    sut.dispatch();
    assert.equal(orderedState[0], 'first');
    assert.equal(orderedState[1], 'second');
    done();
  });

  it('should throw error (circula dependency) when two callbacks wait for each other', (done) => {
    const sut = new Dispatcher();
    sut.register(() => {
      sut.waitFor([1]);
    });
    sut.register(() => {
      sut.waitFor([0]);
    });
    // eslint-disable-next-line
    assert.throws(sut.dispatch, Error, "Whoops, circular dependency detected!");
    done();
  });
});
