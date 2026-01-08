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

// Problem 3: Check for Palindrome
function isPalindrome(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  if (str === reversed) {
    return true;
  } else {
    return false;
  }
}
console.log(isPalindrome("madam"));
console.log(isPalindrome("hello"));

// Problem 4: Find the Maximum Number
function findMax(numbers) {
  let max = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }

  return max;
}
const myNumbers = [5, 1, 9, 3];
console.log(findMax(myNumbers));

// Problem 5: Remove Duplicates from an Array

// Problem 6: Sum of All Numbers in an Array
function calculateSum(numbers) {
  let total = 0;

  for (let i = 0; i < numbers.length; i++) {
    total = total + numbers[i];
  }

  return total;
}
console.log(calculateSum([1, 2, 3, 4]));

// Problem 7: Find Even Numbers in an Array
function getEvenNumbers(arr) {
  let evens = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evens.push(arr[i]);
    }
  }

  return evens;
}
console.log(getEvenNumbers([1, 2, 3, 4, 5, 6]));
