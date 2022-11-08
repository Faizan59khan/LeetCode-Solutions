var swapPairs = function(head) {
  let list = new ListNode(null,head);
  let curr=list;
  
  while(curr.next !== null && curr.next.next !==null){
      let firstNode= curr.next;
      let secondNode=curr.next.next;
      
      firstNode.next = secondNode.next;
      secondNode.next = firstNode;
      curr.next = secondNode;

      curr=curr.next.next;
  
  }
  return list.next;
};