function NumberOf1Between1AndN_Solution(n) {
    // write code here
    let res = 0
    for (let i = 1; i <= n; i++) {
        res += countOne(i)
    }
    return res
}

function countOne(num) {
    let arr = num.toString().split('')
    let sum = 0
    for (let i of arr) {
        if (i === '1')
            sum++
    }
    return sum
}

