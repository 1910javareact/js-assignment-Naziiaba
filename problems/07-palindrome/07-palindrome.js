/* 7. Palindrome
Define function isPalindrome(someStr)
Return true if someStr is a palindrome, otherwise return false */

function isPalindrome(someStr) {
    var sym = /[^A-Za-z0-9]/g;
    someStr = someStr.toLowerCase().replace(sym, '');
    var len = someStr.length;
    for (var i = 0; i < len/2; i++) {
      if (someStr[i] !== someStr[len - 1 - i]) {
          return false;
      }
    }
    return true;
   }
   isPalindrome (Racecar)