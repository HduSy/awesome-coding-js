function IsPopOrder(pushV, popV) {
    // write code here
    let tmp = [], idx = 0
    for (let i = 0; i < pushV.length; i++) {
        tmp.push(pushV[i])
        // 每次比较的都是辅助栈栈顶元素值与popV是否相等
        while (tmp.length && tmp[tmp.length - 1] === popV[idx]) {
            tmp.pop()
            idx++
        }
    }
    return tmp.length === 0
}