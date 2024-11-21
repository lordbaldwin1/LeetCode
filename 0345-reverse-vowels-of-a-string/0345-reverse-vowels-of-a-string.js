/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let vowels = 'aeiouAEIOU';
    const result = s.split('');
    let l = 0;
    let r = s.length - 1;
    let hold = '';

    while (l < r) {
        if (vowels.includes(result[l]) && vowels.includes(result[r])) {
            hold = result[l];
            result[l] = result[r];
            result[r] = hold;
            l++;
            r--;
        } else if (vowels.includes(result[l]) && vowels.includes(result[r]) === false) {
            r--;
        } else {
            l++;
        }
    }
    return result.join('');
};