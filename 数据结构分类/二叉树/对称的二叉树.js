function isSymmetrical(root) {
    return isSymmetricalTree(root, root)
}

function isSymmetricalTree(node1, node2) {
    //两个节点都不存在
    if (!node1 && !node2)
        return true
    //一个存在一个不存在
    if (!node1 || !node1)
        return false
    //都存在但值不等
    if (node1.val !== node2.val)
        return false
    //递归孩子判断
    return isSymmetricalTree(node1.left, node2.right) && isSymmetricalTree(node1.right, node2.left)
}