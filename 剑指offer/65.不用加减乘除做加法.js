//知道用与或非进位去做，没思路
//两个十进制数相加，分三步：1.不算进位的结果；2.算进位值是多少；3.第一步的结果加第二步的结果
//重复这三步直到进位为0.例如5+1;5+10;5+7;5+17
function Add(num1, num2) {
    // write code here
    if (num2 === 0)
        return num1
    return Add(num1 ^ num2, num1 & num2 << 1)
}
