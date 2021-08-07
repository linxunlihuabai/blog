# K 个一组翻转链表

给你一个链表，每 k 个节点一组进行翻转，请你返回翻转后的链表。

思路： 

1. 先判断链表元素够不够k个，记住反转部分链链表的前驱节点、后继节点、首节点、尾节点，然后分割反转部分进行反转，最后再拼接回去。
2. 递归解法: 先判断够不够k个元素，同时保存了下一个组的开始节点。接着反转这一组元素，然后拼接上下一组的反转元素（递归）。

代码如下：

迭代解法：

```js
var reverseKGroup = function(head, k) {
    let dummy = new ListNode(-1);
    dummy.next = head;
    let cur = dummy;
    while(cur){
        let tail = cur;
        for(let i=0;i<k;i++){
            tail = tail.next;
            if(!tail){
                return dummy.next;
            }
        }
        let succ = tail.next;
        let hair = cur.next;
        cur.next = null;
        tail.next = null;
        reverse(hair);
        cur.next = tail;
        hair.next = succ;
        cur = hair;
    }

    return dummy.next;
};

function reverse(head){
    let pre = null;
    let cur = head;
    while(cur){
        let next = cur.next;
        cur.next =pre;
        pre = cur;
        cur = next;
    }
}
```

递归解法：

```js
var reverseKGroup = function(head, k) {
    let p = head;
    for(let i=0;i<k;i++){
        if(!p) return head;
        p =p.next;
    }

    let cur = head
    let pre = null;

    for(let j =0;j<k;j++){
        let next = cur.next;
        cur.next = pre;
        pre = cur;
        cur = next;
    }
    head.next = reverseKGroup(p, k);

    return pre;
};
```