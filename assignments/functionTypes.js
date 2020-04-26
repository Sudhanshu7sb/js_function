// Write the below function in five different forms. i.e
// 1. Function Decleration
// 2. Function Expression
// 3. Arrow Function Without Curly Braces
// 4. Arrow Function With Curly Braces
// 5. Function Invocation

// Example Start
/**
 * Converts a number a string.
 * @param {number} n
 * @return {string} the number as a string
 */

//Function Decleration
function convertToString(n) {
  return String(n);
}

// Function Expression
let convertToString1 = function(n) {
  return String(n);
};

// Arrow Function
let convertToString = n => String(n);

// Arrow Function With Curly Bracket

let convertToString = n => {
  return String(n);
};

// Function Invocation

convertToString(21); // "21"

// Example End

/**
 * Adds one to a given number.
 * @param {number} n
 * @return {number}
 */
 

 //Function Decleration
function number(n) {
  return n+1;
}

// Function Expression
let number = function(n) {
  return n+1;
};

// Arrow Function
let number = n => n+1;


// Arrow Function With Curly Bracket

let number = n => {
  return (n+1);
};

// Function Invocation

number(1); // "21"





/**
 * Subtracts one from a given number.
 * @param {number} n
 * @return {number}
 */


  //Function Decleration
function number(n) {
  return n-1;
}

// Function Expression
let number = function(n) {
  return n-1;
};

// Arrow Function
let number = n => n-1;


// Arrow Function With Curly Bracket

let number = n => {
  return (n-1);
};

// Function Invocation

number(11); // "21"

/**
 * Adds two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the sum
 */


 //Function Decleration
 function add(a,b) {
  return a+b;
}

// Function Expression
let number = function(a,b) {
  return n+1;
};

// Arrow Function
let number = (a,b) => a+b;


// Arrow Function With Curly Bracket

let number = (a,b) => {
  return (a+b);
};

// Function Invocation

number(2,3); // "21"


/**
 * Subtracts the second number from the first.
 * @param {number} x
 * @param {number} y
 * @return {number} the difference
 */


  //Function Decleration
function number(x,y) {
  return y-x;
}

// Function Expression
let number = function(x,y) {
  return y-x;
};

// Arrow Function
let number = (x,y) => y-x;


// Arrow Function With Curly Bracket

let number = (x,y) => {
  return (y-x);
};

// Function Invocation

number(3,6); // "21"

/**
 * Multiplies two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the product
 */


   //Function Decleration
function number(x,y) {
  return y-x;
}

// Function Expression
let number = function(x,y) {
  return y*x;
};

// Arrow Function
let number = (x,y) => y*x;


// Arrow Function With Curly Bracket

let number = (x,y) => {
  return (y*x);
};

// Function Invocation

number(3,6);

/**
 * Divides the first number by the second.
 * @param {number} x
 * @param {number} y
 * @return {number} the quotient
 */


   //Function Decleration
function number(x,y) {
  return y/x;
}

// Function Expression
let number = function(x,y) {
  return y/x;
};

// Arrow Function
let number = (x,y) => y/x;


// Arrow Function With Curly Bracket

let number = (x,y) => {
  return (y/x);
};

// Function Invocation

number(3,6);

/**
 * Multiplies a number by itself.
 * @param {number} x, number to be squared
 * @return {number} squared
 */


  //Function Decleration
  function number(x) {
    return x*x;
  }
  
  // Function Expression
  let number = function(x) {
    return x*x;
  };
  
  // Arrow Function
  let number = (x) => x*x;
  
  
  // Arrow Function With Curly Bracket
  
  let number = (x) => {
    return (x*x);
  };
  
  // Function Invocation
  
  number(3);



/**
 * Performs a mathematical operation on two numbers.
 * Also prints out the equation: (i.e.) "1 + 5 = 6" or "8 / 2 = 4".
 * @param {string} operation "add", "subtract", "multiply", or "divide"
 * @param {number} x
 * @param {number} y
 * @return {number} the result
 */

/**
 * Returns true if `a` is greater than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is larger than `b`
 */


   //Function Decleration
function number(a,b) {
  if(a>b) {
  return true;
  }
}

// Function Expression
let number = function(a,b) {
  if(a>b) {
  return true;
  }
};

// Arrow Function
let number = (a,b) => (a>b)?  true: false;


// Arrow Function With Curly Bracket

let number = (a,b) => {
  (a>b)? true : false;
};

// Function Invocation

number(3,6);

/**
 * Returns true if `a` is less than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is smaller than `b`
 */


    //Function Decleration
function number(a,b) {
  if(a<b) {
  return true;
  }
}

// Function Expression
let number = function(a,b) {
  if(a<b) {
  return true;
  }
};

// Arrow Function
let number = (a,b) => (a<b)?  true: false;


// Arrow Function With Curly Bracket

let number = (a,b) => {
  (a<b)? true : false;
};

// Function Invocation

number(3,6);



/**
 * Returns true if `a` and `b` are equal.
 * @param {number} a
 * @param {number} b
 * @return {boolean} the numbers are equal
 */


     //Function Decleration
function number(a,b) {
  if(a=b){
  return true;
  }
  else {
    return false;
  }
}

// Function Expression
let number = function(a,b) {
  if(a=b) {
  return true;
  } else {
    return false;
  }
};

// Arrow Function
let number = (a,b) => (a=b)?  true: false;


