var readlineSync = require("readline-sync");

var score = 0;
var userName = readlineSync.question("Your Good name please? ");


var userReply = readlineSync.question("WELCOME "+ userName +" do you know Amey ?");



//play function

function play(question,answer) {
  var userAnswer = readlineSync.question(question);

  if(userAnswer.toUpperCase()==answer.toUpperCase()) {
    console.log("You got it right");
    score = score + 1;
} else {
  console.log("ohh You got it wrong");
 }

 console.log("You Scored : "+ score);
 console.log("-------------------------");
}


//array of object
var questions = [{
  question:"Where do I live? ",
  answer:"Pune"
}, {
  question:"My favorite superhero would be? ",
  answer:"Ironman"
}, {
  question:"Where do I work? ",
  answer:"Microsoft"
}];

//loop
for(i=0;i<questions.length;i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question,currentQuestion.answer);
}

console.log("YAY! You scored " + score);


