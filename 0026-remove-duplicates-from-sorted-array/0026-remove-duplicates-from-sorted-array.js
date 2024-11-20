/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let t = 1;

    for(let i = 1; i < nums.length; i++) {
        if(nums[i] !== nums[t - 1]) {
            nums[t] = nums[i];
            t++;
        }
    }
    return t;
};