// Declaring variables
var userOk=false;
var passOk=false;
var getName="";
var getPass="";
var checkName="";
var checkPass="";
var loginSuccess=false;
var wrong="Wrong User Name Or Password";
var chooseOption;
function toggleResetPswd(e){
    e.preventDefault();
    $('#logreg-forms .form-signin').toggle() // display:block or none
    $('#logreg-forms .form-reset').toggle() // display:block or none
}



$(()=>{
    // Login Register Form
    $('#logreg-forms #forgot_pswd').click(toggleResetPswd);
    $('#logreg-forms #cancel_reset').click(toggleResetPswd);
    $('#logreg-forms #btn-signup').click(toggleSignUp);
    $('#logreg-forms #cancel_signup').click(toggleSignUp);
})

// Database for users
var users=[
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
function   checkValidation()  {
    var i,j;
    var len=users.length;
    getName=document.getElementById("userName").value;
    getPass=document.getElementById("userPassword").value;


    for(i=0;i<len;i++){
       checkName=users[i].userName;
       checkPass=users[i].password;
       if((getName===checkName)  && (getPass===checkPass)){

              loginSuccess=true;
             return  true;

       }

    }
    if(loginSuccess===false && getName.length>0 && getPass.length>0){

        document.getElementById("wrong").innerHTML=wrong;
        return false;
    }

};



