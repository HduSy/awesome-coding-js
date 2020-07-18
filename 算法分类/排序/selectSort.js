/**
 * 选择排序
 * 从未排序元素中选择最小(最大)的排在已排序末尾
 * 不稳定
 * @param {Array} array
 */
function selectSort(array) {
    for (let i = 0; i < array.length - 1; i++) {
        let minIndex = i //左侧已排序元素最后一个元素索引
        //i右侧未排序元素中选择最小或最大的元素，从i+1开始
        for (let j = i + 1; j < array.length; j++) {
            if (array[minIndex] > array[j]) {
                minIndex = j //元素并未发生移动，保存索引
            }
        }
        [array[minIndex], array[i]] = [array[i], array[minIndex]]
    }
}

let arr = [1, 2, 5, 4, 3]
selectSort(arr)
console.log(arr)