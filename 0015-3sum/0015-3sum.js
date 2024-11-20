/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let result = [];

    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length; i++) {
        // check if i is the same as previous number (catching duplicates)
        // SKIP TO NEXT ITERATION IF TRUE
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }
        let l = i + 1;
        let r = nums.length - 1;
        while (l < r) {
            let total = nums[i] + nums[l] + nums[r];
            if (total === 0) {
                result.push([nums[i], nums[l], nums[r]]);
                l++;
                // check for duplicates again
                // if left is same as previous skip it
                while (nums[l] === nums[l-1] && l < r) {
                    l++;
                }
            } else if (total < 0) {
                l++;
            } else {
                r--;
            }
        }
    }
    return result;
};