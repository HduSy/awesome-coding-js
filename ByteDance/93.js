function isValid(val) {
    if (val < 0 || val > 255 || val[0] == 0 && val.length > 1)
        return false
    return true
}

function helper(s, res, ip) {
    if (ip.length === 4) {
        if (s.length === 0)
            res.push(ip.join('.'))
        return
    }
    for (let i = 1; i <= 4; i++) {
        let val = s.substr(0, i) //make choice
        if (!isValid(val) || i > s.length) {
            return;
        }
        ip.push(val)
        helper(s.slice(i), res, ip)
        ip.pop()
    }
}

/**
 * 复原IP地址
 * 回溯算法
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
    let res = []
    helper(s, res, [])
    return res
};
