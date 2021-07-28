let next = null
reverse(head,n) {
    if(head === null){
        return head
    }

    if(n === 1  || head.next === null){
        next = head.next
        return head
    }
    const last = reverse(head.next, n-1)
    head.next.next = head;
    head.next =next
    return last

}

1-2-3-4-5-null

4-3-2-5-null

1-2-5-null

4-3-2-1-5-null