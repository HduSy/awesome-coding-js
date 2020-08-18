/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function FindFirstCommonNode(pHead1, pHead2) {
    let pH1len = 0, pH2len = 0
    let first = pHead1, second = pHead2
    while (first) {
        first = first.next
        pH1len++
    }
    while (second) {
        second = second.next
        pH2len++
    }
    first = pHead1
    second = pHead2
    let res = []
    //其实先从长的还是先从短的开始都一样
    //以pHead1开始
    for (let i = 0; i < pH1len; i++) {
        let firstVal = first.val
        for (let j = 0; j < pH2len; j++) {
            let secondVal = second.val
            if (firstVal === secondVal) {
                res[firstVal] = i + j
                break
            }
            second = second.next
        }
        if (!res[firstVal]) {
            res[firstVal] = Infinity
        }
        first = first.next
    }
    let minVal = Math.min(...res)
    return res.findIndex(item => item === minVal)
}

function getLength(head) {
    let current = head
    let len = 0
    while (current) {
        len++
        current = current.next
    }
    return len
}

function Success(pHead1, pHead2) {
    function getLength(head) {
        let current = head
        let len = 0
        while (current) {
            len++
            current = current.next
        }
        return len
    }
    let len1 = getLength(pHead1)
    let len2 = getLength(pHead2)
    let long, short, interval
    if (len1 > len2) {
        long = pHead1
        short = pHead2
        interval = len1 - len2
    } else {
        long = pHead2
        short = pHead1
        interval = len2 - len1
    }
    while (interval--) {
        long = long.next
    }
    while (long) {
        if (long === short) {
            return long
        }
        long = long.next
        short = short.next
    }
    return null
}
