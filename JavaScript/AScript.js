function S(n) {
    if (n < 10)
        return n
    let y = n % 9
    let res = []
    if (y) {
        res.push(y)
    }
    let z = parseInt(n / 9)
    for (let i = 0; i < z; i++) {
        res.push(9)
    }
    res.sort((a, b) => a - b)
    return res.join('')
}

/**
 * 使用字符串操作写出更加简洁的代码
 * @param n
 * @returns {string}
 * @constructor
 */
function S(n) {
    let res = ''
    let z = parseInt(n / 9)
    let y = n % 9
    for (let i = 0; i < z; i++) {
        res += '9'
    }
    if (y) {
        res = y + res
    }
    return res
}

console.log(S(20))
