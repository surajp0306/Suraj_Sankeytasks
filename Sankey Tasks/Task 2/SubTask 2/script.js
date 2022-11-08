function login() {

	var email = document.loginform.email.value;
	var password = document.loginform.password.value;

	var message = "";

	if (email == "sankey901@solutions.com" && password == "mindset") {
		window.location.href = "home.html"
	}
	else if (email == "sankey901@solutions.com") {
		message = "Invalid password";
	}
	else {
		message = "Invalid username/email";
	}

	document.getElementById("message").innerHTML = message;
}