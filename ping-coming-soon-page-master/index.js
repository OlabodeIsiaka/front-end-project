let errorMessage = document.querySelector(".error-message");
let emptyMessage = document.querySelector(".empty-message");
let validMessage = document.querySelector(".valid-message");
let submitBtn = document.querySelector(".submit");
let inputBox = document.querySelector(".input");
console.log(inputBox);
let screenwidth = visualViewport.width;
function validateEmail(input) {
	let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if (input.value.match(mailformat)) {
		input.value = "";
		validMessage.style.display = "block";
		document.form1.text1.focus();
		while ((validMessage.style.display = "block")) {
			errorMessage.style.display = "none";
			emptyMessage.style.display = "none";
			break;
		}
		
	} else if (input.value === "") {
		emptyMessage.style.display = "block";
		errorMessage.style.display = "none";
		input.value = "example@email.com";
		while (screenwidth <= 1440) {
			submitBtn.style.margin = "3em";
			break;
		}
				inputBox.style.border = "1px solid hsl(354, 100%, 66%)";
		document.form1.text1.focus();
	} else {
		inputBox.style.border = "1px solid hsl(354, 100%, 66%)";
		input.value = "example@email.com";
		while (screenwidth <= 1440) {
			submitBtn.style.margin = "3em";
			break;
		}

		emptyMessage.style.display = "none";
		errorMessage.style.display = "block";
		document.form1.text1.focus();
		return false;
	}
}
