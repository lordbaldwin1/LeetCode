/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    let i = nums.length;
    let n = nums.length;
    let t = 0;
    let ans = nums;
    for(let x = n; x < (i + n); x++) {
        ans[x] = nums[t];
        t++;
    }
    return nums;

};