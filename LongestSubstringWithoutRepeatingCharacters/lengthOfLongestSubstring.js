/**
*Given a string, find the length of the longest substring without repeating characters.
*
*Examples:
*
*Given "abcabcbb", the answer is "abc", which the length is 3.
*
*Given "bbbbb", the answer is "b", with the length of 1.
*
*Given "pwwkew", the answer is "wke", with the length of 3.
*Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const arr = [...s];
    let object = {};
    let counts = [0];
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        
        if(object[arr[i]] === undefined){
            object[arr[i]] = i;
            count ++;
            if (i + 1 === arr.length) {
                counts.push(count);
                count = 0 ;
            }
        } else {
            counts.push(count);
            count = 0;
            i = object[arr[i]];
            object = {};
        }
    }
    return Math.max(...counts);
};
