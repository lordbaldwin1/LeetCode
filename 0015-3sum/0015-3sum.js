/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    // O(log n)
    nums.sort((a, b) => a - b);
    let res = [];

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) break;
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let l = i + 1;
        let r = nums.length - 1;
        while (l < r) {
            let tripletSum = nums[i] + nums[l] + nums[r];
            if (tripletSum < 0) {
                l++;
            } else if (tripletSum > 0) {
                r--;
            } else {
                res.push([nums[i], nums[l], nums[r]]);
                l++;

                while (nums[l] === nums[l - 1] && l < r) {
                    l++;
                }
            }
        }
    }
    return res;
};