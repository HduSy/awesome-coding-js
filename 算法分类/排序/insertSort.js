/**
 * 直接插入排序
 * 时间复杂度 n方 空间复杂度 1
 * 稳定
 * 从未排序元素中第一个元素插入到已排序元素中并使其有序
 * @param {Array} array
 */
function insertSort(array) {
    let len = array.length
    //剩余未排序元素挨个排序
    for (let i = 1; i < len; i++) {
        let k = i //剩下未排序元素索引
        //插入k元素且让已排序序列有序
        for (let j = i - 1; j >= 0; j--) {
            if (array[k] < array[j]) {
                //都可以，两数交换
                [array[k], array[j]] = [array[j], array[k]]
                // [array[j],array[k]]=[array[k],array[j]]
                k = j //之后与j-1比较
            } else {
                //已有序
                break
            }
        }
    }
}

let arr = [1, 2, 5, 4, 3]
insertSort(arr)
console.log(arr)