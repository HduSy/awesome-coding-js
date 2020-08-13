function mergeSort(arr) {
    if (arr.length < 2)
        return arr
    let mid = Math.floor(arr.length / 2)
    let left = arr.slice(0, mid)
    let right = arr.slice(mid)
    return merge(mergeSort(left), mergeSort(right))
}

//合并两个有序序列
function merge(front, end) {
    let tmp = []
    while (front.length && end.length) {
        if (front[0] > end[0]) {
            tmp.push(end.shift())
        } else {
            tmp.push(front.shift())
        }
    }
    while (front.length) {
        tmp.push(front.shift())
    }
    while (end.length) {
        tmp.push(end.shift())
    }
    return tmp
}

let testArr = [1, 5, 3, 6, 4, 7, 2]
console.log(mergeSort(testArr))
