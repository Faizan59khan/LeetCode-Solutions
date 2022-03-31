
//For this problem if we are solving in a leetcode environment we dont need to create linked list.
//I created it for proper understanding.
function createNode(val) {
    return {
      val: val,
      next: null,
    };
  }

class LinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }

    insert(val) {
        this.length++;
        let newNode = createNode(val);
      
        if (this.tail) {        //first entry
          this.tail.next = newNode;
          this.tail = newNode;
          return newNode;
        }
      
        this.head = this.tail = newNode;
        return newNode;
      }
      print() {
        let current = this.head;
        while (current) {
          console.log(current.val);
          current = current.next;
        }
      }
  }

  const l1 = new LinkedList();
  const l2 = new LinkedList();
  l1.insert(2);
  l1.insert(4);
  l1.insert(3);
  l2.insert(5);
  l2.insert(6);
  l2.insert(4);
//   console.log(l1);
//   console.log(l2);
 

//Problem: 

  var addTwoNumbers = function(l1, l2) {
    
// Convert a ListNode to an array of its digits in reverse order
  function ConvertReverseListNodeToArray(listNode) {  
         let reverseArray=[];
         let temp=listNode;
          while(temp!=null){
             reverseArray.unshift(temp.val);
             temp=temp.next;
          }
          console.log(reverseArray)
          return reverseArray;    
    }

  // Convert the ListNodes to Arrays
  const l1Array = ConvertReverseListNodeToArray(l1);
  const l2Array = ConvertReverseListNodeToArray(l2);

  

  // Add the numbers (after merging them), using BigInt due to LeetCode's edge cases
  let newTotal = BigInt(l1Array.join('')) + BigInt(l2Array.join(''));
  console.log(newTotal)
  // Split the total back into an array
  splitNewTotal = newTotal.toString().split('');
  console.log(splitNewTotal)
  // Initialise an empty ListNode
  let returnedListNode = null;

  // Loop through the total val's array
  for (let i = 0; i < splitNewTotal.length; i++) {
      // Add this digit to the ListNode
      returnedListNode = {
          val: splitNewTotal[i],
          next: returnedListNode,
      };
  }

  // Return the constructed ListNode
  return returnedListNode;

};


console.log(addTwoNumbers(l1.head,l2.head));