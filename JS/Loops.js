/* While Loops */
var counter = 1;
while ( counter <= 10 ) {
  console.log(counter);
  counter += 1;
}


/* Do while loops */
var result = '';
var i = 0;
do {
   result += "The number is: "+i + '\n'; // newline for console
   i++; 
} while (i < 5);
console.log(result);

/* For loops */
for (var i = 0; i < 10; i++) {
   console.log(i);
}


// the break keyword will immediately exit you out of any loop

/* Loop example to show random colors */
var html = '';
var red;
var green;
var blue;
var rgbColor;

for (var i = 1; i <= 100; i++) {
    red = Math.floor(Math.random() * 256);
    green = Math.floor(Math.random() * 256);
    blue = Math.floor(Math.random() * 256);
    rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
    
    html += '<div style="background-color:'+ rgbColor + '"></div>';
}
console.log(rgbColor);
document.write(html);

/* Refactored version */
function randomRGB() {
    return Math.floor(Math.random() * 256);
}

for (var i = 1; i <= 100; i++) {
    red = randomRGB();
    green = randomRGB();
    blue = randomRGB();
    rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
    
    html += '<div style="background-color:'+ rgbColor + '"></div>';
}

/* Write a loop that logs all of the even numbers from 2 to 24 to the console */
for(i=2; i<=24; i+=2){
    console.log(i);
}







