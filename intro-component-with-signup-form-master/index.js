let id = (id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes);
let firstName = id("firstname"),
	lastName = id("lastname"),
	mail = id("email"),
	passWord = id("password"),
	form = id("signup");
const checkfirstName = () => {
	let valid = false;

	const min = 3,
		max = 25;

	const firstname = firstName.value.trim();

	if (!isRequired(firstname)) {
		showError(firstName, "[Field Name] cannot be empty");
	} else if (!isBetween(firstname.length, min, max)) {
		showError(
			firstName,
			`Username must be between ${min} and ${max} characters.`
		);
	} else {
		showSuccess(firstName);
		valid = true;
	}
	return valid;
};
const checklastName = () => {
	let valid = false;

	const min = 3,
		max = 25;

	const lastname = lastName.value.trim();

	if (!isRequired(lastname)) {
		showError(lastName, "[Field Name] cannot be empty.");
	} else if (!isBetween(lastname.length, min, max)) {
		showError(
			lastName,
			`Username must be between ${min} and ${max} characters.`
		);
	} else {
		showSuccess(lastName);
		valid = true;
	}
	return valid;
};

const checkEmail = () => {
	let valid = false;
	const email = mail.value.trim();
	if (!isRequired(email)) {
		showError(mail, "[Field Name] cannot be empty");
	} else if (!isEmailValid(email)) {
		showError(mail, "Look like the email is no formatted correctly.");
	} else {
		showSuccess(mail);
		valid = true;
	}
	return valid;
};

const checkPassword = () => {
	let valid = false;

	const password = passWord.value.trim();

	if (!isRequired(password)) {
		showError(passWord, "[Field Name] cannot be empty");
	} else if (!isPasswordSecure(password)) {
		showError(passWord, "password is not secure");
	} else {
		showSuccess(passWord);
		valid = true;
	}

	return valid;
};

const isEmailValid = (email) => {
	const re =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(email);
};

const isPasswordSecure = (password) => {
	const re = new RegExp(
		"^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
	);
	return re.test(password);
};

const isRequired = (value) => (value === "" ? false : true);
const isBetween = (length, min, max) =>
	length < min || length > max ? false : true;

const showError = (input, message) => {
	// get the form-field element
	const formField = input.parentElement;
	// add the error class
	formField.classList.remove("success");
	console.log(formField)
	formField.classList.add("error");
	console.log(formField)
	// show the error message
	const error = formField.querySelector("small");
	error.textContent = message;
};

const showSuccess = (input) => {
	// get the form-field element
	const formField = input.parentElement;

	// remove the error class
	formField.classList.remove("error");
	formField.classList.add("success");

	// hide the error message
	const error = formField.querySelector("small");
	error.textContent = "";
};

form.addEventListener("submit", function (e) {
	// prevent the form from submitting
	e.preventDefault();

	// validate fields
	let isFirstnameValid = checkfirstName(),
		isLastnameValid = checklastName(),
		isEmailValid = checkEmail(),
		isPasswordValid = checkPassword();

	let isFormValid =
		isFirstnameValid &&
		isLastnameValid &&
		isEmailValid &&
		isPasswordValid;

	// submit to the server if the form is valid
	if (isFormValid) {
	}
});

const debounce = (fn, delay = 500) => {
	let timeoutId;
	return (...args) => {
		// cancel the previous timer
		if (timeoutId) {
			clearTimeout(timeoutId);
		}
		// setup a new timer
		timeoutId = setTimeout(() => {
			fn.apply(null, args);
		}, delay);
	};
};

form.addEventListener(
	"input",
	debounce(function (e) {
		switch (e.target.id) {
			case "firstname":
				checkfirstName();
				break;
			case "lastname":
				checklastName();
				break;
			case "email":
				checkEmail();
				break;
			case "password":
				checkPassword();
				break;
		}
	})
);
