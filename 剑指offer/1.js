/**
 * self
 * 二维数组查找
 * 82.56 100
 * @param arr
 * @param target
 * @returns {boolean}
 */
function find(arr, target) {
    if (arr.length < 1 || arr[0].length < 1) {
        return false
    }
    let row = 0
    let col = arr[0].length - 1
    while (row < arr.length && col >= 0) {
        let corner = arr[row][col]
        if (corner === target)
            return true
        else if (corner > target) {
            col--
        } else {
            row++
        }
    }
    return false
}

let testArr = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]]
console.log(find(testArr, 11))

function Find(target, array) {
    if (array.length < 1 || array[0].length < 1) {
        return false
    }
    let row = array.length, col = array[0].length
    //避免循环嵌套 能用while改进
    for (let i = 0; i < row;) {
        for (let j = col - 1; j >= 0;) {
            if (array[i][j] > target) {
                j--
            } else if (array[i][j] < target) {
                i++
            } else {
                return true
            }
        }
    }
    return false
}

console.log(Find(11, testArr))
