// Front- End Logic
function check() {
    var questionOne = document.Quiz.questionOne.value;
    var questionTwo = document.Quiz.questionTwo.value;
    var questionThree = document.Quiz.questionThree.value;
    var questionFour = document.Quiz.questionFour.value;
    var questionFive = document.Quiz.questionFive.value;
    var right = 0;


    if (questionOne == "correct") {
        right = right + 10;
    };
    if (questionTwo == "correct") {
        right = right + 10;
    };
    if (questionThree == "correct") {
        right = right + 10;
    };
    if (questionFour == "correct") {
        right = right + 10;
    };
    if (questionFive == "correct") {
        right = right + 10;
    };


    
    document.getElementById("fifth-p").style.visibility = "visible";
    document.getElementById("correctNumber").innerHTML = "HERE IS YOUR SCORE: " + right + "/50";
    $(".container").fadeOut();

};
// Business-Logic


