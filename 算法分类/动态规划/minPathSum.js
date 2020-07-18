/**
 * 最小路径和
 * 动态规划
 * @param grid
 * @returns {*}
 */
function minPathSum(grid) {
    let r = grid.length
    let c = grid[0].length
    for (let i = 0; i < r; i++) {
        for (let j = 0; j < c; j++) {
            if (i === 0 && j !== 0) {
                //base case
                grid[i][j] += grid[i][j - 1]
            } else if (j === 0 && i !== 0) {
                //base case
                grid[i][j] += grid[i - 1][j]
            } else if (i !== 0 && j !== 0) {
                //state transition
                grid[i][j] += Math.min(grid[i - 1][j], grid[i][j - 1])
            }
        }
    }
    return grid[r - 1][c - 1]
}

let arr = [
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1]
]
console.log(minPathSum(arr))