/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let x = 1;
    for(let i = 1; i < nums.length; i++) {
        if(nums[x - 1] !== nums[i]) {
            nums[x] = nums[i];
            x++;
        }
    }
    return x;
};