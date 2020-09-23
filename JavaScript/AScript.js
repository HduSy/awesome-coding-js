function preOrder(node) {
    let stack = []
    let res = []
    let current = node
    while (current || stack.length > 0) {
        while (current) {
            stack.push(current)
            current = current.left
        }
        current = stack.pop()
        res.push(current)
        current = current.right
    }
    return res
}