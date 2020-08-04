//ES5
function People(name) {
    this.name = name
}

function Student(age) {
    this.age = age
}

//原型继承 所有实例共享原型，无法实现多继承
Student.prototype = new People('sy')

function Student(name, age) {
    People.call(name)
    this.age = age
}

//构造函数继承 继承了属性和方法，不能继承原型，不能函数复用

function Student(name, age) {
    People.call(name)
    this.age = age
}

Student.prototype = new People('sy')
Student.prototype.constructor = Student

//组合继承1 调用了两次父类构造函数

function Student(name, age) {
    People.call(name)
    this.age = age
}

Student.prototype = People.prototype

//组合继承2 无法区分子类实例是父类实例还是子类实例

function Student(name, age) {
    People.call(name)
    this.age = age
}

Student.prototype = People.prototype
Student.prototype.constructor = Student

//较为完美的解决办法

//ES6
class Person {
    constructor(name) {
        this.name = name
    }
}

class Man extends Person {
    constructor(name, age) {
        super(name);
        this.age = age
    }
}

//兼容性
