export default class Store {

    constructor(dispatcher) {
        this.dispatcher = dispatcher;
        this.changed = false;
        this.changeEvent = 'change';
        this.callbacks = {};
        this.id = 0;
        this.emitter = {}; //TODO: Plugin riotjs event system
        this.dispatchToken = dispatcher.register((payload) => {
            this._invokeOnDispatch(payload);
        });
    }

    addListener(callback) {
        let id = this.id++;
        this.callbacks[id] = callback;
        return id;
    }

    getDispatcher() {
        return this.dispatcher;
    }

    getDispatchToken() {
        return this.dispatchToken;
    }

    hasChanged() {
        if (!this.dispatcher.isDispatching()) throw "Must be invoked while dispatching!";
        return this.changed;
    }

    _emitChange() {
        this.changed = true;
    }

    _invokeOnDispatch(payload) {
        this.changed = false;
        this._onDispatch(payload);
        if (this.changed) {
            this.emitter.emit(this.changeEvent);
        }
    }

    _onDisplay(payload) {
        throw "You need to override _onDisplay()!"; 
    }
}
