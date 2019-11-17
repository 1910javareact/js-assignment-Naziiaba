/* 4. Factorial
Define function: factorial(someNum)
Use recursion to compute and return the factorial of someNum.  */

function factorial(someNum) {
    var result = someNum;
    if (someNum === 0 || someNum === 1) 
      return 1; 
    while (someNum > 1) { 
        someNum--;
      result *= someNum;
    }
    return result;
  }
  factorial(7);