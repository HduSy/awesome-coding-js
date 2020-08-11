/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function FindKthToTail(head, k)
{
    // write code here
    let pre = new ListNode(-1)
    pre.next = head
    for(let i = 0;i<k;i++){
        if (pre.next){
            pre = pre.next
        }else {
            return false //k大于链表本身长度
        }
    }
    let headNode = head
    while (pre.next){
        pre = pre.next
        headNode = headNode.next
    }
    return headNode
}
