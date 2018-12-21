// Front- End Logic
function check() {
    var questionOne = document.Quiz.questionOne.value;
    console.log("questionOne");
    var questionTwo = document.Quiz.questionTwo.value;
    console.log("questionTwo");
    var questionThree = document.Quiz.questionThree.value;
    console.log("questionThree");
    var questionFour = document.Quiz.questionFour.value;
    console.log("questionFour");
    var questionFive = document.Quiz.questionFive.value;
    console.log("questionFive");
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


    
    document.getElementById("point").style.visibility = "visible";
    document.getElementById("correctNumber").innerHTML = "HERE IS YOUR SCORE: " + right + "/50";
    $(".container").fadeOut();

};
// Business-Logic


