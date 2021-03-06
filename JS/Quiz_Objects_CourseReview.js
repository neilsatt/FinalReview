/* Update to use Objects */

var questions = [
    { question: 'How many states are in the US?', 
      answer: 50
    },
    { question: 'How many continents are there?', 
      answer: 7
    },
    { question: 'How many Koreas are there?', 
      answer: 2
    }
];

var correctAnswers = 0;
var question;
var answer;
var response;
var html;

//update to show correct and incorrect answers
var correct = [];
var wrong = [];

function print(message) {
    var outputDiv = document.getElementById('output');
    outputDiv.innerHTML = message;
}

function buildList(arr){
    var listHTML = '<ol>';
    for (var i = 0; i < arr.length; i++){
        listHTML += '<li>' + arr[i] + '</li>';
    }
    listHTML += '</ol>';
    return listHTML;   
}

for(var i = 0; i < questions.length; i++) {
    question = questions[i].question;
    answer = questions[i].answer;
    response = parseInt(prompt(question));
    if (response === answer){
        correctAnswers += 1;
        correct.push(question); // add the correct answer to the array 
    } else {
        wrong.push(question); // add the incorrect answer to the array 
    }
}

html = "You got "+correctAnswers + " question(s) right.";
html += '<h2>You got these questions correct:</h2>';
html += buildList(correct);
html += '<h2>You got these questions wrong:</h2>';
html += buildList(wrong);
print(html);