// From https://teamtreehouse.com/library/javascript-loops-arrays-and-objects

/* Arrays-  a data structure for holding multiple pieces of information */

var scores = [100, 99, 99, 72, 60]; // numbers 
var names = ['Joan', 'Amit', 'Sarah', 'Ricardo', 'Piers']; // strings
var values = [1, -100, true, false, 'JavaScript'];  // mixed values 

/* Use and Index Value to acess individual items */
console.log(scores[3]); // 72

/* Adding items to arrays using methods */
scores.push(45); // add to the end of the array
scores.unshift(27); // add to the beginning of the array 


/* Removing items from arrays using methods */
scores.shift(); // remove the first item from the array
scores.pop(); //  remove the last item from the array

/* Using for loops with arrays */
for(var i = 0; i < 4; i++){
    console.log(scores[i];)
}

/* Other useful methods */
scores.join(':'); // returns the array separated by character
scores.concat(names); // combines both arrays
var whatPosition = scores.indexOf(100); // returns the index location

/* Two Dimensional Arrays
   Store Arrays inside Arrays 
   Rows and Columns 
*/

var grades = [
    [80, 90, 77, 87, 92],   // index 0
    [85, 94, 72, 83, 91],   // index 1
    [95, 64, 82, 93, 81]    // index 2
];

var playList = [
  ['Hi', 'Bill'], 
  ['Bye', 'Frank'], 
  ['What', 'Kelly'], 
  ['Yo', 'Macey']  
];
// list both items from the arrays
for(i = 0; i<playList.length; i++){
    console.log(playList[i][0] + ':' + playList[i][1] );
}

// combine with separator
array.join(,);
