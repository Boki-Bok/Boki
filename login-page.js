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
	const connected = 0;

	// set a small cookie session with expiry date 10 minutes in future
	function addMinutes(date, minutes) {
		date.setMinutes(date.getMinutes() + minutes);
		return date;
	}


    if (username === "itas" && password === "bokidomain") {
        
		date = new Date();
		var sessionObject = {
			expiresAt: addMinutes(date, 10),
			someOtherSessionData: {
				"username": "itas",
				"app" : "bokidomain"
			}
		}
		localStorage.setItem('sessionObject', JSON.stringify(sessionObject));
		//connected = 1;
		//window.location.href = 'connected.html';
		

    } else {
        // Otherwise, make the login error message show (change its oppacity)
        loginErrorMsg.style.opacity = 1;
    }
	

}
)
