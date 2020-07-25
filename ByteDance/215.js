/**
 * 215
 * self
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
    if (nums.length < 1)
        return -1
    nums.sort((a, b) => a - b)
    return nums[nums.length - k]
};
console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2))
console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4))
console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6, 7, 7, 8, 2, 3, 1, 1, 1, 10, 11, 5, 6, 2, 4, 7, 8, 5, 6], 2))

findKthLargest = function (nums, k) {
    //插入排序
    for (let i = 1; i < nums.length; i++) {
        let z = i
        for (let j = i - 1; j >= 0; j--) {
            if (nums[z] < nums[j]) {
                [nums[z], nums[j]] = [nums[j], nums[z]]
                z = j
            } else {
                break
            }
        }
    }
    return nums[nums.length - k]
}
console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6, 7, 7, 8, 2, 3, 1, 1, 1, 10, 11, 5, 6, 2, 4, 7, 8, 5, 6], 2))
