class FormsValidation {
	selectors = {
		form: "form",
		errorsSpan: ".form__input-error",
	};

	errorMessages = {
		valueMissing: () => "Заполните это поле",
		patternMismatch: ({ title }) => title || "Данные не соответствуют формату",
		tooShort: ({ minLength }) =>
			`Слишком короткое значение, минимум символов - ${minLength}.`,
		tooLong: ({ maxLength }) =>
			`Слишком длинное значение, ограничение символов - ${maxLength}.`,
	};

	constructor() {
		this.bindEvents();
	}

	showErrors(input, errorMessages) {
		const errorsSpan = input.parentElement.querySelector(
			this.selectors.errorsSpan,
		);

		errorsSpan.innerHTML = errorMessages
			.map(message => `<span class="form__input-error">${message}</span>`)
			.join("");
	}

	validateInput(input) {
		const errors = input.validity,
			errorMessages = [];

		Object.entries(this.errorMessages).forEach(
			([errorType, getErrorMessage]) => {
				if (errors[errorType]) {
					errorMessages.push(getErrorMessage(input));
				}
			},
		);

		this.showErrors(input, errorMessages);

		const isValid = errorMessages.length === 0;

		return isValid;
	}

	onBlur(evt) {
		const { target } = evt,
			isFormInput = target.closest(this.selectors.form),
			isRequired = target.required;

		if (isFormInput && isRequired) {
			this.validateInput(target);
		}
	}

	onChange(evt) {
		const { target } = evt,
			isRequired = target.required,
			isRadioType = ["radio"].includes(target.type);

		if (isRadioType && isRequired) {
			this.validateInput(target);
		}
	}

	onSubmit(evt) {
		const isForm = evt.target.matches(this.selectors.form),
			requiredInputs = [...evt.target.elements].filter(
				({ required }) => required,
			);
		let isFormValid = true;
		let firstInvalidInput = null;

		if (!isForm) {
			return;
		}

		requiredInputs.forEach(input => {
			const isInputValid = this.validateInput(input);

			if (!isInputValid) {
				isFormValid = false;

				if (!firstInvalidInput) {
					firstInvalidInput = input;
				}
			}
		});

		if (!isFormValid) {
			evt.preventDefault();
			firstInvalidInput.focus();
		}
	}

	bindEvents() {
		document.addEventListener(
			"blur",
			evt => {
				this.onBlur(evt);
			},
			{ capture: true },
		);

		document.addEventListener("change", evt => this.onChange(evt));
		document.addEventListener("submit", evt => this.onSubmit(evt));
	}
}

new FormsValidation();
