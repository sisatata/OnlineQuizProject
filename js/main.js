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
var count = -1;
var questionHeading = "Question Number:";
var answered = false;
var score;
var answered = [];
var optionDescription;

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
            return true;

        }

    }
    if (loginSuccess === false && getName.length > 0 && getPass.length > 0) {

        document.getElementById("wrong").innerHTML = wrong;
        return false;
    }

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
        answer:4


    },
    {
        question: "Which of the following is the tainted property of a window object in Java Script?",
        options: ["A: Pathname", "B: Protocol", "C:  Defaultstatus", "D: Host"],
        answer:4


    },
    {
        question: "Which attribute needs to be changed to make elements invisible?",
        options: ["A:  visibilty", "B: visible", "C:  invisibility", "D: invisible"],
        answer:1


    },
    {
        question: "Which of the following is not a valid JavaScript variable name?",
        options: ["A: 2java", "B:  _java_and_ java _names", "C: javaandjava", "D: None of the above"],
        answer:1


    },
    {
        question: "Which of the ways below is incorrect of instantiating a date?",
        options: ["A: new Date(dateString)", "B: new Date()", "C: new Date(seconds)", "D: new Date(year, month, day, hours, minutes, seconds, milliseconds)"],
        answer:3


    },
    {
        question: "___________ JavaScript is also called client-side JavaScript.",
        options: ["A: Microsoft", "B:  Navigator", "C: LiveWire", "D: Native"],
        answer:2


    },
    {
        question: "What language defines the behavior of a web page?",
        options: ["A: HTML", "B: CSS", "C:  XML", "D: Java Script"],
        answer:4


    },
    {
        question: "What is the alternate name for Java script?",
        options: ["A: LimeScript", "B:  Both a and d", "C: ECMScript", "D: ECMAScript"],
        answer:4


    },
    {
        question: "Which of the following is a client-side Java Script object?",
        options: ["A:  File", "B: Function", "C: FileUpload", "D: Time"],
        answer:3


    },
    {
        question: "What java wrapper type is created when a JavaScript object is sent to Java?",
        options: ["A:ScriptObject", "B: JavaObject", "C:  Jobject", "D: JSObject"],
        answer:4


    },
    {
        question: "Which of the following method is used to evaluate a string of Java Script code in the context of the specified object?",
        options: ["A: Eval", "B: ParseDoule", "C: ParseObject", "D: Efloat"],
        answer:1


    },
    {
        question: "In JavaScript, what is used in conjunction with HTML to react to certain elements?",
        options: ["A: RegExp", "B: Condition", "C: Events", "D: Boolean"],
        answer: 2


    },
    {
        question: "Why Java and JavaScript have similar name?",
        options: ["A: Java Script is a stripped-down version of Java", "B: The syntax of JavaScript is loosely based on Java syntax", "C:They both support Object Oriented Programming", "D: None of the above"],
        answer:2


    },
    {
        question: "Which of the following are capable of JavaScript functions?",
        options: ["A: Returning multiple values", "B: Accepting parameters and returning values", "C: Accepting parameters", "D: all of the above"],
        answer:4


    },
    {
        question: "Which attribute is used to hold JavaScript version?",
        options: ["A: SCRIPT", "B: VERSION", "C: LANGUAGE", "D: VER"],
        answer:3


    },
    {
        question: "What type of image maps could be used with JavaScript?",
        options: ["A: Client-side image maps", "B: Server-side image maps", "C:  Both A and B", "D: Localhost image maps"],
        answer:1


    },
    {
        question: "JavaScript entities start with ____________ and end with _____________",
        options: ["A: Semicolon, colon", "B: Semicolon, Ampersand", "C: Ampersand, colon", "D: Ampersand, semicolon"],
        answer:4


    }


];

//function to go to next question and reset

function increase() {

    clear();
    count++;
    if(count>=20){
        document.getElementById("next-btn").disabled = true;
    }
    var questionDescription;
    answered = false;

    document.getElementById("questionNo").innerHTML = questionHeading + (count + 1);
    questionDescription = questions[count].question;
    document.getElementById("question").innerHTML = questionDescription;
    document.getElementsByClassName("options");
    questionDescription = document.getElementsByClassName("options");
    for (var i = 0; i < 4; i++) {

        questionDescription[i].innerHTML = questions[count].options[i];

    }

    checkAnswer();
}

// function adopting answred
function checkAnswer() {


    var iterate = document.getElementsByClassName("options");

    storeAnswer();

    for (var i = 0; i < iterate.length; i++) {

        iterate[i].addEventListener("click", function () {


            clear();
            this.style.color = "orange";
            answered = true;


        });

    }


}

//function to clear option checked before

function clear() {

    questionDescription = document.getElementsByClassName("options");
    for (var i = 0; i < 4; i++) {

        questionDescription[i].style.color = "unset";


    }


}

// function to store answer
function storeAnswer() {
    var indx1 = document.getElementById("1");
    var indx2 = document.getElementById("2");
    var indx3 = document.getElementById("3");
    var indx4 = document.getElementById("4");
    indx1.addEventListener("click", function () {
        answered[count] = 1;

    });
    indx2.addEventListener("click", function () {
        answered[count] = 2;

    });
    indx3.addEventListener("click", function () {
        answered[count] = 3;

    });
    indx4.addEventListener("click", function () {

        answered[count] = 4;

    });


}