// Arrow Function With Curly Bracket

let number = (a,b) => {
  (a=b)? true : false;
};

// Function Invocation

number(3,6);





/**
 * Returns the smallest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the smallest number
 */


 //Function Decleration
 function number(a,b) {
  if(a<b){
  return a;
  }
  else {
    return b;
  }
}

// Function Expression
let number = function(a,b) {
  if(a<b) {
  return a;
  } else {
    return b;
  }
};

// Arrow Function
let number = (a,b) => (a<b)?  a: b;


// Arrow Function With Curly Bracket

let number = (a,b) => {
  (a<b)? a : b;
};

// Function Invocation

number(3,6);


/**
 * Returns the largest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the largest number
 */


 //Function Decleration
 function number(a,b) {
  if(a>b){
  return a;
  }
  else {
    return b;
  }
}

// Function Expression
let number = function(a,b) {
  if(a>b) {
  return a;
  } else {
    return b;
  }
};

// Arrow Function
let number = (a,b) => (a>b)?  a: b;


// Arrow Function With Curly Bracket

let number = (a,b) => {
  (a>b)? a : b;
};

// Function Invocation

number(3,6);

//---------------------------------------------------------

/**
 * Returns true if `n` is even.
 * @param {number} n
 * @return {boolean} the number is even
 */

 //Function Decleration
 function number(n) {
  if(n % 2 == 0){
  return  (true +' the number is even');
  }
  else {
    return ('odd');
  }
}

// Function Expression
let number = function(n) {
  if(n % 2 == 0) {
  return (true +' the number is even');
  } else {
    return odd;
  }
};

// Arrow Function
let number = (n) => (n % 2 == 0)?  true: false;


// Arrow Function With Curly Bracket

let number = (n) => {
  (n % 2 == 0)? true : false;
};

// Function Invocation

number(3);

//------------------------------------------------------------------

/**
 * Returns true if `n` is odd.
 * @param {number} n
 * @return {boolean} the number is odd
 */

//Function Decleration
function number(n) {
  if(n % 2 == 1){
  return  (true +' the number is odd');
  }
  else {
    return ('even');
  }
}

// Function Expression
let number = function(n) {
  if(n % 2 == 1) {
  return (true +' the number is odd');
  } else {
    return even;
  }
};

// Arrow Function
let number = (n) => (n % 2 == 1)?  (true +' the number is odd'): false;


// Arrow Function With Curly Bracket

let number = (n) => {
  (n % 2 == 0)? (true +' the number is odd') : even;
};

// Function Invocation

number(3);

//---------------------------------------------------------------------------------

/**
 * Returns a letter grade.
 * "A": 90-100%
 * "B": 80-89%
 * "C": 70-79%
 * "D": 60-69%
 * "F": 0-59%
 * @param {number} score
 * @param {number} total maximum possible score
 * @return {string} the score represented as a letter grade
 */

//Function Decleration
function grade(score,total) {
  if ((((score/total)*100) >= 90) && ((score/total)*100) <=100) {
    return 'A';
} else if ((((score/total)*100) >= 80) && ((score/total)*100) <90) {
    return 'B';
} else if ((((score/total)*100) >= 70) && ((score/total)*100) <80) {
    return 'C';
} else if ((((score/total)*100) >= 60) && ((score/total)*100) <70) {
    return 'D';
} else {
    return 'F';
}
}

// Function Expression
let grade = function(score,total) {
  if ((((score/total)*100) >= 90) && ((score/total)*100) <=100) {
    return 'A';
} else if ((((score/total)*100) >= 80) && ((score/total)*100) <90) {
    return 'B';
} else if ((((score/total)*100) >= 70) && ((score/total)*100) <80) {
    return 'C';
} else if ((((score/total)*100) >= 60) && ((score/total)*100) <70) {
    return 'D';
} else {
    return 'F';
}
};

// Arrow Function
let grade = (score,total) => ((((score/total)*100) >= 90) && ((score/total)*100) <=100) ?
   'A': ((((score/total)*100) >= 80) && ((score/total)*100) <90) ?
   'B': ((((score/total)*100) >= 70) && ((score/total)*100) <80) ?
   'C': ((((score/total)*100) >= 60) && ((score/total)*100) <70) ?
   'D':'F';



// Arrow Function With Curly Bracket

let grade = (score,total) => {
  ((((score/total)*100) >= 90) && ((score/total)*100) <=100) ?
   'A': ((((score/total)*100) >= 80) && ((score/total)*100) <90) ?
   'B': ((((score/total)*100) >= 70) && ((score/total)*100) <80) ?
   'C': ((((score/total)*100) >= 60) && ((score/total)*100) <70) ?
   'D':'F';
};

// Function Invocation

grade(91,100);
grade(59,100);


//---------------------------------------------------------------------

/**
 * Joins two strings with a space.
 * @param {string} word1
 * @param {string} word2
 * @return {string} joined the words joined with a space
 */

 //Function Decleration
function string(word1, word2) {
  return  (word1 + " " +word2);
}

// Function Expression
let string = function(word1,word2) {
  return (word1 +' ' + word2);
  } 

// Arrow Function
let string = (word1,word2) =>    (word1 + ' ' +word2);


// Arrow Function With Curly Bracket

let string = (word1,word2) => {
  return (word1 + ' ' + word2);
};

// Function Invocation

string("sudhan","shu");

