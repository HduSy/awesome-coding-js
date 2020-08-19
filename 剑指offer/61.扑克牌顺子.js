//巧妙利用间隔总数与0的总数而并没有我想的那么复杂
function IsContinuous(numbers) {
    if (!numbers || numbers.length < 1) return false
    numbers.sort((a, b) => a - b)
    let zeroNum = numbers.filter(item => item === 0).length
    let intervals = 0
    for (let i = zeroNum + 1; i < numbers.length; i++) {
        let cur = numbers[i - 1]
        let next = numbers[i]
        if (cur === next) return false
        if (cur - next !== 1) {
            intervals += next - cur - 1
        }
    }
    if (intervals <= zeroNum) return true
    return false
}

function IsContinuous(numbers) {
    if (!numbers || numbers.length < 1) return false
    numbers.sort((a, b) => a - b)
    let zeroNum = 0, spaceNum = 0
    for (let i = 0; i < numbers.length - 1; i++) {
        if (numbers[i] === 0) {
            zeroNum++
        } else {
            let pre = numbers[i], cur = numbers[i + 1]
            if (pre === cur) return false
            spaceNum += cur - pre - 1
        }
    }
    if (spaceNum <= zeroNum) return true
    return false
}
