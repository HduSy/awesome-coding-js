//递归做法
function jumpMethods(n) {
    if (n === 1)
        return 1
    if (n === 2)
        return 2
    return jumpMethods(n - 1) + jumpMethods(n - 2)
}

console.log(jumpMethods(10))

//dp数组
function jumpFloor(number) {
    let res = [1, 2]
    for (let i = 2; i <= number; i++) {
        res[i] = res[i - 1] + res[i - 2]
    }
    return res[number - 1]
}

console.log(jumpFloor(10))

