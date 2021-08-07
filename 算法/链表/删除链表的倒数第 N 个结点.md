# 删除链表的倒数第 N 个结点

给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。

最好用一次遍历实现。

思路: 
1. 利用栈先进后出的特点，将链表遍历放入栈中，这样倒数第n个节点就变成了栈顶第n个节点。这样只需要遍历一次链表了。
2. 直接利用数组将链表节点依次放入，这样就知道了链表长度，同时可以知道被删除节点的位置L-n，那被删除节点的上一个节点就是L-n-1

代码如下: 

思路一
```js
var removeNthFromEnd = function(head, n) {
    let stack = [];
    let dummy =new ListNode(-1);
    dummy.next = head;
    let cur = dummy;
    while(cur){
        stack.push(cur)
        cur =cur.next;
    }
    var pre 
    while(n>=0){
        pre = stack.pop();
        n--
    }

    pre.next = pre.next.next;
    return dummy.next;
};
```


思路二
```js
var removeNthFromEnd = function(head, n) {
    let arr = [];
    let dummy =new ListNode(-1);
    dummy.next = head;
    let cur = dummy;
    while(cur){
        arr.push(cur)
        cur =cur.next;
    }
    var pre = arr[arr.length-n-1]

    pre.next = pre.next.next;
    return dummy.next;
};
```