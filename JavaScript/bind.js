Function.prototype.myBind = function (context, ...args1) {
    if (this === Function.prototype)
        return undefined
    let that = this //调用此方法的函数
    return function F(...args2) { //返回的函数能接收更多参数
        if (this instanceof F) {
            return new that(...args1, ...args2)
        } else
            return that.apply(context, args1.concat(args2))
    }
}
