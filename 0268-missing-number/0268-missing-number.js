/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let sorted = nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length; i++) {
        if (i !== sorted[i]) {
            return i;
        }
    }
    return nums.length;
};