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

function add(x, y, z) {
    return x + y + z
}

//对于要实现这种参数不定求和，函数定义时length不可得知，必须经过判断
function cur(fn, ...args1) {
    return (...args2) => {
        let allArgs = [...args1, ...args2]
        if (args2.length === 0) {
            return fn.apply(this, allArgs)
        } else {
            return cur(fn, ...args1, ...args2)
        }
    }
}

//除连续求和外的普通函数柯里化应用问题
function cur(fn, ...args1) {
    if (args1.length >= fn.length) {
        return fn(...args1)
    } else {
        return (...args2) => cur(fn, ...args1, ...args2)
    }
}

let addTen = cur(add, 10)
let addCuring = cur(add)
console.log(addTen(1, 2)) //13
console.log(addCuring(1)(2)(3)) // 6
function computeMoney(discount, sum) {
    return (1 - discount) * sum
}

let discount20 = cur(computeMoney, 0.2)

console.log(discount20(100))

function sum(...args) {
    let sum = 0
    for (let i of args) {
        sum += i
    }
    return sum
}

//对于要实现这种参数不定求和，函数定义时length不可得知，必须经过判断

// let chainSum = cur(sum)
// console.log(chainSum(1)(2, 3))
