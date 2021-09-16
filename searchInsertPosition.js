var searchInsert = function (nums, target) {
  let l = 0;
  let r = nums.length - 1;
  let p;
  while (l <= r) {
    p = Math.floor((l + r) / 2);
    if (nums[p] === target) {
      return p;
    } else if (target > nums[p]) {
      l = p + 1;
    } else {
      r = p - 1;
    }
  }
  return l;
};
