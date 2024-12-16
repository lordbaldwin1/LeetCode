/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let groupedAnagrams = {};

    for (let string of strs) {
        const sortedString = string.split('').sort().join('');

        if (groupedAnagrams[sortedString] === undefined) {
            groupedAnagrams[sortedString] = [];
        }

        groupedAnagrams[sortedString].push(string);
    }
    return Object.values(groupedAnagrams);
};