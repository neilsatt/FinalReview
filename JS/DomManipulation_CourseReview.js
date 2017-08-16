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
    let listItems = document.querySelectorAll('#rainbow li');
*/ 


/*  Challenges
    1. select all links in the nav element and assign them to navigationLinks.
    <nav>
        <ul>
          <li><a href="index.html" class="selected">Portfolio</a></li>
          <li><a href="about.html">About</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
        
    let navigationLinks = document.querySelectorAll('nav a'); 
    
    
    2. select all links in the unordered list with the id of "gallery" and assign them to galleryLinks.
        document.querySelectorAll('#gallery a');

*/
// ----------------------------------------------------------------------------
// 3. Making Changes to the DOM - replacing and changing text, add and remove nodes
   let myHeading = document.querySelector('hi');
   myHeading.textContent = 'New heading';

   innerHTML can also read and alter elements 
   let ul = document.querySelector('ul'); 
   ul.innerHTML; // returns all of the ul content, including li elements and text
   
   // Changing Element Attributes
   input.type
   "text"
   input.type = 'checkbox' // changed the type
   
   
   //Styling Elements 
   In console, see a element's styles = p.style
   Change style = p.style.color = 'blue'

   //Toggle an element
   myDiv.style.display = 'none';
   myDiv.style.display = 'block';
   
  //Creating New DOM Elements - document.createElement()
   let li = document.createElement('li'); // created 
   li.textContent = addItemInput.value;
   
   //Appending Nodes - this will add elements to the page - Node.appendChild(childElement)
   ul.appendChild(li); // no parenthesis
   
   
   //Removing Nodes - removeChild(childElement);
   
   /*
   Quizzes
   What property can you use to change an element's class name with JavaScript?
    className

   What property can you use to change an element's style with JavaScript?
    style
    
   Select the unordered list element and store it in the variable myList
    let myList = document.getElementsByTagName('ul')[0];
   
   Remove the list item element stored in firstListItem from the DOM
    myList.removeChild(firstListItem);
    
   How does appendChild know where to place an element within a web page?
    By looking at the element appendChild was called on, and nesting the new element inside
    
  The removeChild method can be called on an element which is a child of another element.
    True
    
  The appendChild method can also be used to remove elements from the DOM.
    False
  */ 


// ----------------------------------------------------------------------------
// 4. Responding to User Interaction - Events
      Examples: click, dblclick, mousedown, mouseover, touch (mobile), keyboard, etc. 

    Functions as Parameters
    function say(something) {
        console.log(something);
    }
    function exec(func, arg){
      func(arg);
    }
    exec(say,'hello');
    
    or
    
    exec(function say(something){
     console.log('something');
    }, 'Hi, there');
    
    
    Delaying execution with setTimeout()
    window.setTimeout(function(){ 
            alert("Hello"); 
        }, 3000);
        
    
    addEventListener 
        button.addEventListener('mouseover', function(){
            doSomething();
        });
        
        
    Event Bubbling and Delegation
        An event received by an element doesn't stop with that one element. 
        That event moves to other elements like the parent, and other ancestors of the element. 
        This is called "event bubbling".
        
        
    body - PARENT/ANCESTOR
    ul - PARENT/ANCESTOR
    li - clicking here, also moves upward or bubbles up the DOM tree
    Bubbling allows us to listen for events on ancestor elements, instead of adding 
    event listeners to every element.
    
    
    Add and Event Listener to a parent element and let it handle events on it children
    event.target.tagName
    button.addEventListener('click', function(event){
    if(event.target.tagName === 'LI') {  // only select li items, needs to be all caps
            event.target.textContent = 'hi';
        }
    });
    
    
    
    
    /*
    Quizzes:
    Why is it useful to be able to pass one function into another
        This allows you to have more control over when and how a function gets executed. 
        
    
   How would you set up the following function `add` to run after 5 seconds have passed, 
   using Window.setTimeout? 
   In addition, how would you pass `add` the arguments 2 and 2 when it runs?
        window.setTimeout(add, 5000, 2, 2);
        
        
   What is the callback function that is passed to addEventListener often called?    
    An event handler
   */ 
   

