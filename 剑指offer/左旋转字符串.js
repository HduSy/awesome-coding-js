//0AC
function LeftRotateString(str, n) {
    // write code here
    if (str.length === n) return str
    if (str.length < n) n = n % str.length
    let strArr = str.split('')
    let tmp = strArr.splice(0, n)
    return strArr.concat(tmp).join('')
}

//AC
function LeftRotateString(str, n) {
    // write code here
    if (!str) return ''
    if (str.length === n) return str
    if (str.length < n) n = n % str.length
    let strArr = str.slice(0, n)
    let tmp = str.slice(n)
    return tmp + strArr
}

//不要小看临界判别，以上两种做法都因为忘记验证`str不存在时返回''`而0AC
console.log(LeftRotateString('abcXYZdef', 3))
