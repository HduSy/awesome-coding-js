/**
 * 2
 7
 9
 * @type {module:readline}
 */
const readline = require('readline');
rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
let inputs = [];
let num = 0;
rl.on('line', function (data) {
    if (num === 0) {
        num = parseInt(data.trim());
    } else {
        inputs.push(data.trim());
        if (num === inputs.length) {
            // 处理
            let result = deal(inputs);

            // 输出结果
            //console.log(result);

            // 清0
            inputs.length = 0;  //不可改动
            num = 0;    //不可改动
        }
    }
});

/**
 * [deal description]
 * @param  {[type]} inputs [description]
 * @return {[type]}        [description]
 */
function deal(inputs) {
    for (let i = 0; i < inputs.length; i++) {
        let result = '';
        let number = parseInt(inputs[i] / 9) //z
        //console.log(number)
        let remainder = inputs[i] % 9 //y
        //console.log(remainder)
        for (let j = 0; j < number; j++) {
            result = result + '9'
        }
        if (remainder !== 0) {
            result = remainder + result;
        }
        console.log(result)
    }
    //return result;
}
