var sortedSquares = function (nums) {
  const newArray = new Array(nums.length);
  let leftPointer = 0;
  let rightPointer = nums.length - 1;
  let insertPoint = newArray.length - 1;
  while (leftPointer <= rightPointer) {
    let leftSquared = nums[leftPointer] ** 2;
    let rightSquared = nums[rightPointer] ** 2;
    if (rightSquared > leftSquared) {
      newArray[insertPoint] = rightSquared;
      rightPointer--;
    } else {
      newArray[insertPoint] = leftSquared;
      leftPointer++;
    }
    insertPoint--;
  }
  return newArray;
};
