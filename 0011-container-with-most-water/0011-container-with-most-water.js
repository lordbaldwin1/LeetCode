/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let l = 0;
    let r = height.length - 1;
    let maxArea = 0;

    while (l < r) {
        let w = Math.min(height[l], height[r])
        let h = r - l;
        if ((w * h) > maxArea) {
            maxArea = w * h;
        }
        if (height[l] < height[r]) {
            l++;
        } else {
            r--;
        }
    }
    return maxArea;
};