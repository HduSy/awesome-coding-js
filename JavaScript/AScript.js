function deepClone(obj, map = new WeakMap()) {
    if (!obj) return obj
    if (obj instanceof Date)
        return obj
    if (obj instanceof RegExp)
        return obj
    if (typeof obj !== 'object')
        return obj
    if (map.get(obj)) {
        return map.get(obj)
    }
    let res = new obj.constructor()
    map.set(obj, res)
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            res[key] = deepClone(obj[key])
        }
    }
    return res
}