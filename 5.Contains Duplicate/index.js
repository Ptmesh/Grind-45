/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  let check = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (check.has(nums[i])) {
      return true;
    } else {
      check.add(nums[i]);
    }
  }
  return false;
};
