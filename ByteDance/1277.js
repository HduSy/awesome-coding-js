/**
 * @param {number[][]} matrix
 * @return {number}
 */
var countSquares = function (matrix) {
    if (matrix == null || matrix.length < 1 || matrix[0].length < 1)
        return 0
    let row = matrix.length, col = matrix[0].length
    let dp = new Array(row).fill(0).map(() => new Array(col).fill(0))
    let sum = 0
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (matrix[i][j] == '1') {
                if (i == 0 || j == 0) {
                    dp[i][j] = 1
                } else {
                    dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1
                }
            }
            sum += dp[i][j]
        }
    }
    return sum
};
let arr = [
    [0, 1, 1, 1],
    [1, 1, 1, 1],
    [0, 1, 1, 1]
]
console.log(countSquares(arr))