function multiply(array) {
    if (!array || array.length <= 1) return false
    let B = []
    for (let i = 0; i < array.length; i++) {
        B[i] = getMultiply(array, i)
    }
    return B
}

function getMultiply(arr, index) {
    let res = 1
    if (index === 0) {
        for (let i = 1; i < arr.length; i++) {
            res *= arr[i]
        }
        return res
    } else if (index === arr.length - 1) {
        for (let i = 0; i < arr.length - 1; i++) {
            res *= arr[i]
        }
        return res
    } else {
        for (let i = 0; i < arr.length; i++) {
            if (i !== index) {
                res *= arr[i]
            }
        }
        return res
    }
}

console.log(multiply([1, 2, 3, 4, 5]))
