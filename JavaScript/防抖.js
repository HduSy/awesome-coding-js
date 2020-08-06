/**
 * 表单验证、输入后搜索、窗口resize
 * ns内不论触发多少次，ns后执行一次，ns期间触发则重新计时
 * @param fn
 * @param time
 * @returns {function(...[*]=)}
 */
function debounce(fn, time) {
    let timeout = null
    return function (...args) {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            fn.apply(this, args)
        }, time * 1000)
    }
}
