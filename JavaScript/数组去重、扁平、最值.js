/**
 * 数组去重方法总结
 */
let testArr = [1, 2, 3, 3, 4]

// Object
function unique(arr) {
    let container = {}
    return arr.filter((item, index) => {
        return container.hasOwnProperty(item) ? false : container[item] = true
    })
}

//indexOf filter
function unique(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index)
}

//indexOf lastIndexOf filter
function unique(arr) {
    return arr.filter((item) => arr.indexOf(item) === arr.lastIndexOf(item))
}

//Set
function unique(arr) {
    return Array.from(new Set(arr))
}

//Set+...
function unique(arr) {
    return [...new Set(arr)]
}

function unique(arr) {
    arr.sort((a, b) => a - b) //升序排列
    let pre = 0, res = []
    for (let i = 0; i < arr.length; i++) {
        if (!i || arr[i] !== arr[pre]) {
            res.push(arr[i])
        }
        pre = i
    }
    return res
}

/**
 * 扁平
 */
//递归
function flat(arr) {
    let res = []
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            res = res.concat(flat(arr[i]))
        } else {
            res = res.concat(arr[i])
        }
    }
    return res
}

// return是必须的且不可用push,push返回新的长度
function flat(arr) {
    return arr.reduce((pre, current) => {
        return Array.isArray(current) ? pre.concat(flat(current)) : pre.concat(current)
    }, [])
}

testArr = [1, [2], [3, 4, [5]]]
console.log(flat(testArr))

/**
 * deep>1这里传入deep等于1时迷惑了
 * concat能够直接拼接一个数组
 * @param array
 * @param deep
 * @returns {*}
 */
function flattenByDeep(array, deep = 1) {
    return array.reduce((pre, curr) => {
        return Array.isArray(curr) && deep > 1 ? pre.concat(flattenByDeep(curr, deep - 1)) : pre.concat(curr)
    }, [])
}

console.log(flattenByDeep(testArr, 1)) //[ 1, 2, 3, 4, [ 5 ] ]
console.log(flattenByDeep(testArr, 2)) //[ 1, 2, 3, 4, 5 ]
/**
 * 最值
 */
testArr = [1, 2, 3, 4, -1, -2]

function maxVal(arr) {
    // return Math.max(...arr)
    // return Math.max.apply(null, arr)
    return arr.reduce((pre, cur) => Math.max(pre, cur))
}

console.log(maxVal(testArr))


/**
 * reduce实现map
 * 参数为一函数，每一item执行结果加入result中，最后返回
 */
Array.prototype.reduceToMap = function (handler) {
    return this.reduce((target, current, index) => {
        return target.concat(handler.call(this, current, index)) //this指向调用数组
    }, [])
}
console.log([1, 2, 3, 4].reduceToMap((item, index) => {
    return item + index
}))
/**
 * reduce实现filter
 * filter参数为一函数，返回值为true则加入result中，最后返回
 */
Array.prototype.reduceToFilter = function (handler) {
    return this.reduce((pre, curr, index) => {
        return handler.call(this, curr, index) === true ? pre.concat(curr) : pre //this指向调用数组;得是pre
    }, [])
}
console.log([1, 2, 3, 4, 5, 6, -1].reduceToFilter((item, index) => {
    return item > 2
}))
