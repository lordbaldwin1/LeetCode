/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let hold = '';
    let l = 0;
    let r = s.length - 1;

    while (l < r) {
        hold = s[l];
        s[l] = s[r];
        s[r] = hold;
        l++;
        r--;
    }
    
    return;
};