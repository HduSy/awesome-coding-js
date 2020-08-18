function MoreThanHalfNum_Solution(numbers) {
    // write code here
    let len = numbers.length
    if (len === 0) return 0
    if (len === 1) return numbers[0]
    if (len === 2 && numbers[0] === numbers[1]) return numbers[0]
    let map = {}
    for (let i = 0; i < len; i++) {
        let num = numbers[i]
        if (!map[num])
            map[num] = 1
        else
            map[num]++
    }
    len = Math.floor(len / 2)
    for (let i in map) {
        if (map[i] > len) {
            return i
        }
    }
    return 0
}

let testArray = [1, 2, 3, 2, 2, 2, 5, 4, 2]

console.log(MoreThanHalfNum_Solution(testArray))
