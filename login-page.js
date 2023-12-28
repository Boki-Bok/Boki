const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

// When the login button is clicked, the following code is executed
loginButton.addEventListener("click", (e) => {
    // Prevent the default submission of the form
    e.preventDefault();
    // Get the values input by the user in the form fields
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "itas" && password === "bokidomain") {
        // If the credentials are valid, show a welcome message and a pict
        document.write('<p style="font-size:25px;color:green;">Welcome '+username+' !</p>')
		document.write('<img src="apache.jpg" alt="APA_FORM" >')

	// set a small cookie session with expiry date 10 minutes in future
	function addMinutes(date, minutes) {
		date.setMinutes(date.getMinutes() + minutes);
		return date;
	}


	date = new Date();
	var sessionObject = {
		expiresAt: addMinutes(date, 10);,
		someOtherSessionData: {
			"username": "itas",
			"app" : "bokidomain"
		}
	}
	sessionStorage.setItem('sessionObject', JSON.stringify(sessionObject));

    } else {
        // Otherwise, make the login error message show (change its oppacity)
        loginErrorMsg.style.opacity = 1;
    }
})
