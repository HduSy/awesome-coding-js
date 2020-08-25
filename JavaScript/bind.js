/**
 * bind未写出来得多看看
 * @param context
 * @param args1
 * @returns {undefined|F}
 */
Function.prototype.myBind = function (context, ...args1) {
    if (this === Function.prototype)
        return undefined
    let that = this //调用此方法的函数
    return function F(...args2) { //返回的函数能接收更多参数
        if (this instanceof F) {
            //规范说明，使用new操作符调用bind绑定函数时，第一个参数无效
            return new that(...args1, ...args2)
        } else
            return that.apply(context, args1.concat(args2))
    }
}

function myBind(context, ...args) {
    if (this instanceof Function.prototype)
        return undefined
    let that = this
    return function F(...args2) {
        if (this instanceof F) {
            return new that(...args, ...args2)
        } else {
            return that.apply(context, args.concat(args2))
        }
    }
}
