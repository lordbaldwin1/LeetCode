/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // 2, 7, 11, 15 | target = 9
    // calc diff = target - nums[i]
    // if map[diff] !== undefined && map[diff] !== i\
    // return indices
    let map = {};

    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i];

        if (map[diff] !== undefined && map[diff] !== i) {
            return [map[diff], i];
        }
        map[nums[i]] = i;
    }
    return false;
};