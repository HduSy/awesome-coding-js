function duplicate(numbers, duplication) {
    // write code here
    //这里要特别注意~找到任意重复的一个值并赋值到duplication[0]
    //函数返回True/False
    if (!numbers || numbers.length < 1) return false
    for (let i = 0; i < numbers.length; i++) {
        let lastIndex = numbers.lastIndexOf(numbers[i])
        if (i !== lastIndex) {
            duplication[0] = numbers[i]
            return true
        }
    }
    return false
}
