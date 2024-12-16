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
			noValue = input.validity.valueMissing;

		let errorMessage = "";

		if (short || long || noPattern) {
			errorMessage = `${input.title}`;
		} else if (noValue) {
			errorMessage = "Заполните поле";
		}

		return errorMessage;
	}

	function changeInvalidInputColor(message, input) {
		if (message) {
			input.classList.add("form__input--is-invalid");
		} else {
			input.classList.remove("form__input--is-invalid");
		}
	}

	function showErrorMessage(message, input) {
		let messageSpan = input.parentElement.querySelector(".form__input-error");
		messageSpan.textContent = message;
	}

	function validateOnBlur(input) {
		let iconSpan = input.parentElement.querySelector(".form__input-icon-span");

		input.addEventListener("blur", () => {
			showErrorMessage(checkValidityState(input), input);
			changeInvalidInputColor(checkValidityState(input), input);
			iconSpan.classList.remove("form__input-span--is-invalid-focus");

			input.addEventListener("focus", () => {
				if (checkValidityState(input)) {
					iconSpan.classList.add("form__input-span--is-invalid-focus");
				}
			});
		});
	}

	validateOnBlur(loginInput);
	validateOnBlur(passwordInput);
}

validateForm(document.querySelector(".form--login"), ".form--login");
