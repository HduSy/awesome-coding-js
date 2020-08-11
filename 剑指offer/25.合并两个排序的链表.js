/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/

//想不到递归思想能解这道题
function Merge(pHead1, pHead2) {
    // write code here
    if (!pHead1) return pHead2
    if (!pHead2) return pHead1
    let head
    if (pHead1.val < pHead2.val) {
        head = pHead1
        head.next = Merge(pHead1.next, pHead2)
    } else {
        head = pHead2
        head.next = Merge(pHead1, pHead2.next)
    }
    return head
}
