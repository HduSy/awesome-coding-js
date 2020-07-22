/**
 * self
 * @param str
 * @returns {string|*}
 */
function replaceSpace(str) {
    let len = str.length
    if (len < 1) {
        return str
    }
    str = str.split('')
    return str.map((item, index) => {
        if (item === ' ') {
            return '%20'
        } else {
            return item
        }
    }).join('')
}

console.log(replaceSpace('We are happy'))

/**
 * optimization
 * @param str
 */
function replaceStr(str) {
    return str.splice(' ').join('%20')
}

function replaceStr(str) {
    return str.replace(/\s/g, '%20')
}

function extendReplaceSpace(str) {
    return str.replace(/\s+/g, '%20')
}
