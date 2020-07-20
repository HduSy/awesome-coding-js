function SimgleTon(name) {
    this.name = name
}

SimgleTon.prototype = {
    getName() {
        return this.name
    }
}
//闭包实现单例模式
//闭包还有其他应用如防抖节流函数\循环创建
SimgleTon.getInstance = (function () {
    let instance //被共享
    return function (name) {
        if (!instance) {
            instance = new SimgleTon(name)
        }
        return instance
    }
})()
let a = SimgleTon.getInstance('CondarLi')
let b = SimgleTon.getInstance('CondardLi')
console.log(a === b)

//循环内闭包
function createArrayFunc(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = (function (j) {
            return function () {
                return j
            }
        })(i)
    }
}

let arr = [0, 1, 2]
createArrayFunc(arr)
console.log(arr[2]())
