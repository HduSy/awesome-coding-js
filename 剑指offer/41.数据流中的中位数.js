let arr = []

function Insert(num) {
    // write code here
    arr.push(num)
    arr.sort((a, b) => a - b)

}

//数组取中间索引值
function GetMedian() {
    // write code here
    let len = arr.length
    if (len % 2 === 1) {
        return arr[(len - 1) / 2]
    } else {
        return (arr[len / 2] + arr[len / 2 - 1]) / 2
    }
}
