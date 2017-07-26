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


