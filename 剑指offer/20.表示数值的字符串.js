//s字符串
function isNumeric(s) {
    // write code here
    let condition = Number(s)
    return !Number.isNaN(condition)
}

console.log(isNumeric('1a3.14'))
