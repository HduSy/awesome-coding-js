/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */

//BFS 广度优先遍历
/**
 * 跟从上到下打印二叉树还稍有不同，二叉树逐层每行输出
 * for循环非常重要，将该层所有节点左右孩子节点分别入队列并计本层节点数
 * @param pRoot
 * @returns {[]}
 * @constructor
 */
function Print(pRoot) {
    let queue = []
    let res = []
    if (pRoot) {
        queue.push(pRoot)
        while (queue.length) {
            let len = queue.length
            let tmpArr = []
            for (let i = 0; i < len; i++) {
                let current = queue.shift()
                tmpArr.push(current.val) //而不是current 当代码逻辑基本找不出问题而又0.0%不通过时,获取输出没有按题目要求
                if (current.left) {
                    queue.push(current.left)
                }
                if (current.right) {
                    queue.push(current.right)
                }
            }
            res.push(tmpArr)
        }
    }
    return res
}
