// From https://teamtreehouse.com/library/javascript-and-the-dom-2

// ----------------------------------------------------------------------------
// 1. The Browser Environment
/* 
   The DOM is a representation of a webpage that JavaScript can use. 
   Changes that JavaScript makes to the DOM alter the web page.
   Global Scope = window object
   
   JS and the DOM - select elements, read or change elements, respond to user events
 
 Quiz Review:
 
 The document object and all other global variables is a property of which object?
 Window
 
 The document object is a global object representing the HTML and content of a webpage.
 
 You can use the document object to select and control elements of the currently 
 loaded webpage.
 
 
 Interactivity with JS involves 3 basic actions - selecting and manipulating elements and listening for actions
  
*/


// ----------------------------------------------------------------------------
// 2. Getting a handle on the DOM - Selecting elements
const myHeading = document.getElementById('myHeading');
myHeading.addEventListener('click', () => {     // start listening for events
 myHeading.style.color = 'red';
});

// using a button and an input box
// <input type="text" id="myTextInput">
myButton.addEventListener('click', () => {     // start listening for events
 myHeading.style.color = myTextInput.value;
});

// select Elements by Tag
const myList = document.getElementsByTagName('li');
myList[2].style.color = 'purple'; // change the 3rd li item
// change every item 
for( let i = 0; i < mylist.length; i += 1){
    myList[i].style.color = 'purple';
}

// select Elements by Class
const errorNotPurple = document.getElementsByClassName('error-not-purple');
for( let i = 0; i < errorNotPurple.length; i += 1){
    errorNotPurple[i].style.color = 'red';
}

// Quiz Review #1
/*
 How would you select the body element using document.getElementsByTagName, 
 and store it in the variable body?
 const body = document.getElementsByTagName('body')[0];

 What data type does document.getElementsByClassName return? - HTML Collection
 
 What data type does document.getElementById return? - HTML Element 

*/

// CSS Queries - accept IDs, classes, tags, etc. 
document.querySelector('li'); // returns first matching element
document.querySelectorAll('li'); // HTML collection

// select by attribute
document.querySelector('[title=label]'); // returns element with title='label' attribute

// psuedo class selector
const evens = document.querySelectorAll('li:nth-child(even)');
for( let i = 0; i < evens.length; i += 1){
    evens[i].style.backgroundColor = 'red';
}

/* 
    Challenge 
    On line 1 of app.js, set the variable listItems to refer to a collection. 
    The collection should contain all list items in the unordered list element with the id of rainbow.
    let listItems = document.querySelectorAll('#rainbow');
*/ 



// ----------------------------------------------------------------------------
// 3. Making Changes to the DOM - replacing and changing text, add and remove nodes






// ----------------------------------------------------------------------------
// 4. Responding to User Interaction - Events







// ----------------------------------------------------------------------------
// 5. Traversing the DOM - moving around the nodes in the DOM 