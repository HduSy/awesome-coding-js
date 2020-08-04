Function.prototype.myCall = function (context = window, ...args) {
    if (this == Function.prototype) {
        return undefined
    }
    context = window || context
    let fn = Symbol()
    context[fn] = this
    const result = context[fn](...args)
    delete context[fn]
    return result
}
Function.prototype.myApply = function (context = window, args) {
    if (this == Function.prototype) {
        return undefined
    }
    context = window || context
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

Function.prototype.myBind = function (context, ...args1) {
    if (this === Function.prototype) {
        throw new TypeError('Error')
    }
    const _this = this
    return function F(...args2) {
        // 判断是否用于构造函数
        if (this instanceof F) {
            return new _this(...args1, ...args2)
        }
        return _this.apply(context, args1.concat(args2))
    }
}

function f(context = window, args) {
    if (this == Function.prototype)
        return undefined
    context = window || context
    let fn = Symbol()
    context[fn] = this
    // let res = context[fn](...args) call
    // let res apply
    // if (Array.isArray(args)) {
    //     res = context[fn](...args)
    // } else
    //     res = context[fn]()
    let _this = this
    return function F(...args2) {
        if (this instanceof F) {
            return new _this(...args, ...args2)
        } else {
            return _this.apply(context, args.concat(args2))
        }
    }
    delete context[fn]
    return res
}