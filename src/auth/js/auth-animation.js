//* Animation on the input icon color when focused
function changeInputIconColor() {
	const inputParents = document.querySelectorAll("p[data-login]"),
		inputs = document.querySelectorAll("p[data-login] input");

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
	const inputPassword = document.querySelector("input#password"),
		iconPasswordParent = document.querySelector("input#password ~ span"),
		iconCloseEye = document.querySelector("svg[data-eye='close']"),
		iconOpenEye = document.querySelector("svg[data-eye='open']");

	iconPasswordParent.addEventListener("click", () => {
		if (inputPassword.type === "password") {
			inputPassword.type = "text";
			iconCloseEye.classList.remove("is-visible");
			iconOpenEye.classList.add("is-visible");
		} else {
			inputPassword.type = "password";
			iconCloseEye.classList.add("is-visible");
			iconOpenEye.classList.remove("is-visible");
		}
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
