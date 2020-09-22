function SingleTon(name) {
    this.name = name
    this.instance = null
}

SingleTon.prototype.getName = function () {
    return this.name
}
SingleTon.getInstance = (function () {
    let instance = null
    return (name) => {
        if (!instance) {
            instance = new SingleTon(name)
        }
        return instance
    }
})()
let a = SingleTon.getInstance('haha')
let b = SingleTon.getInstance('haha')
console.log(a === b)