/**
 * 0.6
 * @param sequence
 * @returns {boolean|boolean}
 * @constructor
 */
function VerifySquenceOfBST(sequence) {
    if (sequence.length <= 1) return true
    let val = sequence.pop()
    let index = sequence.findIndex(item => item > val)
    //问题就出在并不能保证index右侧除val之外全大于val
    let sequenceLeft = sequence.slice(0, index)
    let sequenceRight = sequence.slice(index, sequence.length - 1)
    return VerifySquenceOfBST(sequenceLeft) && VerifySquenceOfBST(sequenceRight)
}

/**
 * 正解
 * @param sequence
 * @returns {boolean|boolean}
 * @constructor
 */
function VerifySquenceOfBST(sequence) {
    if (!sequence.length) return false;
    let len = sequence.length - 1
    let root = sequence[len]
    let i = 0
    for (; i < len; i++) {
        if (sequence[i] > root)
            break
    }
    for (let j = i; j < len; j++) {
        if (sequence[j] < root)
            return false
    }
    let left = true
    //几个判断保险一点
    if (i > 0)
        left = VerifySquenceOfBST(sequence.slice(0, i))
    let right = true
    //几个判断保险一点
    if (i < len)
        right = VerifySquenceOfBST(sequence.slice(i, len))
    return (left && right)
}
