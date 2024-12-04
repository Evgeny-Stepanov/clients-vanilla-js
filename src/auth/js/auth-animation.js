//* Trick to cancel transition on page load
window.addEventListener("load", () => {
	document.body.classList.remove("auth__preload");
});

function changeInputIconColor() {
	const inputsParents = document.querySelectorAll("p[data-input='parent']"),
		inputs = document.querySelectorAll("p[data-input='parent'] input");

	inputs.forEach((input, index) => {
		input.addEventListener("focus", () => {
			inputsParents[index]
				.querySelector("span")
				.classList.add("form__input-span--is-focus");
		});

		input.addEventListener("blur", () => {
			inputsParents[index]
				.querySelector("span")
				.classList.remove("form__input-span--is-focus");
		});
	});
}

function toggleInputTypeAndChangeIcon() {
	const passwordInputs = document.querySelectorAll(
			"input[data-input='password']",
		),
		passwordIconParents = document.querySelectorAll(
			"input[data-input='password'] ~ span",
		),
		closeEyeIcons = document.querySelectorAll("svg[data-eye='close']"),
		openEyeIcons = document.querySelectorAll("svg[data-eye='open']");

	passwordIconParents.forEach((parent, index) => {
		parent.addEventListener("click", () => {
			if (passwordInputs[index].type === "password") {
				passwordInputs[index].type = "text";
				changeInputPasswordIcon(
					closeEyeIcons[index],
					openEyeIcons[index],
					"form__input-svg--is-visible",
				);
			} else {
				passwordInputs[index].type = "password";
				changeInputPasswordIcon(
					closeEyeIcons[index],
					openEyeIcons[index],
					"form__input-svg--is-visible",
				);
			}
		});
	});
}

function changeInputPasswordIcon(closeEyeIcon, openEyeIcon, visibilityClass) {
	closeEyeIcon.classList.toggle(visibilityClass);
	openEyeIcon.classList.toggle(visibilityClass);
}

function changeClientsTextColor() {
	const formButtons = document.querySelectorAll(".form button"),
		clientsText = document.querySelector(".auth__title span");

	formButtons.forEach(button => {
		button.addEventListener("mouseover", () => {
			clientsText.classList.add("auth__title-span--is-hover");
		});

		button.addEventListener("mouseout", () => {
			clientsText.classList.remove("auth__title-span--is-hover");
		});
	});
}

function animateCardFlip() {
	const frontCard = document.querySelector(".form--login"),
		backCard = document.querySelector(".form--registration"),
		formLinks = document.querySelectorAll(".form__no-account a");

	formLinks.forEach(link => {
		link.addEventListener("click", () => {
			frontCard.classList.toggle("auth__form--is-flipped");
			backCard.classList.toggle("auth__form--is-flipped");
		});
	});
}

changeInputIconColor();
toggleInputTypeAndChangeIcon();
changeClientsTextColor();
animateCardFlip();
