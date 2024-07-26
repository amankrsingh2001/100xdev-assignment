/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  let countVowel = ['a','e','i','o','u']
  let newStr = str.toLowerCase()
    let count = 0;
  countVowel.forEach((word)=>{
    if(newStr.includes(word)){
      count++;
    }

    
    // for(let i = 0;i<newStr.length;i++){
    //   if(word === newStr[i]){
    //     count++;
    //   }
    // }
  })
  return count;
}

module.exports = countVowels;

