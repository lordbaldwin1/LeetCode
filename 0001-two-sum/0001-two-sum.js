/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = {};

    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i];
        if (map[diff] !== undefined && map[diff] !== i) {
            return [map[diff], i];
        }
        map[nums[i]] = i;
    }
    return [];
};