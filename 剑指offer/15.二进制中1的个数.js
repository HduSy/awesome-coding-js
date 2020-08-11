function NumberOf1(n) {
    let count = 0
    while (n) {
        count++
        n = n & (n - 1) //每次把n二进制表示最靠右的1变为0，手写7试试
    }
    return count
}
