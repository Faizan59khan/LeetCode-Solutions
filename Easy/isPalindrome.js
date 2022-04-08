var x=121;

//1) By converting number into string.
// var isPalindrome = function(x) {
    
//     let revInt=Number(x.toString().split('').reverse().join(''));
//     if(x===revInt){
//         return true;
//     }
//     return false;
// };

//2) without converting into string (Number based reversed)
var isPalindrome = function(x) {
    
    if(x<0){   
        return false;
    }  
    const temp = x;
    let reversed = 0;

    while(x>0){
        reversed = (reversed * 10) + (x%10);
        x = parseInt(x/10);
    }
      
    return reversed == temp;
  };

console.log(isPalindrome(x))

//Dry run==> x=123 
//   1st Iteration: rev=3,x=12,  2nd Iteration: rev=32,x=1,  3rd Iteration: rev=321,x=0 (exit loop). it return false. 
// input x=121:
//  1st Iteration: rev=1,x=12,  2nd Iteration: rev=12,x=1,  3rd Iteration: rev=121,x=0 (exit loop). it return true. 