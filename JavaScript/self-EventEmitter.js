function EventEmitter() {
    this._maxEventEmitterCount = 10
    this._events = Object.create(null)
}

EventEmitter.prototype = {
    addListener(type, listener, prepend) {
        if (!this._events) {
            this._events = Object.create(null)
        }
        if (this._events[type]) {
            if (prepend) {
                this._events[type].unshift(listener)
            } else {
                this._events[type].push(listener)
            }
        } else {
            this._events[type] = [listener]
        }
    },
    //移除全部|移除指定
    removeListener(type, listener) {
        if (Array.isArray(this._events[type])) {
            if (!listener) {
                delete this._events[type]
            } else {
                this._events[type] = this._events[type].filter(e => e !== listener && e.origin !== listener)
            }
        }
    },
    once(type, listener) {
        const only = (...args) => {
            listener.apply(this, args);
            this.removeListener(type, listener);
        }
        only.origin = listener;
        this.addListener(type, only);
    },
    //队列中每个回调函数传参
    emit(type, ...args) {
        if (Array.isArray(this._events[type])) {
            this._events[type].forEach(fn => {
                fn.apply(this, args)
            })
        }
    },
    setMaxListeners(count) {
        this._maxEventEmitterCount = count
    }
}
