/**
 * 函数柯里化 https://juejin.im/post/5af13664f265da0ba266efcf
 * 将接收多个参数的函数变为初始接收一个参数，其余参数由返回一个函数接收处理
 * 延迟执行；参数复用
 */
function add(x, y) {
    console.log(x + y)
}

//不通用，而且是通过编码函数本身
function curriedAdd(x) {
    return function (y) {
        console.log(x + y)
    }
}

let increment = curriedAdd(1)
increment(2) //3
let addTen = curriedAdd(10)
addTen(2) //12

//进一步 返回值应该是个接收剩余参数并计算返回值，但其返回值并未柯里化，可通过递归使其柯里化
function curried2Add(fn, ...args1) {
    return function (...args2) {
        return fn(...args1, ...args2)
    }
}

addTen = curried2Add(add, 10)
console.log(addTen(2)) //12

function trueCurring(fn, ...args) {
    if (args.length >= fn.length) {
        return fn(...args)
    } else {
        return function (...args2) {
            return trueCurring(fn, ...args, ...args2)
        }
    }
}

add2 = trueCurring(add)
console.log(add2(1)(2))
console.log(add2(1, 2))
console.log(add2(1, 2, 3))
add3 = trueCurring(add, 3)
console.log(add3(3)) //6 参数复用

function add(x, y) {
    return x + y
}

function sum(...args) {
    let sum = 0
    for (let i of arguments) {
        sum += i
    }
    return sum
}

/**
 * 正确写法
 * @param fn
 * @param args
 * @returns {function(...[*]=)}
 */
function carling(fn, ...args) {
    return function (...nextArgs) {
        let allArgs = [...args, ...nextArgs]
        if (nextArgs.length === 0) {
            return fn.apply(null, allArgs)
        }
        return carling(fn, ...allArgs)
    }
}

addFinal = carling(sum, 1)
console.log(addFinal())

function selfCurring(fn, ...args1) {
    args1 = args1 || []
    return function () {
        let allArgs = args1.concat([].slice.call(arguments))
        return selfCurring(fn, allArgs)
    }
}