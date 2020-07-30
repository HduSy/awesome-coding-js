Function.prototype.myCall = function (context,...args) {
    //this是调用myCall的函数就相当于func.call(this,...args)中的func
    if (this === Function.prototype)
        return undefined
    context = context || window //call第一个参数为null或undefined时this指向window
    let fn = Symbol() //临时属性 Symbol绝配
    context[fn] = this //将调用myCall的函数临时赋值给context一个属性
    let result = context[fn](...args)
    delete context[fn]
    return result
}
