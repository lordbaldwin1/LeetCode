/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let numSet = new Set(nums);
    let longest = 0;
    let cur = 0;
    
    for (const num of numSet) {
        if (!numSet.has(num - 1)) {
            cur = 1;
            while (numSet.has(num + cur)) {
                cur += 1;
            }
        longest = Math.max(cur, longest);
        }
    }
    return longest;
};