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

function f(target, origin) {
    let proto = target.__proto__
    if (proto) {
        if (proto === origin.prototype)
            return true
        else
            return f(proto, origin)
    }
}

// 右侧构造函数的原型是否在左侧实例原型链上
function myInstanceOf(target, origin) {
    let proto = target.__proto__
    if (!proto)
        return false
    if (proto === origin.prototype)
        return true
    else
        return myInstanceof(proto, origin)
}
