function test(arr) {
    return Array.prototype.flat.call(arr, 1)
}

let testArr = [1, [1, [2,]], 2, 4,]
console.log(test(testArr))
testArr = [, , , ,]

testArr.forEach(item => console.log(item))
testArr.map(item => console.log(item))
for (let i = 0; i < testArr.length; i++) {
    console.log(testArr[i])
}
console.log(testArr.length)
