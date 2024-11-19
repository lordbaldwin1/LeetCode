/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    // hold onto position where next element is placed, x
    // compare if the hold == current number in iteration
    // if they don't match, set hold to that number
    let x = 1;
    for(let i = 1; i < nums.length; i++) {
        if(nums[i] !== nums[x-1]) {
            nums[x] = nums[i];
            x++;
        }
    }
    return x;
};