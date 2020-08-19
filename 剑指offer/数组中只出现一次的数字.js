function FindNumsAppearOnce(array) {
    // write code here
    // return list, 比如[a,b]，其中ab是出现一次的两个数字
    if (!array || !array.length) return undefined
    let res = []
    for (let i = 0; i < array.length; i++) {
        let num = array[i]
        let findex = array.indexOf(num)
        let index = array.lastIndexOf(num)
        if (findex === index)
            res.push(num)
    }
    return res
}
