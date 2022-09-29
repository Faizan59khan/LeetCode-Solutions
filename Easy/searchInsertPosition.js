var searchInsert = function (nums, target) {
  let counter = 0;
  const value = nums.findIndex((value) => {
    if (value <= target) {
      counter++;
      return target === value;
    }
  });
  return value === -1 ? counter : value;
};

console.log(searchInsert(nums, target));