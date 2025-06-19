/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let map = {};
    
    for (const num of nums) {
        if (map[num] !== undefined) {
            return true;
        }
        map[num] = 1;
    }
    return false;
};