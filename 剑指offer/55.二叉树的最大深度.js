const {t} = require('../数据结构分类/二叉树/Tree')

function TreeDepth(pRoot) {
    if (!pRoot)
        return 0
    let leftDep = TreeDepth(pRoot.left)
    let rightDep = TreeDepth(pRoot.right)
    return Math.max(leftDep, rightDep) + 1
}

console.log(TreeDepth(t.root)) //5
