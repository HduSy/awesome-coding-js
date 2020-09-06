function FindContinuousSequence(sum) {
    // write code here
    let res = []
    for (let j = 0; j < sum; j++) {
        let tmp = 0
        let seq = []
        for (let i = j + 1; i <= sum; i++) {
            tmp += i
            if (tmp < sum) {
                seq.push(i)
            } else if (tmp === sum) {
                seq.push(i)
                res.push(seq)
                break
            } else if (tmp > sum) {
                break
            }
        }
    }
    return res
}

console.log(FindContinuousSequence(100))
