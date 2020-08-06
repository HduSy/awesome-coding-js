/**
 * 定时器版
 * ns内只会执行一次
 * scroll事件
 * @param fn
 * @param time
 * @returns {function(...[*]=)}
 */
function throttle(fn, time) {
    let canRun = true
    return function () {
        if (canRun) {
            canRun = false
            setTimeout(() => {
                fn.apply(this, arguments)
                canRun = true
            }, time * 1000)
        }
    }
}

/**
 * 时间戳版
 */
function throttle(fn, time) {
    let pre = 0
    return function (...args) {
        if (Date.now() - pre > time) {
            pre = Date.now()
            fn.apply(this, args)
        }
    }
}
