var a = {
    b: function () {
        let func = function () {
            console.log(this.c)
        }
        func()
    },
    c: 'hello world'
}
a.b() //undefined

a = {
    b: function () {
        //箭头函数
        let func = () => console.log(this.c)
        func()
    },
    c: 'hello world'
}
a.b() //hello world

a = {
    b: function () {
        //hack处理
        let that = this
        let func = function () {
            console.log(that.c)
        }
        func()
    },
    c: 'hello world'
}
a.b()

a = {
    b: function () {
        //声明时绑定
        let func = function () {
            console.log(this.c)
        }.bind(this)
        func()
    },
    c: 'hello world'
}
a.b()
a = {
    b: function () {
        let func = function () {
            console.log(this.c)
        }
        //运行时绑定
        func.bind(this)()
    },
    c: 'hello world'
}
//手动实现bind
Function.prototype.myBind = function (obj) {
    if (this === Function.prototype)
        return undefined
    return () => this.apply(obj, arguments)
}

function c() {
    console.log(this.name)
}

let d = {
    name: 'ddddd'
}
c() //undefined
c.bind(d)() //ddddd
c.myBind(d)() //ddddd
