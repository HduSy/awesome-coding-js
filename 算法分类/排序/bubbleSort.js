/**
 * 冒泡排序
 * 时间复杂度 n方 空间复杂度 1
 * 稳定
 * 正序数组最快 反序数组最慢
 * @param {Array} array
 */
function bubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
        let complete = true
        //除了最后一个元素
        for (let j = 0; j < array.length - 1 - i; j++) {
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]]
                complete = false
            }
        }
        if (complete) {
            break
        }
    }
}

let arr = [1, 2, 5, 4, 3]
bubbleSort(arr)
console.log(arr)