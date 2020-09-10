let images = document.getElementsByTagName('img')
let n = 0

function throttle(fn, timeout) {
    let canRun = true;
    return (...args) => {
        if (!canRun) return
        canRun = false
        setTimeout(() => {
            fn.apply(this, args)
            canRun = true
        }, timeout)
    }
}

window.addEventListener('scroll', throttle(lazyLoad(), 200))

function lazyLoad() {
    let seeHeight = window.innerHeight
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
    for (let i = 0; i < images.length; i++) {
        if (images[i].scrollTop < seeHeight + scrollTop)
            if (images[i].src === 'loading.gif')
                images[i].src = images[i].getAttribute('data-src')
        n = i + 1
    }
}