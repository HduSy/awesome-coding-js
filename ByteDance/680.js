/**
 * 680
 * 验证回文字符串II
 * self
 * 我的做法是抽离出一个回文判断函数和一个移除字符串中指定位置字符的函数，分别判断删除后字符串，存在重复操作
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
    function test(str) {
        let left = 0, right = str.length - 1 - left
        while (left < right) {
            if (str[left] !== str[right]) {
                break
            } else {
                left++
                right--
            }
        }
        // left-right 偶数个
        return left === right || left - right === 1 ? true : [left, right]
    }

    function removeChar(str, i) {
        let strArr = str.split('')
        strArr[i] = ''
        return strArr.join('')
    }

    let huiwen = test(s)
    if (huiwen === true)
        return true
    else {
        if (test(removeChar(s, huiwen[0])) === true)
            return true
        else if (test(removeChar(s, huiwen[1])) === true)
            return true
        else
            return false
    }
};
console.log(validPalindrome('deeee'))
/**
 * 碰到不相等，两种情况，左侧后移一位（相当于删除左侧字符，看剩余是否是回文）；右侧前移一位（相当于删除右侧字符，看剩余字符串是否是回文）
 * s[low+1]~s[high] or s[low]~s[high-1]
 * @param s
 */
validPalindrome = function (s) {
    let left = 0, right = s.length - 1
    while (left < right) {
        let c1 = s[left], c2 = s[right]
        if (c1 === c2) {
            left++
            right--
        } else {
            let flag1 = true, flag2 = true
            for (let i = left, j = right - 1; i < j; i++, j--) {
                let c3 = s[i], c4 = s[j]
                if (c3 !== c4) {
                    flag1 = false
                    break
                }
            }
            for (let i = left + 1, j = right; i < j; i++, j--) {
                let c5 = s[i], c6 = s[j]
                if (c5 !== c6) {
                    flag2 = false
                    break
                }
            }
            return flag1 || flag2
        }
    }
    return true
}
console.log(validPalindrome('deeee'))
/**
 * 39.12% 100.00%
 * 确实，已判断过满足回文的字符不需要重新test去判断，相比我原来的方法，可以结合一下
 */
validPalindrome = function (s) {
    let left = 0, right = s.length - 1

    function test(str) {
        let low = 0, high = str.length - 1
        while (low < high) {
            let c1 = str[low]
            let c2 = str[high]
            if (c1 === c2) {
                low++
                high--
            } else {
                return false
            }
        }
        return true
    }

    while (left < right) {
        let c2 = s[left], c3 = s[right]
        if (c2 === c3) {
            left++
            right--
        } else if (test(s.slice(left, right)) || test(s.slice(left + 1, right + 1))) {
            return true
        } else {
            return false
        }
    }
    return true
}

console.log(validPalindrome('ababacc'))
