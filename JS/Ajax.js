var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {  // callback
    if(xhr.readyState === 4) { // 4 = server has sent all of the date it will send
        var employees = JSON.parse(xhr.responseText); // converts string to JS Object
    }
};
xhr.open('GET', 'employees.json';) // the file would normally come from a server
xhr.send(); // callback doesn't do anything until AFTER we send the request


