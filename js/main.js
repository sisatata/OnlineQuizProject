// Declaring variables
var userOk = false;
var passOk = false;
var getName = "";
var getPass = "";
var checkName = "";
var checkPass = "";
var loginSuccess = false;
var wrong = "Wrong User Name Or Password ";
var chooseOption;
var count = 0;
var questionHeading = "Question Number: ";

var score = 0;   //calculate your score
var answered = [];   //store answer

var mins = 0;
var seconds1 = 0;
var seconds2 = 1;
var optionDescription;
var timer;
var totalAnswered = [];

var totsum = 0;

function toggleResetPswd(e) {
    e.preventDefault();
    $('#logreg-forms .form-signin').toggle() // display:block or none
    $('#logreg-forms .form-reset').toggle() // display:block or none
}


$(() => {
    // Login Register Form
    $('#logreg-forms #forgot_pswd').click(toggleResetPswd);
    $('#logreg-forms #cancel_reset').click(toggleResetPswd);
    $('#logreg-forms #btn-signup').click(toggleSignUp);
    $('#logreg-forms #cancel_signup').click(toggleSignUp);
})

// Database for users
var users = [
    {

        userName: "shakil",
        password: "123"
    },
    {
        userName: "sadiqul",
        password: "456"

    },
    {
        userName: "jamiul",
        password: "678"
    }

];
/*Sign In Page*/

//  Check username and password
function checkValidation() {
    var i, j;
    var len = users.length;
    getName = document.getElementById("userName").value;
    getPass = document.getElementById("userPassword").value;

    for (i = 0; i < len; i++) {
        checkName = users[i].userName;
        checkPass = users[i].password;
        if ((getName === checkName) && (getPass === checkPass)) {

            loginSuccess = true;
            localStorage.setItem("Name", getName);
            return true;

        }

    }
    if (loginSuccess === false && getName.length > 0 && getPass.length > 0) {

        document.getElementById("wrong").innerHTML = wrong;
        return false;
    }


}

/*Option Pages*/

//function to go js quiz page
function javascript() {

    window.location = "quiz.html";

}

var questions = [

    {

        question: "JavaScript is ECMAScript",
        options: ["A: False", "B: True", "C: May be", "D: All of the above"],
        answer: 2

    },

    {

        question: "Which of the following is a server-side Java Script object?",
        options: ["A: Function", "B: File", "C: FileUpload", "D: Date"],
        answer: 1

    },
    {
        question: "Which of the following is not a reserved word in JavaScript?",
        options: ["A: interface", "B: throws", "C: program", "D: short"],
        answer: 3


    },
    {
        question: "How does Java Script store dates in objects of Date type?",
        options: ["A: The number of days since January 1st, 1900", "B: he number of seconds since January 1st, 1970", "C: The number of milliseconds since January 1st, 1970", "D: The number of picoseconds since January 1st, 1970"],
        answer: 4


    },
    {
        question: "Which of the following is the tainted property of a window object in Java Script?",
        options: ["A: Pathname", "B: Protocol", "C:  Defaultstatus", "D: Host"],
        answer: 4


    },
    {
        question: "Which attribute needs to be changed to make elements invisible?",
        options: ["A:  visibilty", "B: visible", "C:  invisibility", "D: invisible"],
        answer: 1


    },
    {
        question: "Which of the following is not a valid JavaScript variable name?",
        options: ["A: 2java", "B:  _java_and_ java _names", "C: javaandjava", "D: None of the above"],
        answer: 1


    },
    {
        question: "Which of the ways below is incorrect of instantiating a date?",
        options: ["A: new Date(dateString)", "B: new Date()", "C: new Date(seconds)", "D: new Date(year, month, day, hours, minutes, seconds, milliseconds)"],
        answer: 3


    },
    {
        question: "___________ JavaScript is also called client-side JavaScript.",
        options: ["A: Microsoft", "B:  Navigator", "C: LiveWire", "D: Native"],
        answer: 2


    },
    {
        question: "What language defines the behavior of a web page?",
        options: ["A: HTML", "B: CSS", "C:  XML", "D: Java Script"],
        answer: 4


    },
    {
        question: "What is the alternate name for Java script?",
        options: ["A: LimeScript", "B:  Both a and d", "C: ECMScript", "D: ECMAScript"],
        answer: 4


    },
    {
        question: "Which of the following is a client-side Java Script object?",
        options: ["A:  File", "B: Function", "C: FileUpload", "D: Time"],
        answer: 3


    },
    {
        question: "What java wrapper type is created when a JavaScript object is sent to Java?",
        options: ["A:ScriptObject", "B: JavaObject", "C:  Jobject", "D: JSObject"],
        answer: 4


    },
    {
        question: "Which of the following method is used to evaluate a string of Java Script code in the context of the specified object?",
        options: ["A: Eval", "B: ParseDoule", "C: ParseObject", "D: Efloat"],
        answer: 1


    },
    {
        question: "In JavaScript, what is used in conjunction with HTML to react to certain elements?",
        options: ["A: RegExp", "B: Condition", "C: Events", "D: Boolean"],
        answer: 2


    },
    {
        question: "Why Java and JavaScript have similar name?",
        options: ["A: Java Script is a stripped-down version of Java", "B: The syntax of JavaScript is loosely based on Java syntax", "C:They both support Object Oriented Programming", "D: None of the above"],
        answer: 2


    },
    {
        question: "Which of the following are capable of JavaScript functions?",
        options: ["A: Returning multiple values", "B: Accepting parameters and returning values", "C: Accepting parameters", "D: all of the above"],
        answer: 4


    },
    {
        question: "Which attribute is used to hold JavaScript version?",
        options: ["A: SCRIPT", "B: VERSION", "C: LANGUAGE", "D: VER"],
        answer: 3


    },
    {
        question: "What type of image maps could be used with JavaScript?",
        options: ["A: Client-side image maps", "B: Server-side image maps", "C:  Both A and B", "D: Localhost image maps"],
        answer: 1


    },
    {
        question: "JavaScript entities start with ____________ and end with _____________",
        options: ["A: Semicolon, colon", "B: Semicolon, Ampersand", "C: Ampersand, colon", "D: Ampersand, semicolon"],
        answer: 4


    }


];

