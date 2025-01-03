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

	function createErrorMessage(input) {
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

		if (input.type === "radio") {
			errorMessage = "Выберите кто вы";
		}

		return errorMessage;
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

	function changeInputColor(input) {
		input.addEventListener("focus", () => {
			if (!input.classList.contains("form__input--is-invalid")) {
				input.classList.add("form__input--is-focus");
				changeIconInputColor("", input);
			} else {
				changeIconInputColor(createErrorMessage(input), input);
			}
		});

		input.addEventListener("blur", () => {
			input.classList.remove("form__input--is-focus");
			validateOnBlur(input);
			removeIconInputColor(input);
		});
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
		} else if (!message && input.type === "radio") {
			document
				.querySelector(".form__fieldset-inputs-wrapper")
				.classList.remove("form__fieldset-inputs-wrapper--is-invalid");
		}
	}

	function changeIconInputColor(message, input) {
		if (message) {
			input.parentElement
				.querySelector(".form__input-icon-span")
				.classList.add("form__input-span--is-invalid-focus");
		} else {
			input.parentElement
				.querySelector(".form__input-icon-span")
				.classList.add("form__input-span--is-focus");
		}
	}

	function removeIconInputColor(input) {
		if (
			input.parentElement
				.querySelector(".form__input-icon-span")
				.classList.contains("form__input-span--is-focus")
		) {
			input.parentElement
				.querySelector(".form__input-icon-span")
				.classList.remove("form__input-span--is-focus");
		}

		if (
			input.parentElement
				.querySelector(".form__input-icon-span")
				.classList.contains("form__input-span--is-invalid-focus")
		) {
			input.parentElement
				.querySelector(".form__input-icon-span")
				.classList.remove("form__input-span--is-invalid-focus");
		}
	}

	function validateOnBlur(input) {
		showErrorMessage(createErrorMessage(input), input);
		changeInvalidInputColor(createErrorMessage(input), input);
	}

	function validateOnSubmit(button) {
		button.addEventListener("click", evt => {
			evt.preventDefault();

			let falseCheckedCount = 0;

			if (createErrorMessage(loginInput)) {
				showErrorMessage(createErrorMessage(loginInput), loginInput);
				changeInvalidInputColor(createErrorMessage(loginInput), loginInput);
			}

			if (createErrorMessage(passwordInput)) {
				showErrorMessage(createErrorMessage(passwordInput), passwordInput);
				changeInvalidInputColor(
					createErrorMessage(passwordInput),
					passwordInput,
				);
			}

			radioInputs.forEach(radioInput => {
				if (radioInput.checked === false) {
					falseCheckedCount++;
				}

				if (falseCheckedCount === 2) {
					showErrorMessage(createErrorMessage(radioInput), radioInput);
					changeInvalidInputColor(createErrorMessage(radioInput), radioInput);
				} else {
					showErrorMessage("", radioInput);
					changeInvalidInputColor("", radioInput);
				}
			});

			console.log("Данные отправлены!");
		});
	}

	changeInputColor(loginInput);
	changeInputColor(passwordInput);
	validateOnSubmit(submitButton);
}

validateForm(".form--login");
