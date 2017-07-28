var questions = [
    ['How many states are in the US?', 50],
    ['How many continents are there?', 7],
    ['How many Koreas are there?', 2] 
];

var correctAnswers = 0;
var question;
var answer;
var response;
var html;

function print(message) {
    document.write(message);
}

for(var i = 0; i < questions.length; i++) {
    question = questions[i][0];
    answer = questions[i][1];
    response = parseInt(prompt(question));
    if (response === answer){
        correctAnswers += 1;
    }
}

html = "You got "+correctAnswers + " question(s) right.";
print(html);