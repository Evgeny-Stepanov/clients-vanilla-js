function validateForm(formSelector) {
	const loginInput = document.querySelector(
			`${formSelector} .form__input-name input`,
		),
		passwordInput = document.querySelector(
			`${formSelector} .form__input-password input`,
		),
		radioInputs = document.querySelectorAll(
			`${formSelector} fieldset input[type="radio"]`,
		),
		submitButton = document.querySelector(
			`${formSelector} button[type="submit"]`,
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

		if (input.type === "radio" && !input.checked) {
			errorMessage = "Выберите кто вы";
		}

		return errorMessage;
	}

	function changeInvalidInputColor(message, input) {
		if (message && input.type !== "radio") {
			input.classList.add("form__input--is-invalid");
		} else {
			input.classList.remove("form__input--is-invalid");
		}

		if (message && input.type === "radio") {
			document
				.querySelector(".form__fieldset-inputs-wrapper")
				.classList.add("form__fieldset-inputs-wrapper--is-invalid");
		} else {
			input.classList.remove("form__fieldset-inputs-wrapper--is-invalid");
		}
	}

	function showErrorMessage(message, input) {
		let messageSpan;

		if (input.type === "radio") {
			messageSpan = document.querySelector("fieldset .form__input-error");
		} else {
			messageSpan = input.parentElement.querySelector(".form__input-error");
		}

		messageSpan.textContent = message;
	}

	function validateOnBlur(input) {
		input.addEventListener("blur", () => {
			showErrorMessage(checkValidityState(input), input);
			changeInvalidInputColor(checkValidityState(input), input);
		});
	}

	function validateOnSubmit(button) {
		button.addEventListener("click", evt => {
			evt.preventDefault();

			if (checkValidityState(loginInput)) {
				showErrorMessage(checkValidityState(loginInput), loginInput);
				changeInvalidInputColor(checkValidityState(loginInput), loginInput);
			}

			if (checkValidityState(passwordInput)) {
				showErrorMessage(checkValidityState(passwordInput), passwordInput);
				changeInvalidInputColor(
					checkValidityState(passwordInput),
					passwordInput,
				);
			}

			radioInputs.forEach(radioInput => {
				if (checkValidityState(radioInput)) {
					showErrorMessage(checkValidityState(radioInput), radioInput);
					changeInvalidInputColor(checkValidityState(radioInput), radioInput);
				}
			});

			console.log("Данные отправлены!");
		});
	}

	validateOnBlur(loginInput);
	validateOnBlur(passwordInput);
	validateOnSubmit(submitButton);

	
}

validateForm(".form--login");
