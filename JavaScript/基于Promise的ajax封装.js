function ajax(url, method = 'get', param = {}) {
    return new Promise((resolve, reject) => {
        const paramString = getParamString(param)
        if (method == 'get' && paramString) {
            url.indexOf('?') > -1 ? url += paramString : url += `?${paramString}`
        }
        //get\post通用部分
        const xhr = new XMLHttpRequest()
        xhr.open(method, url)
        xhr.onload = function () {
            const result = {
                status: xhr.status,
                statusText: xhr.statusText,
                headers: xhr.getAllResponseHeaders(),
                data: xhr.response || xhr.responseText
            }
            if (xhr.status >= 200 || xhr.status < 300 || xhr.status == 304) {
                resolve(result)
            } else {
                reject(result)
            }
        }
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
        xhr.withCredentials = true
        xhr.onerror = function () {
            reject(new Error('请求出错'))
        }
        xhr.timeout = function () {
            reject(new Error('超时'))
        }
        xhr.onabort = function () {
            reject(new Error('请求中止'))
        }
        if (method == 'post') {
            xhr.send(paramString)
        } else {
            xhr.send()
        }
    })
}
function getParamString(param) {
    let dataString = ''
    for (let key in param) {
        dataString += `${key}=${param[key]}&`
    }
    return dataString
}
