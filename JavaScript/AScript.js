selfCode = function (root) {
    let stack = []
    let res = []

    let current = root
    while (current || stack.length > 0) {
        while (current) {
            res.push(current)
            stack.push(current)
            current = current.left
        }
        current = stack.pop()
        current = current.right
    }
    return res
}