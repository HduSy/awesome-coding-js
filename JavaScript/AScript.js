function foo(a) {
    var b = 2;

    function c() {
    }

    var d = function () {
    };

    b = 3;

}

foo(1)

AO = {
    arguments: {
        0: 1,
        length: 1
    },
    a: 1,
    b: undefined,
    c: function c() {
    },
    d: undefined
}

let arr = [0, 1, 2, 3, 4]
let arrLike = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    length: 5
}

console.log(Array.prototype.slice.call(arrLike))
console.log(Array.prototype.splice.call(arrLike, 0, 4))
