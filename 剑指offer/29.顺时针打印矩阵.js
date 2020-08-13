function printMatrix(matrix) {
    if (matrix.length === 0 || matrix[0].length === 0) return []
    let res = []
    let left = 0, right = matrix[0].length - 1, top = 0, bottom = matrix.length - 1
    //能取等号的
    while (left <= right && top <= bottom) {
        for (let i = left; i <= right; i++) {
            res.push(matrix[top][i])
        }
        top++
        for (let i = top; i <= bottom; i++) {
            res.push(matrix[i][right])
        }
        right--
        if (top > bottom || left > right) {
            break
        }
        for (let i = right; i >= left; i--) {
            res.push(matrix[bottom][i])
        }
        bottom--
        for (let i = bottom; i >= top; i--) {
            res.push(matrix[i][left])
        }
        left++
    }
    return res
}

let testArr = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]]
// testArr = []
console.log(printMatrix(testArr))