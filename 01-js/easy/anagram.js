/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/



function isAnagram(str1, str2) {
    let arr = [];
    let value1 = str1.toLowerCase()
    let value2 = str2.toLowerCase()
    for(let i =0;i<value1.length;i++){
      arr[value1[i]-'a']++;
    }
}

module.exports = isAnagram;
