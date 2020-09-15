let testArr = [1, [2], [3, 4, [5]]]

//Bilibili面试官周冰提供的方法
function flat(arr) {
    let arrStr = arr.toString()
    return arrStr.split(',').map(Number)
}

flat(testArr)

function deepFlat(arr) {
    let res = []
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i]))
            res = res.concat(deepFlat(arr[i]))
        else
            res = res.concat(arr[i])
    }
    return res
}

console.log(deepFlat(testArr))

function reduceFlat(arr) {
    return arr.reduce((pre, cur) => {
        return Array.isArray(cur) ? pre.concat(reduceFlat(cur)) : pre.concat(cur)
    }, [])
}

console.log(reduceFlat(testArr))