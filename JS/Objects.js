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