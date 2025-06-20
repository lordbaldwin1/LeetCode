/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const count = {};

    for (const n of nums) {
        count[n] = (count[n] || 0) + 1;
    }

    const arr = Object.entries(count);

    const sortedArr = arr.sort((a, b) => b[1] - a[1]);

    const slicedArr = arr.slice(0, k);

    const res = slicedArr.map((p) => Number(p[0]));
    return res;
};