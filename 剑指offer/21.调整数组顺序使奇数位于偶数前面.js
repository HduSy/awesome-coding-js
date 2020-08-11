function reOrderArray(array) {
    let len = array.length
    if (len < 1) return []
    let tmp = []
    for (let i = len - 1; i >= 0; i--) {
        if (!(array[i] % 2)) { //运算符优先级需要加小括号
            tmp.unshift(...array.splice(i, 1))
        }
    }
    // console.log(tmp)
    array.push(...tmp)
    return array
}

let testArr = [2, 4, 6, 1, 3, 5, 7]
console.log(reOrderArray(testArr)) //[5,3,1,4,2]
