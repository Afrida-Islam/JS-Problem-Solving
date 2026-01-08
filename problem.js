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
function removeDuplicates(arr) {
  let unique = [];

  for (let i = 0; i < arr.length; i++) {
    if (unique.indexOf(arr[i]) === -1) {
      unique.push(arr[i]);
    }
  }

  return unique;
}
const numbers = [1, 2, 2, 3, 4, 4];
console.log(removeDuplicates(numbers));

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

// Problem 8: Capitalize First Letter of Each Word
function capitalizeWords(sentence) {
  let words = sentence.split(" ");

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }

  return words.join(" ");
}
console.log(capitalizeWords("hello world"));

// Problem 9: Find the Factorial of a Number
function findFactorial(n) {
  let result = 1;

  for (let i = 1; i <= n; i++) {
    result = result * i;
  }

  return result;
}
console.log(findFactorial(5));

// Problem 10: PingPong Challenge
function pingPongChallenge() {
  for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("PingPong");
    } else if (i % 3 === 0) {
      console.log("Ping");
    } else if (i % 5 === 0) {
      console.log("Pong");
    } else {
      console.log(i);
    }
  }
}
pingPongChallenge();
