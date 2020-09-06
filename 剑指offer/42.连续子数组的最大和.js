//明确状态=>定义dp数组或dp函数=>明确选择(状态转移方程)=>明确base case
function FindGreatestSumOfSubArray(array) {
    let len = array.length
    //base case
    if (len === 1)
        return array[0]
    //定义dp
    let dp = [array[0]]
    //明确选择
    for (let i = 1; i < len; i++) {
        //状态转移方程 XXX错误
        if (dp[i - 1] > 0) {
            dp[i] = dp[i - 1] + array[i]
        } else {
            //小于0与我无益
            dp[i] = array[i]
        }
    }
    return Math.max(...dp)
}

//dp定义模糊，导致状态转移方程没写出来，dp定义为到当前元素为止，最大连续字向量和
let testArray = [-1, 6, -3, -2, 7, -15, 1, 2, 2]
console.log(FindGreatestSumOfSubArray(testArray))

function Success(array) {
    let len = array.length
    if (len === 1) {
        return array[0]
    }
    let sum = array[0]
    let max = array[0]
    for (let i = 1; i < len; i++) {
        if (sum < 0) {
            sum = array[i]
        } else {
            sum += array[i]
        }
        if (sum >= max) {
            max = sum
        }
    }
    return max
}

console.log(Success(testArray))