// ----------------------------------------------------------------------------
// 5. Traversing the DOM - moving around the nodes in the DOM 

Using parentNode to Traverse Up the DOM
    var paragraph = document.getElementById('myParagraph');
    to remove the paragraph, you have to have a reference to the parent element
    var parent = paragraph.parentNode;
    parent.removeChild(paragraph);
    
    
// Traversing the DOM
// When removing an element, you need to have a reference
// to the parent element (parentNode)
var listUL = listDiv.querySelector('ul');
listUL.addEventListener()
var li = event.target;
var ul = li.parentNode;
ul.removeChild(li);

//Using previousElementSibling and insertBefore
li.previousSibling.textContent; // element before in li elements

prevLi = li.previousElementSibling;
var ul = li.parentNode;
if(prevLi) {  // run only if there is a previous sibling
    ul.insertBefore(li, prevLi);
}

// Code Challenge - moving elements down using nextElementSibling
li = event.target.parentNode;
nextLi = li.nextElementSibling;
var ul = li.parentNode;
if(nextLi) {  // run only if there is a previous sibling
    ul.insertBefore(nextLi, li); // there isn't an insertAfter method
}  


/*  Code Challenge
A delegated click event listener has been attached to the selected ul element, which is stored in the variable list. The handler is targeting each button in the list. When any one of the buttons is clicked, a class of highlight should be added to the paragraph element immediately preceding that button inside the parent list item element. Add the code to create this behavior on line 5.
*/

const list = document.getElementsByTagName('ul')[0];

list.addEventListener('click', function(e) {
  if (e.target.tagName == 'BUTTON') {
    // add highlight class to  paragraph
    // immediately preceding the button
    // inside the parent list element  
      let p = e.target.previousElementSibling;
      p.className = "highlight";
    
  }
});


// Getting All Children of a Node with children - returns HTML Elements
const lis = listUL.children;
function attachListItemButtons(li) {
    let up = document.createElement('button');
    up.className = 'up';
    up.textContent = 'up';
    li.appendChild(up);
    let down = document.createElement('button');
    // same process
     let remove = document.createElement('button');
    // same process
}

for(let i=0; i<lis.length; i++){
    attachListItemButtons(lis[i]);
}


// Getting the First and Last Child
ParentNode.firstElementChild;
ParentNode.lastElementChild;

/* 
  older versions are firstChild and lastChild 
  supported by more browserd, but don't return HTML elements
  Example, traversing UL and LI elements
*/
var firstListItem = listUl.firstElementChild;
firstListItem.style.backgroundColor = 'blue';




// Quiz Questions 
/* 
How many nodes are needed to perform the insertBefore method?
    3 - The parent, sibling and the reference to the node
    
What is DOM Traversal?
    Selecting an element based on its relationship to another element
    
Why is previousElementSibling preferred to previousSibling when manipulating the DOM?
    Unlike previousSibling, previousElementSibling always returns 
    a DOM element
    
Get all the paragraph elements within section and assign them to the paragraphs variable.
            <section>
                <p>This is the first paragraph</p>
                <p>This is a slightly longer, second paragraph</p>
                <p>Shorter, last paragraph</p>
            </section>
            const section = document.querySelector('section');
            let paragraphs = section.children;    
            
            
            For every paragraph element change the color to be blue (use a loop)
            
            for(i=0; i< paragraphs.length; i++){
                paragraphs[i].style.color = "blue";
            }

*/

// Change Input bg color
let section = document.getElementsByTagName('section')[0];
alert(section)

section.addEventListener('click', (e) => {
  if(e.target.tagName == "INPUT") {
    e.target.style.backgroundColor = 'rgb(255, 255, 0)';
  }
});





