function check() {
    var question1= document.Quiz.question1.value;
    var question2 = document.Quiz.question2.value;
    var question3 = document.Quiz.question3.value;
    var question4 = document.Quiz.question4.value;
    var question5 = document.Quiz.question5.value;
    var right = 0;


    if (question1 == "correct") {
        right = right + 20;
    };
    if (question2 == "correct") {
        right = right + 20;
    };
    if (question3 == "correct") {
        right = right + 20;
    };
    if (question4 == "correct") {
        right = right + 20;
    };
    if (question5 == "correct") {
        right = right + 20;
    };



    document.getElementById("quiz").style.visibility = "visible";
    document.getElementById("correctNumber").innerHTML = "HERE IS YOUR SCORE: " + right + "%";
    $(".container").fadeOut();

};