//function to go to next question and reset

function onLoad() {

    var name = document.getElementById("uName").innerHTML = localStorage.getItem("Name");

    count = 0;
    answered = [];
    mins = 0;
    seconds2 = 1;
    seconds1 = 0;
    totalAnswered = [];
    totsum = 0;
    initialize();
    document.getElementById("answered").innerHTML = "Total Answered: " + totsum;
    clearInterval(timer);
    clock();
    checkPage();


    document.getElementById("questionNo").innerHTML = questionHeading + (count + 1);
    questionDescription = questions[count].question;
    document.getElementById("question").innerHTML = questionDescription;
    document.getElementsByClassName("options");
    questionDescription = document.getElementsByClassName("options");
    for (var i = 0; i < 4; i++) {

        questionDescription[i].innerHTML = questions[count].options[i];

    }
    // checkAnswer();
    storeAnswer();

}


//function to clear option checked before

function reset() {

    questionDescription = document.getElementsByClassName("options");
    for (var i = 0; i < 4; i++) {

        questionDescription[i].style.color = "white";


    }


}

// function to store answer
function storeAnswer() {
    var indx1 = document.getElementById("1");
    var indx2 = document.getElementById("2");
    var indx3 = document.getElementById("3");
    var indx4 = document.getElementById("4");
    reset();


    document.getElementById("1").onclick = function () {


        answered[count] = 1;
        reset();
        indx1.style.color = "orange";
        totalAnswered[count] = 1;


        var now = totalAnsweredCount();
        document.getElementById("answered").innerHTML = now;


    };
    document.getElementById("2").onclick = function () {

        reset();
        answered[count] = 2;
        indx2.style.color = "orange";
        totalAnswered[count] = 1;

        var now = totalAnsweredCount();
        document.getElementById("answered").innerHTML = now;


    };
    document.getElementById("3").onclick = function () {

        reset();
        answered[count] = 3;
        indx3.style.color = "orange";
        totalAnswered[count] = 1;
        var now = totalAnsweredCount();
        document.getElementById("answered").innerHTML = now;


    };
    document.getElementById("4").onclick = function () {

        reset();
        answered[count] = 4;
        indx4.style.color = "orange";
        totalAnswered[count] = 1;
        var now = totalAnsweredCount();
        document.getElementById("answered").innerHTML = now;


    };


}

// function to check if answered
function isAnswered() {


    if (answered[count] === 1) {
        reset();
        document.getElementById("1").style.color = "orange";


    } else if (answered[count] === 2) {
        reset();
        document.getElementById("2").style.color = "orange";


    } else if (answered[count] === 3) {
        reset();
        document.getElementById("3").style.color = "orange";


    } else if (answered[count] === 4) {
        reset();
        document.getElementById("4").style.color = "orange";


    } else {
        reset();
    }


}

// function to next page
function increase() {
    var check1 = document.getElementById("1").style.color;
    var check2 = document.getElementById("2").style.color;
    var check3 = document.getElementById("3").style.color;
    var check4 = document.getElementById("4").style.color;
    if (check1 === "white" && check2 === "white" && check4 === "white" && check1 === "white") {
        alert("please select an option");
        return;
    }


    count++;

    checkPage();
    if (count >= 19) {
        document.getElementById("next-btn").disabled = true;
    }
    var questionDescription;


    document.getElementById("questionNo").innerHTML = questionHeading + (count + 1);
    questionDescription = questions[count].question;
    document.getElementById("question").innerHTML = questionDescription;
    document.getElementsByClassName("options");
    questionDescription = document.getElementsByClassName("options");
    for (var i = 0; i < 4; i++) {

        questionDescription[i].innerHTML = questions[count].options[i];

    }

    // checkAnswer();
    isAnswered();


}

