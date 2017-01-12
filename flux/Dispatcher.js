export default class Dispatcher {

    constructor() {
        this.isDispatching = false;
        this.callbacks = {};
        this.pending = {};
        this.handled = {};
        this.id = 0;
    }

    // API start

    register(callback) {
        let id = this.id++;
        this.callbacks[id] = callback;
        return id;
    }

    unregister(id) {
        delete this.callbacks[id];
    }

    waitFor(ids) {
        if (!this.isDispatching) throw "Must be invoked while dispatching!";
        for (let i = 0; i < ids.length; i++) {
            let id = ids[i];
            if (this.pending[id]) {
                if (!this.handled[id]) {
                    throw "Whoops, circular dependency detected!";
                }
                continue;
            }
            this._invokeCallback(id);
        }
    }

    dispatch(payload) {
        if (this.isDispatching) throw "We are dispatching already!";
        this._startDispatching(payload);
        try {
            for (var id in this.callbacks) {
                if (this.pending[id]) {
                    continue;
                }
                this._invokeCallback(id);
            }
        } finally {
            this._stopDispatching();
        }
    }

    isDispatching() {
        return this.isDispatching;
    }

    // API end

    _startDispatching(payload) {
        for (var id in this.callbacks) {
            this.pending[id] = false;
            this.handled[id] = false;
        }
        this.pendingPayload = payload;
        this.isDispatching = true;
    }

    _stopDispatching() {
        delete this.pendingPayload;
        this.isDispatching = false;
    }

    _invokeCallback(id) {
        this.pending[id] = true;
        this.callbacks[id](this.pendingPayload);
        this.handled[id] = true;
    }
}

