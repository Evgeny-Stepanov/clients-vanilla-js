//* Trick to cancel transition on page load
window.addEventListener("load", () => {
	document.body.classList.remove("preload");
});

//* Animation on the input icon color when focused
function changeInputIconColor() {
	const inputsParents = document.querySelectorAll("p[data-input='parent']"),
		inputs = document.querySelectorAll("p[data-input='parent'] input");

	inputs.forEach((input, index) => {
		input.addEventListener("focus", () => {
			inputsParents[index].querySelector("span").classList.add("is-focus");
		});

		input.addEventListener("blur", () => {
			inputsParents[index].querySelector("span").classList.remove("is-focus");
		});
	});
}

//* Toggle password visibility and change the icon
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
					"is-visible",
				);
			} else {
				passwordInputs[index].type = "password";
				changeInputPasswordIcon(
					closeEyeIcons[index],
					openEyeIcons[index],
					"is-visible",
				);
			}
		});
	});
}

function changeInputPasswordIcon(closeEyeIcon, openEyeIcon, visibilityClass) {
	closeEyeIcon.classList.toggle(visibilityClass);
	openEyeIcon.classList.toggle(visibilityClass);
}

//* Animation of text "Clients" when hovering over a button
function changeClientsTextColor() {
	const formButtons = document.querySelectorAll(".form button"),
		clientsText = document.querySelector(".auth__title span");

	formButtons.forEach(button => {
		button.addEventListener("mouseover", () => {
			clientsText.classList.add("is-hover");
		});

		button.addEventListener("mouseout", () => {
			clientsText.classList.remove("is-hover");
		});
	});
}

//* Form card flipping animation
function animateCardFlip() {
	const frontCard = document.querySelector(".form--login"),
		backCard = document.querySelector(".form--registration"),
		formLinks = document.querySelectorAll(".form__no-account a");

	formLinks.forEach(link => {
		link.addEventListener("click", () => {
			frontCard.classList.toggle("flipped");
			backCard.classList.toggle("flipped");
		});
	});
}

//* Open modal window

changeInputIconColor();
toggleInputTypeAndChangeIcon();
changeClientsTextColor();
animateCardFlip();
