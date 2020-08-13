/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */

//层序遍历 队列 广度优先遍历
function PrintFromTopToBottom(root) {
    let queue = [] //先进先出符合队列实现
    let res = []
    if (root) {
        queue.push(root)
        while (queue.length) {
            let current = queue.shift()
            if (current.left) {
                queue.push(current.left)
            }
            if (current.right) {
                queue.push(current.right)
            }
            res.push(current.val)
        }
    }
    return res
}