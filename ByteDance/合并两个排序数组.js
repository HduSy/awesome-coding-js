let testArr1 = [1, 3, 4, 8]
let testArr2 = [2, 5, 6, 7, 9]

function sortTwoArr(arr1, arr2) {
    let res = []
    let p1 = 0, p2 = 0
    while (p1 < arr1.length && p2 < arr2.length) {
        if (arr1[p1] <= arr2[p2]) {
            res.push(arr1[p1])
            p1++
        } else {
            res.push(arr2[p2])
            p2++
        }
    }
    if (p1 === arr1.length && p2 < arr2.length) {
        res.push(...arr2.slice(p2))
    }
    if (p2 === arr2.length && p1 < arr1.length) {
        res.push(...arr1.slice(p1))
    }
    return res
}

console.log(sortTwoArr(testArr1, testArr2))

function primitiveArrFunc(arr1, arr2) {
    let res = [...arr1, ...arr2]
    return res.sort((a, b) => a - b)
}

console.log(primitiveArrFunc(testArr1, testArr2))