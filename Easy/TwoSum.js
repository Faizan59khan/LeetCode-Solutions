//Two Sum:
let nums=[2,7,6,5];
var twoSum = function(nums, target) {
    let res=[];
    for(let i=0;i<nums.length-1;i++){    
        // console.log(i);                 
       for(let j=i+1;j<nums.length;j++){
        //    console.log("=>"+j);
          if(nums[i]+nums[j]==target){
              res.splice(2,0,i,j);
               break;
             } 
       } 
    }
    return res;
};

console.log(twoSum(nums,11));