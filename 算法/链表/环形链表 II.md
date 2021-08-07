# 环形链表 II

给定一个链表，返回链表开始入环的第一个节点。 如果链表无环，则返回 null。

思路：

1. 利用Set，遍历链表，判断该节点是否再Set中，如果在就返回该节点，如果不在就加入Set然后继续遍历。如果遍历结束，返回null
2. 利用快慢指针，慢指针每次走一步，快指针每次走两步。当快慢指针相遇时，新建一个指针指向head，然后和相遇点指针一起走，一次走一步。最后相遇的地方就是环的第一个节点。假设入环点之前的距离为a,入环点到相遇点的距离为b，相遇点到入环点的距离为c。则根据快指针是慢指针移动距离的2倍可以得出：2(a+b) = a + n(b+c)+b => a = (n-1)(b+c)+c。b+c就是环的长度，所以快慢指针相遇之后，让一个指针从head开始和相遇点的指针一起一步步移动就会再入环点相遇。

代码如下：

Set

```js
var detectCycle = function(head) {
    const set = new Set();
    while(head){
        if(set.has(head)){
            return head
        }
        set.add(head);
        head = head.next;
    }
    return null;
};
```

快慢指针

```js
var detectCycle = function(head) {
    if(head === null){
        return null;
    }

    let slow = fast =head;
    while(fast){
        if(fast.next  && fast.next.next){
            fast =fast.next.next;
            slow =slow.next;
            if(fast === slow){
                let p = head;
                while(p!==fast){
                    p=p.next;
                    fast =fast.next;
                }
                return p;
            }
        }else{
            return null
        }
    }
};
```