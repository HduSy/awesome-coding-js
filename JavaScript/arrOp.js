// 去重
let unique = (arr) => [...new Set(arr)]
unique = arr => Array.from(new Set(arr))
unique = arr => arr.filter((item, index) => arr.indexOf(item) === index)
//扁平化
const flat = (arr) => {
    let res = []
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            res = res.concat(flat(arr[i]))
        } else {
            res.push(arr[i])
        }
    }
    return res
}
const flatReduce = (arr) => {
    return arr.reduce((target, curr) => {
        Array.isArray(curr) ? target.concat(flatReduce(curr)) : target.concat(curr)
    }, [])
}
//max
const Max = (arr) => arr.reduce((pre, cur) => Math.max(pre, cur))
const MathMax = arr => Math.max.apply(null, arr)

Array.prototype.reduceToMap = function (handler) {
    return this.reduce((pre, cur, index) => {
        pre.push(handler(this, cur, index))
        return pre //reduce的返回更新了下次执行的参数pre
    }, [])
}
Array.prototype.reduceToFilter = function (handler) {
    return this.reduce((pre, cur, index) => {
        if (handler.call(this, cur, index)) {
            pre.push(cur)
        }
        return pre
    }, [])
}
