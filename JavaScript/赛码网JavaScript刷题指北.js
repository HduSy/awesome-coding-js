// Javascript V8
// var N, M;
// 每组第一行是2个整数，N和M，至于为啥用while，因为是多组。
// while ((N = readInt()) != null && (M = readInt()) != null) {
//     print(N + ' ' + M);
//     // 循环读取“接下来的M行”
//     for (let i = 0; i < M; i++) {
//         let a = readInt();
//         let b = readInt();
//         let c = readInt();
//         // 每行是3个整数，a，b，c。
//         print(a + ' ' + b + ' ' + c);
//     }
//     // M行读取完了，就又要开始下一组了，去while那里。
// }
//NodeJS

// let readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
//     terminal: false
// });


// let N, M, a, b, c, times = 0, ary;
//
// function getRoot(idx) {
//     if (ary[idx] === idx) return idx;
//     ary[idx] = getRoot(ary[idx]);
//     return ary[idx];
// }
//
// rl.on('line', function (line) {
//     if (times === 0) {
//         [N, M] = line.split(' ').map(Number);
//         ary = new Array(N + 1);
//         for (let i = 1; i <= N; i++) {
//             ary[i] = i;
//         }
//     } else if (times <= M) {
//         [a, b, c] = line.split(' ').map(Number);
//         if (c === 1) {
//             let aroot = getRoot(a),
//                 broot = getRoot(b);
//             if (aroot !== broot) {
//                 ary[aroot] = broot;
//             }
//         }
//     }
//     if (times === M) {
//         let cnt = 0;
//         let resRoot = getRoot(1);
//         for (let i = 2; i <= N; i++) {
//             if (resRoot === getRoot(i)) cnt++;
//         }
//         console.log(cnt);
//         times = 0;
//         return;
//     }
//     times++;
// });

function getThree(arr) {
    let i
    for (i = 0; i + 2 < arr.length; i += 3) {
        console.log(arr[i], arr[i + 1], arr[i + 2])
    }
    console.log(i)
    console.log(arr.length - i)
}

let testArr = [1, 2, 3, 4, 5, 6, 7]
getThree(testArr)
