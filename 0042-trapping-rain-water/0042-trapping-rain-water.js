/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let res = 0;
    let l = 0;
    let r = height.length - 1;
    let maxl = 0;
    let maxr = 0;

    while (l < r) {
        let water = 0;
        // Update maxl and maxr for their new index
        if (height[l] > maxl) {
            maxl = height[l];
        }
        if (height[r] > maxr) {
            maxr = height[r];
        }
        // Water calculation with bottleneck
        // and update total
        if (maxl < maxr) {
            water = maxl - height[l];
            if (water > 0) {
                res += water;
            }
            l++;
        } else {
            water = maxr - height[r];
            if (water > 0) {
                res += water;
            }
            r--;
        }
    }
    return res;
};