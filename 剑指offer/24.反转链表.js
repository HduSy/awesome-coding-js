/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function ReverseList(pHead) {
    let HeadNode = pHead
    let currentNode = null //当前移动的节点
    while (pHead && pHead.next) {
        //更新currentNode与pHead
        currentNode = pHead.next
        pHead.next = currentNode.next //更新pHead位置
        //currentNode与HeadNode互换位置
        currentNode.next = HeadNode
        HeadNode = currentNode
    }
    return HeadNode
}
