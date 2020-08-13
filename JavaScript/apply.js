Function.prototype.myApply = function (context, args) {
    if (this === Function.prototype)
        return undefined
    context = context || window
    let fn = Symbol()
    context[fn] = this
    let result
    if (Array.isArray(args)) {
        result = context[fn](...args)
    } else {
        result = context[fn]()
    }
    delete context[fn]
    return result
}

function myApply(context, args) {
    if (this instanceof Function.prototype) {
        return undefined
    }
    context = context || window
    let fn = new Symbol()
    context[fn] = this
    let result
    if (Array.isArray(args)) {
        result = context[fn](...args)
    } else {
        result = context[fn]()
    }
    delete context[fn]
    return result
}
