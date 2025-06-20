/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let l = 0;
    let r = s.length - 1;

    while (l < r) {
        while (l < r && !isAlpha(s[l])) {
            l++;
        }
        while (l < r && !isAlpha(s[r])) {
            r--;
        }

        if (s[l].toLowerCase() !== s[r].toLowerCase()) {
            return false;
        }
        l++;
        r--;
    }
    return true;
};

function isAlpha(c) {
    return c <= 'Z' && c >= 'A' ||
            c <='z' && c >= 'a' ||
            c <= 9 && c >= '0';
}