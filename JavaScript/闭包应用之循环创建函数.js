let arr = [1, 2, 3]

function test() {
    for (var i = 0; i < arr.length; i++) {
        arr[i] = (function (j) {
            return () => console.log(j)
        })(i)
    }
}

test()
arr[1]()
