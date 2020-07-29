const Observer = (function () {
    let __message = {}

    return {
        on(type, handle) {
            if (typeof __message[type] === undefined) {
                __message[type] = [handle]
            } else {
                __message[type].push(handle)
            }
        },
        subscribe(type, args) {
            if (!__message[type]) return
            let events = {
                type: type,
                args: args || {}
            }
            for (let i = 0; i < __message[type].length; i++) {
                __message[type][i].call(this, events)
            }
        },
        off(type, handle) {
            if (__message[type] instanceof Array) {
                for (let i = __message[type].length - 1; i >= 0; i--) {
                    __message[type][i] === handle && __message[type].splice(i, 1)
                }
            }
        }
    }
})()

Observer.on('say', function (data) {
    console.log(data.args.text)
})
Observer.on('success', function () {
    console.log('success')
})
Observer.subscribe('say', {text: 'hello world'})
Observer.subscribe('success')