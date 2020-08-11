/**
 * @param base
 * @param exponent
 * @constructor
 */
function Power(base, exponent) {
    //return Math.pow(base, exponent)
    if (exponent === 0) return 1
    let result = 1
    if (exponent > 0) {
        for (let i = 0; i < exponent; i++) {
            result *= base
        }
        return result
    } else {
        for (let i = 0; i < Math.abs(exponent); i++) {
            result *= base
        }
        return result ? 1 / result : false //小于2的-1075次方的值为0
    }
}

console.log(Power(1.2, -1))
