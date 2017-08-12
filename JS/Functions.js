/* anonymous function */
function myFunction() {
  // code
}

/* function expression */
var myFunction =  function () {
  // do stuff here
};

/* returning values */
function sayMyName() {
    return 'Fred'; // functions can only return one value
    // nothing happens after a return statement
}

/* return value/multiple conditions */
function isItCold() {
    var temp = '66';
    if(temp < 65){
        return true;
    } else {
        return false;
    }
}

/* Adding Parameters */
function calculateArea( width, length ) {
  return width * length;
}

calculateArea( 5, 4 ); // 20

/*
    Parameters - A variable in which the function stores information passed to it
    
    Argument - A value you pass to a function when you call the function

    When you call a function you pass an "argument" which is 
    stored in a "parameter" in the function
      
*/

/* 
    MAX function -  accepts two numbers as arguments (you can name the arguments, whatever you would like). 
    The function should return the larger of the two numbers. Use a conditional statement. 
    
*/

function max(num1, num2) {
    if(num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}


/* 
    Beneath the max function you just created, call it with two numbers and display the results in an alert dialog. Pass the result of the function to the alert method.
*/ 

alert ( max(3,4) );


// Function expressions and declarations
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function