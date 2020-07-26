/**
 * 1
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let len = nums.length
    if (len < 2) return []
    let res = []
    for (let i = 0; i < len; i++) {
        let first = nums[i]
        for (let j = i + 1; j < len; j++) {
            if (target - first === nums[j])
                return [i, j]
        }
    }
    return []
};