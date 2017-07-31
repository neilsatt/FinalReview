/* JSON - a structured way to store data 
   Use Key/Value pairs
   Chrome plugin - json 
*/

// In regular JS, Keys don't have to have quotes
// Valid JSON requires DOUBLE quotes around the property
// Values must have double quotes if they are strings 
[
    { "name": "Jim", 
      "phone": "555-233-5600"
    },
    { "name": "Ted", 
      "phone": "555-444-4676"
    },
    { "name": "Alice", 
      "phone": "555-555-5874"
    }
    
]

/* Parsing JSON - used in Ajax Programming */
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {  // callback
    if(xhr.readyState === 4) { // 4 = server has sent all of the date it will send
        var employees = JSON.parse(xhr.responseText); // converts string to JS Object
    }
};

/* Processing JSON Data 
    We want to convert the data into list items
    <li class="out">Amit</li>
    <li class="in">Andrew</li>
*/

xhr.onreadystatechange = function () {  // callback
    if(xhr.readyState === 4) { // 4 = server has sent all of the date it will send
        var employees = JSON.parse(xhr.responseText); // converts string to JS Object
        var statusHTML = '<ul class="bulleted">';
        for (var i = 0; i<employees.length; i++){
            if(employees[i].inoffice === true){
                statusHTML += '<li class="in">';
            }else {
                statusHTML += '<li class="out">';
            }
         statusHTML += employees[i].name;
         statusHTML += '</li>';
        }
      var statusHTML = '</ul>';
        document.getElementById('employeeList').innerHTML = statusHTML;
    }
};