/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let count = {};
    let freq = Array.from({ length: nums.length + 1 }, () => []);

    for (let i = 0; i < nums.length; i++) {
        count[nums[i]] = (count[nums[i]] || 0) + 1;
    }

    for (const n in count) {
        freq[count[n]].push(parseInt(n));
    }

    let result = [];
    for (let i = freq.length - 1; i > 0; i--) {
        for (const n of freq[i]) {
            result.push(n);
            if (result.length === k) {
                return result;
            }
        }
    }
    return result;
};