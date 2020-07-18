/**
 * 打家劫舍
 * @param nums
 * @returns {number|*}
 */
function rob(nums) {
    let len = nums.length
    //base case
    if (len < 2) {
        return nums[len - 1] ? nums[len - 1] : 0
    }
    //base case
    let current = [nums[0], Math.max(nums[0], nums[1])]
    for (let i = 2; i < len; i++) {
        //state transition
        current[i] = Math.max(current[i - 2] + nums[i], current[i - 1])
    }
    return current[len - 1]
}

let moneys = [2, 7, 9, 3, 1]
console.log(rob(moneys))