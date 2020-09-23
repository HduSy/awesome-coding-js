const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
let N = 0, nums = [], Q = 0, inputs = [], lineNo = 0
rl.on('line', function (line) {
    lineNo++
    if (lineNo === 1) {
        N = Number(line.trim())
    } else {
        if (lineNo <= N + 1) {
            nums.push(Number(line.trim()))
        } else if (lineNo === N + 2) {
            //读下一行
            Q = Number(line.trim())
        } else {
            if (lineNo <= N + Q + 2) {
                inputs.push(line.split(' ').map(Number))
            }
            if (lineNo === N + Q + 3) {
                console.log('下一行还有数要读时执行本行')
            }
            //inputs长度已够进行本轮处理
            if (inputs.length === Q) {
                deal(N, nums, Q, inputs)
                N = 0
                nums.length = 0
                Q = 0
                inputs.length = 0
                lineNo = 0
            }
        }
    }
})

function deal(N, nums, Q, inputs) {
    let sum = new Array(N + 1).fill(0)
    for (let i = 0; i < N; i++) {
        sum[i + 1] = sum[i] + nums[i]
    }
    for (let i = 0; i < Q; i++) {
        let [start, k] = inputs[i]
        console.log(sum[start + k - 1] - sum[start - 1])
    }
}