// function to previous page
function decrease() {
    checkPage();

    count--;
    checkPage();


    var questionDescription;


    document.getElementById("questionNo").innerHTML = questionHeading + (count + 1);
    questionDescription = questions[count].question;
    document.getElementById("question").innerHTML = questionDescription;
    document.getElementsByClassName("options");
    questionDescription = document.getElementsByClassName("options");
    for (var i = 0; i < 4; i++) {

        questionDescription[i].innerHTML = questions[count].options[i];

    }

    isAnswered();

}

// function for calculationg result
function result() {

    var i = 0;
    for (i = 0; i < 20; i++) {
        if (answered[i] === questions[i].answer) {
            score++;
        }
    }
    count = 0;
    displaySet();


    var action = document.getElementsByClassName("questionDiv");
    for (i = 0; i < action.length; i++) {
        action[i].style.display = "none";
    }

    score = score * 5;
    var name = localStorage.getItem("Name");
    document.getElementById("result").innerHTML = name + " " + "Your Score: " + score;
    if (score >= 90) {
        document.getElementById("verdict").innerHTML = "Excellent";
    } else if (score >= 80) {
        document.getElementById("verdict").innerHTML = "Well Done";
    } else if (score >= 60) {
        document.getElementById("verdict").innerHTML = "Good";
    } else if (score >= 40) {
        document.getElementById("verdict").innerHTML = "Poor";
    } else {
        document.getElementById("verdict").innerHTML = "Fail";
        document.getElementById("verdict").style.color = "red";
    }
    score = 0;
    answered = [];
    count = 1;
    var retakeExam = document.getElementById("retake-btn");
    retakeExam.addEventListener("click", function () {
        displayUnset();


    });


}

function displaySet() {

    document.getElementById("retake-btn").style.display = "block";
    document.getElementById("showAnswer").style.display = "block";
    document.getElementById("submit-btn").style.display = "none";
    document.getElementById("result").style.display = "block";
    document.getElementById("verdict").style.display = "block";
    document.getElementById("next-btn").style.display = "none";
    document.getElementById("prev-btn").style.display = "none";

}


function displayUnset() {
    reset();
    count = 0;
    action = document.getElementsByClassName("questionDiv");
    for (i = 0; i < action.length; i++) {
        action[i].style.display = "block";
    }
    action = document.getElementsByTagName("button");

    action[0].style.display = "block";
    action[2].style.display = "block";

    document.getElementById("result").style.display = "none";
    document.getElementById("verdict").style.display = "none";
    document.getElementById("retake-btn").style.display = "none";
    document.getElementById("showAnswer").style.display = "none";
    document.getElementById("next-btn").style.display = "block";
    document.getElementById("prev-btn").style.display = "block";
    document.getElementById("submit-btn").style.display = "block";
    document.getElementById("next-btn").disabled = false;

}


function checkPage() {
    if (count < 1) {
        document.getElementById("prev-btn").disabled = true;
    } else {
        document.getElementById("prev-btn").disabled = false;

    }


}

function clock() {


    mins = 0;
    seconds2 = 1;
    seconds1 = 0;
    timer = setInterval(function () {


        if (seconds2 > 9 && seconds1 >= 5 && mins > 29) {
            seconds1 = 0;
            seconds2 = 1;
            mins = 0;
            onLoad();

        } else if (seconds2 > 9 && seconds1 >= 5) {
            seconds2 = 0;
            seconds1 = 0;
            mins++;
        } else if (seconds2 > 9) {
            seconds2 = 0;
            seconds1++;
        }


        document.getElementById("timer").innerHTML = "Elapsed Time: " + mins + ":" + seconds1 + seconds2;
        seconds2++;


    }, 1000)


}

function initialize() {

    var i;
    for (i = 0; i < 20; i++) {
        totalAnswered[i] = 0;
    }
}

// function to count total number of answered
function totalAnsweredCount() {
    var i;
    var sum = 0;
    for (i = 0; i < 20; i++) {
        sum += totalAnswered[i];
    }

    return "Total Answered: " + sum;


}

//function for showing Answeres
function showAnswer() {
    var i;
    var ques = document.getElementsByTagName("h4");
    var ans = document.getElementsByTagName("h5");
    for (i = 0; i < 20; i++) {
        ques[i].innerHTML = questions[i].question;
        var getAns = questions[i].answer - 1;
        ans[i].innerHTML = questions[i].options[getAns];
    }
}


//go back quiz page
function goBack() {

    window.location = "quiz.html";

}

//function to go answer page
function goAnswer() {

    window.location = "ans.html";
}
