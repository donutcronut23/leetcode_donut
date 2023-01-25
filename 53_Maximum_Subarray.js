/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray1 = function (nums) {
  const arr_length = nums.length;
  var largest_sum = [];
  var largest_sum_value = Number.NEGATIVE_INFINITY;

  for (let left_limit = 0; left_limit < arr_length; left_limit++) {
    for (
      let right_limit = left_limit;
      right_limit < arr_length;
      right_limit++
    ) {
      let sub_arr = [];
      let sum_of_sub = 0;
      for (let i = left_limit; i <= right_limit; i++) {
        let number = nums[i];
        sub_arr.push(number);
        sum_of_sub += number;
      }
      // console.log(sub_arr);
      if (sum_of_sub > largest_sum_value) {
        largest_sum_value = sum_of_sub;
        largest_sum = sub_arr;
      }
    }
  }
  // console.log(largest_sum);
  return largest_sum_value;
};

var maxSubArray2 = function (nums) {
  const arr_length = nums.length;
  let max = -Number.MAX_VALUE;
  let sum = 0;
  for (let left_limit = 0; left_limit < arr_length; left_limit++) {
    sum = 0;
    for (let j = left_limit; j < arr_length; j++) {
      sum += nums[j];
      if (sum > max) {
        max = sum;
      }
    }
  }

  return max;
};

// Solution #3 - optimized prefix sum
// we define S(i) ，use to calculate sum from range [0, i]。

// then S(j) - S(i - 1) is sum of range [i, j].

// Here, we can get all S[i] , (i = 0,1,2....,n-1) with one loop array. at the same time, we get min sum from S[k], (k = 0，1，i-1), then

// maxSum = max(maxSum, S[i] - minSum).

// Here we maintain two variables minSum, maxSum.

// Complexity Analysis
// Time Complexity: O(n) - n array length
// Space Complexity: O(1)

var maxSubArray3 = function (nums) {
  const len = nums.length;
  let max = nums[0];
  let min = 0;
  let sum = 0;
  for (let i = 0; i < len; i++) {
    sum += nums[i];
    if (sum - min > max) max = sum - min;
    if (sum < min) {
      min = sum;
    }
  }

  return max;
};
