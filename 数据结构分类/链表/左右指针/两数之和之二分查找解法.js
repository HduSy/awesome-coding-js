// 只要数组有序就可以考虑双指针
function twoSum(arr, sum) {
    let left = 0, right = arr.length - 1, mid = 0, target = 0
    while (left < right) {
        target = arr[left] + arr[right]
        if (target > sum) {
            right--
        } else if (target < sum) {
            left++
        } else {
            return [left, right]
        }
    }
    return [-1, -1]
}

let testArr = [2, 7, 11, 15]

console.log(twoSum(testArr, 18))