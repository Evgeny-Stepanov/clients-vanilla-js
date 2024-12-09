function validateForm(form, formSelector) {
	const loginInput = document.querySelector(".form__input-name input"),
		passwordInput = document.querySelector(".form__input-password input"),
		radioInputs = document.querySelectorAll(
			`${formSelector} fieldset input[type='radio']`,
		),
		submitButton = document.querySelector(
			`${formSelector} button[type='submit']`,
		);

	function checkValidityState(input) {
		const short = input.validity.tooShort,
			long = input.validity.tooLong,
			noPattern = input.validity.patternMismatch,
			noValue = input.validity.valueMissing,
			errorMessages = [];

		if (short || long || noPattern) {
			errorMessages.push(`${input.title}`);
		} else if (noValue) {
			errorMessages.push("Заполните это поле");
		}

		return errorMessages;
	}

	function validateOnBlur(input) {
		input.addEventListener("blur", () => {
			checkValidityState(input);
			console.log(input.required);
		});
	}

	validateOnBlur(loginInput);
	validateOnBlur(passwordInput);
}

validateForm(document.querySelector(".form--login"), ".form--login");
