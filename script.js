$(document).ready(function() {
    var magic8ball = {};
    magic8ball.listOfAnswers = ["As I see it yes", "Not at this time", "It seems unlikely", "Signs point to yes", "Ask again later"];
    $("#answer").hide();
    
    magic8ball.askQuestion = function(question) {
        $("#answer").fadeIn(4000);
        var randomNumber = Math.random();
        var randomNumberForListOfAnswers = randomNumber * this.listOfAnswers.length;
        var randomIndex = Math.floor(randomNumberForListOfAnswers);
        var answer = this.listOfAnswers[randomIndex];
        $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballAnswer.png");
    
    $("#answer").text( answer );
        
    console.log (question);
    console.log (answer);
    };
    
    var onClick = function () {
        $("#answer").hide();
        $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballQuestion.png");
    };
        setTimeout(
            function() {
    var question = prompt("Ask me a yes/no question.");
    magic8ball.askQuestion(question);
    }, 500);
    
    $("#questionButton").click( onClick );
    $("#8ball").effect( "shake" );
    });