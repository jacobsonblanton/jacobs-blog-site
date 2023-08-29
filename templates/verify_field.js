

function validate() {
    "use strict";

   //Declare variables
    var firstName,
        lastName,
        email,
        message,
        firstNameError = false,  //variables used to notify fields with errors
        lastNameError = false,
        emailError = false,
        messageError = false;
        
    
    //Fill varibles 
    firstName = document.getElementById('first-name-content').value;
    lastName = document.getElementById('last-name-content').value;
    email = document.getElementById('email-content').value;
    message = document.getElementById('message-content').value;

    
    //Clear all warning labels 
    document.getElementById("first-name-warning").innerHTML = "";
    document.getElementById("last-name-warning").innerHTML = "";
    document.getElementById("email-address-warning").innerHTML = "";
    document.getElementById("message-warning").innerHTML = "";
    
    
    //Data verification logic

    //UserName verification
    var lettersNumbers = /^[0-9a-zA-Z]+$/;
    var letters = /^[A-Za-z]+$/;
    var emailValues = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var phoneValues = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

    
    //firstName verification
    if (firstName === "") {
        document.getElementById("first-name-warning").innerHTML = " *Please provide a first name!";
        firstNameError = true;
    } else if (!firstName.match(letters)) {
        document.getElementById("first-name-warning").innerHTML = " *Field must be only characters!";
        firstNameError = true;
    }
    
    //lastName verification
    if (lastName === "") {
        document.getElementById("last-name-warning").innerHTML = " *Please provide a last name!";
        lastNameError = true;
    } else if (!lastName.match(letters)) {
        document.getElementById("last-name-warning").innerHTML = " *Field must be only characters!";
        lastNameError = true;
    }
    
    //email verification
    if (email === "") {
        document.getElementById("email-address-warning").innerHTML = " *Please provide an email!";
        emailError = true;
    } else if (emailValues.test(email) === false) {
        document.getElementById("email-address-warning").innerHTML = " *Please input a valid email!";
        emailError = true;
    }
    
    //message verification
    if (message === "") {
        document.getElementById("message-warning").innerHTML = " *Please provide a message!";
        messageError = true;
    }

    //Set cursor
    if (firstNameError === true) {
        document.getElementById('first-name-content').focus();
        return false;

    } else if (lastNameError === true) {
        document.getElementById('last-name-content').focus();
        return false;

    } else if (emailError === true) {
        document.getElementById('email-content').focus();
        return false;

    } else if (messageError === true) {
        document.getElementById('message-content').focus();
        return false;

    }
    
}

function GetPassedInParameters() {
    "use strict";

    //Store values passed from message form into variables
    var firstName = getUrlParameter('firstName');
    var lastName = getUrlParameter('lastName');
    var email = getUrlParameter('email');
    var message = getUrlParameter('message');
    var likeContent = getUrlParameter('likeContent');

    
    //Create cookies
    document.cookie = "firstName=" + firstName + ";";
    document.cookie = "lastName=" + lastName + ";";
    document.cookie = "email=" + email + ";";
    document.cookie = "message=" + message + ";";
    document.cookie = "likeContentr=" + likeContent + ";";

    GetPassedInParametersFromCookie();
    
    
}

//FUnction to parse data from urls
function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};


     
function GetPassedInParametersFromCookie() {
    
    //Get cookie data
    var x = document.cookie;

    //Display cookie data
    document.getElementById('node-id').innerHTML = x;
    
}