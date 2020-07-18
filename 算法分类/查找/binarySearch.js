/**
 * 非递归版
 * 二分查找[折半查找]
 * 比较次数少，查找速度快，平均性能好
 * 要求为有序表，且插入删除困难
 * @param array
 * @param item
 * @returns {number|*}
 */
function binarySearch(array, item) {
    let start = 0, end = array.length
    while (start <= end) {
        let mid = Math.floor((start + end) / 2)
        if (array[mid] === item) {
            return mid
        } else if (array[mid] > item) {
            end = mid - 1
        } else {
            start = mid + 1
        }
    }
    return -1
}

function binarySearch(array, start, end, item) {
    if (start > end)
        return -1
    let mid = Math.floor((start + end) / 2)
    if (array[mid] === item)
        return mid
    else if (array[mid] < item)
        return binarySearch(array, mid + 1, end, item)
    else
        return binarySearch(array, start, end - 1, item)
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(binarySearch(arr, 0, 8, 5))