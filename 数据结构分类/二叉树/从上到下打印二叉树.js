/**
 * BFS==queue
 * @param root
 * @returns {[]}
 * @constructor
 */
function PrintFromTopToBottom(root) {
    let queue = []
    let result = []
    if (root) {
        queue.push(root)
        while (queue.length > 0) {
            let current = queue.shift() //出队
            if (current.left) {
                queue.push(current.left) //入队
            }
            if (current.right) {
                queue.push(current.right)
            }
            result.push(current.value)
        }
    }
    return result
}
