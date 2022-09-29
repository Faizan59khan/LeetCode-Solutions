let strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
var groupAnagrams = function (strs) {
  let res = [];
  let sortedArr = strs.map((str) => {
    return str.split("").sort();
  });
  sortedArr = sortedArr.map((str) => {
    return str.join("");
  });

  let uniqueArr = new Set(sortedArr);
  uniqueArr = [...uniqueArr];

  for (let i = 0; i < uniqueArr.length; i++) {
    let arr = [];
    sortedArr.forEach((str, index) => {
      if (uniqueArr[i] === str) {
        arr.push(strs[index]);
      }
    });
    res.push(arr);
  }
  return res;
};

groupAnagrams(strs);