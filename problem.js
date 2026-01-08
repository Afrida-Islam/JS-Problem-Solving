// Problem 1: Reverse a String
function reverseString(str) {
  let reversed = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  return reversed;
}
console.log(reverseString("hello"));

// Problem 2: Count Vowels in a String

function countVowels(str) {
  let count = 0;
  let lowerStr = str.toLowerCase();
  for (let i = 0; i < lowerStr.length; i++) {
    let char = lowerStr[i];
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    }
  }

  return count;
}
console.log(countVowels("programming"));
