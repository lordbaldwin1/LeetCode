/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let x = 0;
    for(let i = m; i < (m + n); i++) {
        nums1[i] = nums2[x];
        x++;
    }
    nums1.sort((x, y) => x - y);
    return;
};