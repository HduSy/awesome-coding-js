/**
 * 循环升序数组 [4,5,6,1,2,3]
 * 二分查找的前提一定是已排序,所以首先判断哪边是有序的
 * 该循环数组max与min一定相邻，中间不存在一个值小于max大于left,这是循环升序数组一特点
 * @param arr
 * @param num
 * @returns {number}
 */
function findNum(arr, num) {
    let left = 0, right = arr.length - 1, mid = 0
    while (left < right) {
        mid = (left + right) >> 1
        if (arr[mid] === num) return mid
        if (arr[left] < arr[mid]) {
            //左侧区间有序，在左侧区间二分查找
            if (arr[left] < num && num <= arr[mid]) {
                right = mid - 1
            } else {
                left = mid + 1
            }
        } else {
            // 右侧区间有序，在右侧区间二分查找
            if (arr[mid] <= num && num < arr[right]) {
                left = mid + 1
            } else {
                right = mid - 1
            }
        }
    }
    //返回mid
    return mid
}

let testArr = [4, 5, 6, 7, 8, 9, 1, 2, 3]
console.log(findNum(testArr, 1))