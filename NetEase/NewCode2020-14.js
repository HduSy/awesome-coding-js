/**
 * 2
 1 5 7 2
 3 5 1 2
 * @type {module:readline}
 */
const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
let num = 0
let inputs = []
rl.on('line', function (line) {
    if (num === 0) {
        num = parseInt(line.trim())
    } else {
        inputs.push(line)
        if (inputs.length === num) {
            //处理
            inputs.forEach(val => console.log(deal(val.split(' ').map(Number))))
            //输出
            //重新初始化
            num = 0 //置零-固定代码
            inputs.length = 0 //置零-固定代码
        }
    }
})

function deal(arr) {
    let [A, B, p, q] = arr
    let target = B - A
    let res = 0
    while (p * Math.pow(q, res) < target) {
        res++
    }
    return res + 1
}
