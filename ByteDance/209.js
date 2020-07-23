/**
 * 209长度最小的子数组
 * self
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (s, nums) {
    let len = nums.length
    let res = Infinity
    if (len < 1)
        return 0
    for (let i = 0; i < len; i++) {
        if (nums[i] >= s)
            return 1
        else {
            let sum = nums[i]
            for (let j = i + 1; j < len; j++) {
                sum += nums[j]
                if (sum >= s) {
                    res = Math.min(res, j - i + 1)
                    break
                }
            }
        }
    }
    return isFinite(res) ? res : 0
};
// console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]))
/**
 * 双指针法
 * @param s
 * @param nums
 */
minSubArrayLen = function (s, nums) {
    let start = 0, end = 0, len = nums.length, res = Infinity
    if (len < 1)
        return 0
    let sum = 0
    while (end < len && start <= end) {
        sum += nums[end]
        while (sum >= s) {
            sum -= nums[start]
            res = Math.min(res, end - start + 1)
            start++
        }
        end++
    }
    return isFinite(res) ? res : 0
}

// console.log(minSubArrayLen(11, [1, 2, 3, 4, 5]))
/**
 * 维护数组
 */
minSubArrayLen = function (s, nums) {
    let len = nums.length
    let arr = []
    let min = len + 1
    let sum = 0
    for (let i = 0; i < len; i++) {
        arr.push(nums[i])
        sum += arr[i]
        while (sum >= s) {
            sum -= arr[0]
            min = Math.min(min, arr.length)
            arr.shift()
        }
    }
    return min === len + 1 ? 0 : min
}
/**
 * push shift操作耗时进一步优化
 */
minSubArrayLen = function (s, nums) {
    let len = nums.length
    let row = 0
    let min = len + 1
    let sum = 0
    for (let i = 0; i < len; i++) {
        sum += nums[i]
        while (sum >= s) {
            sum -= nums[row]
            min = Math.min(min, i - row + 1)
            row++
        }
    }
    return min === len + 1 ? 0 : min
}

console.log(Number.isNaN('abc')) //false 不作类型转换
console.log(isNaN('abc')) //true 类型转换
console.log(Number.isFinite('abc')) //false
console.log(isFinite('123')) //true
