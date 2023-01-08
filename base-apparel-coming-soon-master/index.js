let error = document.querySelector(".error");
let errorMessage = document.querySelector(".error-message");
let validMessage = document.querySelector(".valid-message");
let empt = "";
console.log(validMessage);
submitBtn = document.querySelector("#submit");
function ValidateEmail(input) {
	let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if (input.value.match(mailformat)) {
		input.value = "";
		validMessage.style.display = "block";
		document.form.text.focus();
		while ((validMessage.style.display = "block")) {
			error.style.display = "none";
			errorMessage.style.display = "none";
			break;
		}
		return true;
	} else {
		error.style.display = "block";
		errorMessage.style.display = "block";
		validMessage.style.display = "none";
		document.form.text.focus();
		return false;
	}
}
