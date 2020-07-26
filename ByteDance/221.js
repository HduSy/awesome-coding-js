/**
 * 221 最大正方形
 * 动态规划法
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
    if (matrix == null || matrix.length == 0 || matrix[0].length == 0)
        return 0
    let maxSide = 0
    let rows = matrix.length, columns = matrix[0].length
    let dp = new Array(rows).fill(0).map(() => new Array(columns).fill(0))

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            if (matrix[i][j] == '1') {
                if (i == 0 || j == 0) {
                    dp[i][j] = 1
                } else {
                    //Math.min而不是Math.max
                    dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1
                }
                maxSide = Math.max(maxSide, dp[i][j])
            }
        }
    }
    return maxSide * maxSide
};
let arr = [
    [1, 0, 1, 0, 0],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 0, 0, 1, 0]
]
console.log(maximalSquare(arr))