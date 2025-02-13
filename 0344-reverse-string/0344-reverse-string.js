/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let temp = '';

    let i = 0;
    let k = s.length - 1;

    while (i < k) {
        s[temp] = s[i];
        s[i] = s[k];
        s[k] = s[temp];
        i++;
        k--;
    }
};