/* eslint-disable */
import Store from './Store';

export default class ReduceStore extends Store {

  constructor(dispatcher) {
    super(dispatcher);
    this.state = this.getInitialState();
  }

  getState() {
    return this.state;
  }

  getInitialState() {
    throw "Override getInitialState()";
  }

  reduce(state, action) {
    throw "Override reduce(state, action)";
  }

  // Override this if mutable state!
  areEqual(one, two) {
    return one == two;
  }

  _invokeOnDispatch(action) {
    this.changed = false;

    const startingState = this.state;
    const endingState = this.reduce(startingState, action);

    if (!this.areEqual(startingState, endingState)) {
      this.state = endingState;
      this._emitChange();
    }

    if (this.changed) {
      this.emitter.emit(this.changeEvent);
    }
  }

}
