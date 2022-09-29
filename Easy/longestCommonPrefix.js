var longestCommonPrefix = function(strs) {
  let prefix=strs.reduce((acc,cur)=> cur.length < acc.length ? cur : acc);              

for (let str of strs){
 while(str.slice(0,prefix.length) != prefix){
     prefix = prefix.slice(0,-1);
 }
}
return prefix;
};