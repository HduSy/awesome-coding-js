/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    if (s.length < 1) return 0
    let res = 1
    for (let i = 0; i < s.length; i++) {
        let tempStr = s[i]
        for (let j = i + 1; j < s.length; j++) {
            if (tempStr.indexOf(s[j]) < 0) {
                tempStr += s[j]
                res = Math.max(tempStr.length, res)
            } else {
                break
            }
        }
    }
    return res
};
console.log(lengthOfLongestSubstring('abcabcbb'))
console.log(lengthOfLongestSubstring('bbbbb'))
console.log(lengthOfLongestSubstring('pwwkew'))