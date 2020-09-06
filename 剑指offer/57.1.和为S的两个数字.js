function FindNumbersWithSum(array, sum) {
    // write code here
    if (!array || array.length < 2) return []
    for (let i = 0; i < array.length; i++) {
        let f = array[i]
        if (f >= sum) return []
        let s = sum - f
        if (array.lastIndexOf(s) !== -1)
            return [f, s]
    }
    return []
}
