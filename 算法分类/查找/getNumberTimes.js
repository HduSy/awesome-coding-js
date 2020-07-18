function getNumberTimes(array, item) {
    if (array && array.length > 0 && item !== null) {
        let firstK = firstTimeK(array, 0, array.length, item)
        let lastK = lastTimeK(array, 0, array.length, item)
        if (firstK !== -1 && lastK !== -1) {
            return lastK - firstK + 1
        }
    }
    return 0
}

function firstTimeK(array, start, end, item) {
    if (start > end)
        return -1
    let mid = Math.floor((start + end) / 2)
    if (array[mid] === item) {
        if (array[mid - 1] !== item) {
            return mid
        } else {
            return firstTimeK(array, start, mid - 1, item)
        }
    } else if (array[mid] > item) {
        return firstTimeK(array, start, mid - 1, item)
    } else {
        return firstTimeK(array, mid + 1, end, item)
    }
}

function lastTimeK(array, start, end, item) {
    if (start > end)
        return -1
    let mid = Math.floor((start + end) / 2)
    if (array[mid] === item) {
        if (array[mid + 1] !== item) {
            return mid
        } else {
            return lastTimeK(array, mid + 1, end, item)
        }
    } else if (array[mid] > item) {
        return lastTimeK(array, start, mid - 1, item)
    } else {
        return lastTimeK(array, mid + 1, end, item)
    }
}

let arr = [1, 1, 2, 2, 2, 3, 3, 4]
console.log(getNumberTimes(arr, 2))