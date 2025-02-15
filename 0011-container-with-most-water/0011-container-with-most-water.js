/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let res = 0;
    let l = 0;
    let r = height.length - 1;
    while (l < r) {
        const area = (r - l) * Math.min(height[l], height[r]);
        res = Math.max(res, area);

        if (height[l] < height[r]) {
            l++;
        } else {
            r--;
        }
    }
    return res;
};