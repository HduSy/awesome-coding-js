//不通过
function cutRope(number) {
    // write code here
    let res = 0
    for (let i = 2; i <= number; i++) {
        let a = i
        let number2 = number - a
        for (let j = 2; j <= number2 && number2 >= 2; j++) {
            let b = j
            let multiplyVal = number2 - b > 0 ? a * b * (number2 - b) : 0
            res = Math.max(multiplyVal, res)
        }
    }
    return res
}

function cutRope(number) {
    //规律
    if (number === 2) return 1
    if (number === 3) return 2
    if (number === 4) return 4
    let max = 1
    //小于5没必要再减，直接乘剩下的长度
    while (number >= 5) {
        number -= 3
        max *= 3
    }
    if (number)
        max *= number
    return max
}

function cutRope(number) {
    // write code here
    let threeNum = 0
    if (number < 4) return number - 1
    if (number === 4) return 4
    while (number > 4) {
        threeNum++
        number -= 3
    }
    return Math.pow(3, threeNum) * number
}

console.log(cutRope(15))
