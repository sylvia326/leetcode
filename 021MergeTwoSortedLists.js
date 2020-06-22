var mergeTwoLists = function(l1, l2) {
    let curr = new NodeList();

    let dummy = curr;

    while(l1 !== null && l2 !== null){
        if(l1.val < l2.val){
            curr.next = l1;
            l1 = l1.next;
        } else {
            curr.next = l2;
            l2 = l2.next;
        }
        curr = curr.next;
    }
    if(l1 !== null){
        curr.next = l1;
    }
    if(l2 !== null){
        curr.next = l2;
    }
    return dummy.next;

}

/*
1. 定义一个空的链表
2. 定义一个dummy来占用住链表的头部（因为生成的新链表无法自动返回头部）
3. 在L1和L2都没有走完之前，比较当前位置的l1和l2大小，小的就将值付给curr.next，并且自身也进行到下一位l1/l2.next。
   新的链表curr也需要到下一位curr.next
4. L1或者l2任意一个链表提前走完，证明没走完的链表里剩下的都是大的数，直接curr.next = l1/l2
5. 两个链表都走完后，返回新链表的头部dummy.next（因为第一位是空值所以要.next）
 */
