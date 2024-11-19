function changeInputRangeValueAndColorFill() {
	const rangeInput = document.querySelector("#font-size"),
		inputValueSpan = document.querySelector(".settings__font-size-value");

	rangeInput.addEventListener("input", () => {
		inputValueSpan.textContent = rangeInput.value;
		changeInputRangeColorFill(rangeInput);
	});
}

function changeInputRangeColorFill(rangeInput) {
	const value =
		((rangeInput.value - rangeInput.min) / (rangeInput.max - rangeInput.min)) *
		100;
	rangeInput.style.background =
		"linear-gradient(to right, #902bf5 " +
		value +
		"%, transparent " +
		value +
		"%)";
}

function showSettingsBlock() {
	const showButton = document.querySelector(".footer__settings-btn"),
		settingsBlock = document.querySelector(".footer__settings");

	showButton.addEventListener("click", () => {
		if (!settingsBlock.classList.contains("is-open")) {
			settingsBlock.classList.add("is-open");
			settingsBlock.classList.add("fade-in");
			settingsBlock.classList.remove("fade-out");
		} else {
			settingsBlock.classList.remove("fade-in");
			settingsBlock.classList.add("fade-out");
			setTimeout(() => {
				settingsBlock.classList.remove("is-open");
			}, 300);
		}
	});
}

function showContactsBlock() {
	const showButton = document.querySelector(".footer__contacts-btn"),
		contactsBlock = document.querySelector(".footer__contacts.contacts");

	showButton.addEventListener("click", () => {
		if (!contactsBlock.classList.contains("is-open")) {
			contactsBlock.classList.add("is-open");
			contactsBlock.classList.add("fade-in");
			contactsBlock.classList.remove("fade-out");
		} else {
			contactsBlock.classList.remove("fade-in");
			contactsBlock.classList.add("fade-out");
			setTimeout(() => {
				contactsBlock.classList.remove("is-open");
			}, 300);
		}
	});
}

changeInputRangeValueAndColorFill();
changeInputRangeColorFill(document.querySelector("#font-size"));
showSettingsBlock();
showContactsBlock();
