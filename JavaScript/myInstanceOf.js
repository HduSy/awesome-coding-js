/**
 * 原理就是左侧操作数原型链上能否找到右侧操作数原型
 * @param target
 * @param origin
 * @returns {boolean}
 */
function myInstanceof(target, origin) {
    const proto = target.__proto__;
    if (proto) {
        if (origin.prototype === proto) {
            return true;
        } else {
            return myInstanceof(proto, origin)
        }
    } else {
        return false;
    }
}