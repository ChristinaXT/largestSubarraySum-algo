let array = [7, 8, 4, 9, 9, 15, 3, 1, 10];
function largestSubarraySum (array) {
   let sum = 0;
   let max = 0;

   array.forEach(value => {
     if (sum + value < 0) {
       sum = 0;
    } else {
      sum += value
      if (sum > max) {
        max = sum
      };
    };
  });



  return max;
}

console.log(largestSubarraySum(array));
// uses the fact that any time the running total goes below zero,
  // we should reset the sum to 0, since the values 'behind' the index
  // are 'hidden' by negative numbers

  // handle case where value is a larger negative than the running total
      // i.e. restart the sum at 0, indicating a restart of the subarray
