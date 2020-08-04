// https://segmentfault.com/a/1190000012842251

function SingleTon(name) {
    this.name = name
}

SingleTon.prototype.getName = function () {
    return this.name
}
//闭包实现单例模式
//闭包还有其他应用如防抖节流函数\循环创建
SingleTon.getInstance = (function () {
    let instance
    return function (name) {
        if (!instance) {
            instance = new SingleTon(name)
        }
        return instance
    }
})()

let a = SingleTon.getInstance('a')
let b = SingleTon.getInstance('b')
console.log(b.getName()) //a
console.log(a === b) //true

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
