/**
 * A instanceOf B
 * 思想：B构造函数的prototype对象是否在A原型链上
 * @param target
 * @param origin
 */
function myInstanceOf(target, origin) {
    let proto = target.__proto__
    if (proto) {
        if (proto === origin.prototype) {
            return true
        } else {
            return myInstanceof(proto, origin)
        }
    } else {
        return false
    }
}
