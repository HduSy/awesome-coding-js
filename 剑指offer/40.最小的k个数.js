function GetLeastNumbers_Solution(input, k) {
    // write code here
    if (input && input.length >= k) {
        input.sort((a, b) => a - b)
        return input.slice(0, k)
    }
}

let testArr = [4, 5, 1, 6, 2, 7, 3, 8]
console.log(GetLeastNumbers_Solution(testArr, 5))
