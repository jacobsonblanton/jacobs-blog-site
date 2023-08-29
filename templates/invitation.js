//function created to replace the content
function replaceContent() {
	//declaring the variables
	var myRecipientName;
	var hostName;
	var myRecipientEmail;
	
	//setting the variable to the input field's id named recipientNameInput's value
	//setting the variable to the input field's id named hostsNameInput's value
	myRecipientName = document.getElementById("recipientNameInput").value;
	hostName = document.getElementById("hostNameInput").value;
	myRecipientEmail = document.getElementById("recipientEmailInput").value;

	console.log('Variable myRecipientName: ' + myRecipientName);
	console.log('Variable hostName: ' + hostName);
	console.log('Variable myRecipientEmail: ' + myRecipientEmail);
	
	//setting the HTML code in the span id recipientNamePlaceholder and hostNamePlaceholder with the variable 
	document.getElementById("recipientNamePlaceholder").innerHTML = myRecipientName;
	document.getElementById("hostNamePlaceholder").innerHTML = hostName;
	document.getElementById("recipientEmailPlaceholder").innerHTML = myRecipientEmail;

} 