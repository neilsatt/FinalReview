/* Object Literal */
// Think of an object like a variable that holds multiple variables
key: value 
property: value

// example of object literal
var student = {
    name: "dave",
    grades: [80, 67, 98, 86, 89], 
}

// Access using brackets (not as common)
student['name';]

// Access using dot notation
student.name; // dave

// Add new properties 
student.gradeLevel = 'junior';

/* Looping through items in an object */
for (var key in student) { // var name (key) can be whatever you chose
    console.log(key); // would print out 'name' and 'grades'
}

// Print out key AND value
for (prop in student) { // this time use prop as the variable, just because
    console.log(prop, ': ', student[prop]); // use a comma for the value
    // and then you HAVE to use bracket notation to get the prop value 
}

/* Arrays of Objects */
var tasks = [
  {
      name: "Do homework",
      due: "01/27/2016",
      complete: false,
      assignedTo: "Dave"
  },
 {
      name: "Go to gym",
      due: "01/27/2015",
      complete: true,
      assignedTo: "Cecilia"
  },
 {
      name: "Complete JavaScript course",
      due: "05/27/2015",
      complete: false,
      assignedTo: "You"
  }
];

/* print out each property