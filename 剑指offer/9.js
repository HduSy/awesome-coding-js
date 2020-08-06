let stack1 = []
let stack2 = []

function push(node) {
    stack1.push(node)
}

function pop() {
    if (!stack2.length) {
        while (stack1.length) {
            stack2.push(stack1.pop())
        }
    }
    return stack2.pop() || null
}

push(1)
push(2)
console.log(pop()) //1 栈的话是2
console.log(pop()) //2 栈的话是1
