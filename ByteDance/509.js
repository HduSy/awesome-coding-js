/**
 * 斐波那契数
 * 尾递归
 * @param {number} N
 * @return {number}
 */
var fib = function (N) {
    if (N === 0) return 0
    if (N === 1) return 1
    return fib(N - 1) + fib(N - 2)
};
console.log(fib(4))
fib = function (N) {
    if (N === 0) return 0
    if (N === 1) return 1
    let pre = 0, cur = 1, res = 0
    for (let i = 2; i <= N; i++) {
        res = pre + cur
        pre = cur
        cur = res
    }
    return res
}
console.log(fib(4))
