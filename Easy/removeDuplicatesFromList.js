// //Remove duplicates from sorted list
var deleteDuplicates = function(head) {
  let arr=[]
 while(head != null){
   arr.push(head.val);
   head=head.next;
 }
 arr=[...new Set(arr)]
 arr.sort((a,b)=> b-a)
 let listNode=null;
 for(let i=0; i<arr.length;i++){
     listNode={
         val:  arr[i],
         next: listNode
     }
 }
 return listNode;
};
