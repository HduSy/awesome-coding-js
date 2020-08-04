function sum(...args) {
    let sum = 0
    for (let i of args) {
        sum += i
    }
    return sum
}

function currying(fn, ...args1) {
    return function (...args2) {
        let allArgs = [...args1, ...args2]
        if (args2.length === 0) {
            return fn.apply(this, allArgs)
        } else {
            return currying(fn, ...allArgs) //注意有扩展运算符
        }
    }
}

//参数复用
let sumTenCurrid = currying(sum, 10)
//延迟执行，参数够的情况下才执行函数
console.log(sumTenCurrid(1)(2)(3, 4)())
