//* Trick to cancel transition on page load
window.addEventListener("load", () => {
	document.body.classList.remove("preload");
});

//* Animation on the input icon color when focused
function changeInputIconColor() {
	const inputParents = document.querySelectorAll("p[data-input='parent']"),
		inputs = document.querySelectorAll("p[data-input='parent'] input");

	inputs.forEach((input, index) => {
		input.addEventListener("focus", () => {
			inputParents[index].querySelector("span").classList.add("is-focus");
		});

		input.addEventListener("blur", () => {
			inputParents[index].querySelector("span").classList.remove("is-focus");
		});
	});
}

//* Toggle password visibility and change the icon
function toggleTypePasswordAndChangeIcon() {
	const inputsPassword = document.querySelectorAll(
			"input[data-input='password']",
		),
		iconPasswordParents = document.querySelectorAll(
			"input[data-input='password'] ~ span",
		),
		iconsCloseEye = document.querySelectorAll("svg[data-eye='close']"),
		iconsOpenEye = document.querySelectorAll("svg[data-eye='open']");

	iconPasswordParents.forEach((item, i) => {
		item.addEventListener("click", () => {
			if (inputsPassword[i].type === "password") {
				inputsPassword[i].type = "text";
				iconsCloseEye[i].classList.remove("is-visible");
				iconsOpenEye[i].classList.add("is-visible");
			} else {
				inputsPassword[i].type = "password";
				iconsCloseEye[i].classList.add("is-visible");
				iconsOpenEye[i].classList.remove("is-visible");
			}
		});
	});
}

//* Animation of text "Clients" when hovering over a button
function changeClientsTextColor() {
	const formSubmitButtons = document.querySelectorAll(".form button"),
		clientsText = document.querySelector(".auth__title span");

	formSubmitButtons.forEach(btn => {
		btn.addEventListener("mouseover", () => {
			clientsText.classList.add("is-hover");
		});

		btn.addEventListener("mouseout", () => {
			clientsText.classList.remove("is-hover");
		});
	});
}

//* Form card flipping animation
function animateCardFlip() {
	const front = document.querySelector(".form--login"),
		back = document.querySelector(".form--registration"),
		formLinks = document.querySelectorAll(".form__no-account a");

	formLinks.forEach(link => {
		link.addEventListener("click", () => {
			front.classList.toggle("flipped");
			back.classList.toggle("flipped");
		});
	});
}

changeInputIconColor();
toggleTypePasswordAndChangeIcon();
changeClientsTextColor();
animateCardFlip();
