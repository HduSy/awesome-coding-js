import $ from 'jquery'
//https://www.cnblogs.com/chenyablog/p/6477866.html 遍历对象与数组方法总结
//https://juejin.im/post/6844904197595332622
//深拷贝
function deepClone(obj, hashMap = new WeakMap()) {
    // 如果是null或者undefined我就不进行拷贝操作
    if (!obj)
        return obj
    if (obj instanceof RegExp)
        return new RegExp(obj)
    if (obj instanceof Date)
        return new Date(obj)
    // 可能是对象或者普通的值  如果是函数的话是不需要深拷贝
    if (typeof obj !== 'object')
        return obj
    // 是对象的话就要进行深拷贝
    if (hashMap.get(obj))
        return hashMap.get(obj)
    // 找到的是所属类原型上的constructor,而原型上的 constructor指向的是当前类本身
    let res = new obj.constructor()
    hashMap.set(obj, res)
    //自身和继承的
    for (let key in obj) {
        //与in相比忽略继承
        if (obj.hasOwnProperty(key)) {
            res[key] = deepClone(obj[key])
        }
    }
    return res
}

let testObj = {
    name: 'yao',
    weight: [55, 56, 57, 58],
    sayYes() {
        console.log('yes')
    }
}
let copyObj = deepClone(testObj)

console.log(copyObj === testObj) //false
copyObj.weight.push(59)
console.log(copyObj)
console.log(testObj)
let jsonDeepCloneObj = JSON.parse(JSON.stringify(testObj)) //处理不了函数和正则表达式
let jqueryDeepCloneObj = $.extend(true, {}, testObj)
let loadashDeepCloneObj = _.cloneDeep(testObj)
//赋值和浅拷贝还不一样
//将一个对象赋值给另一个变量的时候，赋值的是该对象在栈内存中的地址，两个变量指向同一个地址空间，同一个对象，相互关联，相互影响
let giveObj = testObj
giveObj.name = 'tong'
console.log(giveObj === testObj) //true
console.log(testObj.name) //tong
//在堆中开辟一个空间，原始类型的值是原来的拷贝，互不影响，引用类型的值拷贝的是内存地址，相互关联，相互影响
let shallowCloneObj1 = {...testObj}
let shallowCloneObj2 = Object.assign({}, testObj)
let testArr = [1, 2, {name: 'yao'}]
let shallowCloneArr1 = testArr.concat()
let shallowCloneArr2 = Array.prototype.slice.call(testArr)
let loadashDeepCloneObj2 = _.clone(testObj)
