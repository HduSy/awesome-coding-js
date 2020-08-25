function myCall(context, ...args) {
    if (this instanceof Function.prototype)
        return undefined
    context = context || window
    let fn = Symbol()
    context[fn] = this
    let res = context[fn](...args)
    delete context[fn]
    return res
}

function myApply(context, args) {
    if (this instanceof Function.prototype)
        return undefined
    context = context || window
    let fn = Symbol()
    context[fn] = this
    let res
    if (!Array.isArray(args)) {
        res = context[fn]()
    } else {
        res = context[fn](...args)
    }
    delete context[fn]
    return res
}

function myBind(context, ...args1) {
    if (this instanceof Function.prototype)
        return undefined
    let that = this
    return function F(...args2) {
        if (this instanceof F) {
            return new that(...args1, ...args2)
        } else {
            return that.apply(context, args1.concat(args2))
        }
    }
}
