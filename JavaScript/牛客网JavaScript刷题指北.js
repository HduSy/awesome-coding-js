const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
let lineNum = 0
let inputs = []
rl.on('line', function (line) {
    if (lineNum === 0) {
        lineNum = parseInt(line.trim())
    } else {
        inputs.push(line.trim())
        if (inputs.length === lineNum) {
            //代码逻辑
            let res = 0 //[]
            for (let i = 0; i < lineNum; i++) {
                res += parseInt(inputs[i])
            }
            console.log(res)

            lineNum = 0
            inputs.length = 0
        }
    }
})
// lineNum = 2
// rl.on('line', function (line) {
//     inputs.push(line)
//     if (inputs.length === lineNum) {
//         //代码逻辑
//         inputs.length = 0
//     }
// })
