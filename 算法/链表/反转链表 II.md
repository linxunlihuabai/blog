# 反转链表 II

给你单链表的头指针 head 和两个整数 left 和 right ，其中 left <= right 。请你反转从位置 left 到位置 right 的链表节点，返回 反转后的链表 。

思路：分别找到需要反转部分的前驱节点、后继节点。然后找到反转部分的头尾节点，将它与原的链表分割开，然后反转该部分。最后用之前保存的前驱节点和后继节点拼接上

代码如下：

```js
var reverseBetween = function(head, left, right) {
    let dummy =new ListNode(-1);
    dummy.next = head;
    let pre = dummy;
    let succ
    for(let i=0;i<left-1;i++){
        pre = pre.next
    }

    let hair = tail = pre.next;

    for(let j=0;j<right-left;j++){
        tail =tail.next
    }

    succ = tail.next;
    pre.next = null;
    tail.next = null;

    reverse(hair);
    pre.next = tail;
    hair.next = succ;
    return dummy.next
};

function reverse(head){
    let pre = null;
    while(head){
        let next =head.next;
        head.next =pre;
        pre=head;
        head = next;
    }
    return pre;
}
```