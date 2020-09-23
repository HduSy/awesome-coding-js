/**
 * 'a.b.c'--->{
 *     a:{
 *         b:{
 *             c:null
 *         }
 *     }
 * }
 */
function solve(str) {
    let strArr = str.split('.').reverse()
    let res = {}
    let len = strArr.length, tmp = null
    for (let i = 0; i < len; i++) {
        if (!res[strArr[i]] && !i) {
            res[strArr[i]] = null
            tmp = {[strArr[i]]: null}
        } else {
            tmp = {[strArr[i]]: tmp}
        }
        res = tmp
    }
    return JSON.stringify(res)
}

let testStr = 'a.b.c.d.e.f'
console.log(solve(testStr))