/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = {};
    for (let i = 0; i < nums.length; i++) {
        map[nums[i]] = i; // num : index
    }

    for (let i = 0; i < nums.length; i++) {
        let difference = target - nums[i];
        if (map[difference] && map[difference] !== i) {
            return [map[difference], i];
        }
    }
    return [];
};