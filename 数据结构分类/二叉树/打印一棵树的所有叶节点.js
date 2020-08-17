const {Tree, t} = require('../二叉树/Tree')

function printSonNode(root) {
    let queue = []
    let res = []
    if (root) {
        queue.push(root)
        while (queue.length) {
            let current = queue.shift()
            if (current.left)
                queue.push(current.left)
            if (current.right)
                queue.push(current.right)
            if (!current.left && !current.right) {
                res.push(current.val)
            }
        }
    }
    return res
}

console.log(printSonNode(t.root)) // [ 0, 2, 6 ]
