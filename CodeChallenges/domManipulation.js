// RSVP Application - https://teamtreehouse.com/library/dom-scripting-by-example 
const form = document.getElementById('registrar');
const input = form.querySelector('input');
const ul = document.getElementById('invitedList');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    console.log(input.value);
    const text = input.value;
    input.value = "";
    
    const ul = document.getElementById('invitedList');
    const li = document.createElement('li');
    li.textContent = text;
    
    const label = document.createElement('label');
    label.textContent = 'Confirmed';
    
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    
    label.appendChild(checkbox);
    li.appendChild(label);
    ul.appendChild(li);
    
});

ul.addEventListener('change', function(e){
    console.log(e.target.checked);
    const checkbox = event.target;
    const checked = checkbox.checked;
    const listItem = checkbox.parentNode.parentNode;
    
    if(checked) {
       listItem.className = 'responded';
       } else {
           listItem.className = '';
       }
});