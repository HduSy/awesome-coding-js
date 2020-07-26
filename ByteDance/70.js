/**
 * 70
 * 爬楼梯
 * n正整数
 * @param {number} n
 * @return {number}
 */
//尾递归
var climbStairs = function (n) {
    if (n === 1) return 1
    if (n === 2) return 2
    return climbStairs(n - 1) + climbStairs(n - 2)
};
console.log(climbStairs(3))
//优化递归
climbStairs = function (n) {
    let dp = [1, 2]
    for (let i = 2; i < n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2]
    }
    return dp[n - 1]
}
console.log(climbStairs(6))
//优化空间
climbStairs = function (n) {
    if (n === 1) return 1
    if (n === 2) return 2
    let pre = 1, cur = 2
    for (let i = 2; i < n; i++) {
        [pre, cur] = [cur, pre + cur]
    }
    return cur
}

console.log(climbStairs(6))
