/* 
First Unique Character in a String
Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

Example 1:
Input: s = "leetcode"
Output: 0

Example 2:
Input: s = "loveleetcode"
Output: 2

Example 3:
Input: s = "aabb"
Output: -1

Constraints:
a. 1 <= s.length <= 10^5
b. s consists of only lowercase English letters.
*/

const firstUniqChar = (s) => {
  const charMap = {};

  // Count the frequency of each character
  for (let char of s) {
    charMap[char] = (charMap[char] || 0) + 1;
  }

  // Find the first non-repeating character and return its index
  for (let i = 0; i < s.length; i++) {
    if (charMap[s[i]] === 1) {
      return i;
    }
  }

  return -1; // Return -1 if no non-repeating character found
};

// Test Example 1
let s = "leetcode";
console.log(firstUniqChar(s)); // Output: 0

// Test Example 2
s = "loveleetcode";
console.log(firstUniqChar(s)); // Output: 2

// Test Example 3
s = "aabb";
console.log(firstUniqChar(s)); // Output: -1
