/**
 * 快速排序
 * @param{Array} array
 */
function quickSort(array) {
    if (array.length < 2) {
        return array
    }
    let left = []
    let right = []
    let target = array[0]
    for (let i = 1; i < array.length; i++) {
        if (array[i] > target) {
            right.push(array[i])
        } else {
            //等于也会插入左侧，造成不稳定性
            left.push(array[i])
        }
    }
    return quickSort(left).concat([target], quickSort(right))
}

let arr = [1, 2, 5, 4, 3]
quickSort(arr)
console.log(quickSort(arr))