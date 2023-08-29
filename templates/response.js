window.onload = init;
function init() {

    var submit = document.getElementById("submit") 

    /*Returns the html elements with id="fname", and id="lname"*/
    submit.onclick = function(){
	    var fname = document.getElementById("first-name-content").value;
        var lname = document.getElementById("last-name-content").value;

        /*Outputted to the page*/
        document.getElementById("fname-output").innerText = fname;
        document.getElementById("lname-output").innerText = lname;
    }

}