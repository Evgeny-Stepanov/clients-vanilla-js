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

function openModalContacts() {
	const openButton = document.querySelector(".footer__contacts-btn"),
		modalDialog = document.querySelector(".modal-contacts");

	openButton.addEventListener("click", () => {
		modalDialog.showModal();
		document.body.classList.add("overflow-hidden");
	});
}

function closeModalContacts() {
	const modalDialog = document.querySelector(".modal-contacts"),
		closeButton = document.querySelector(".modal-contacts__close-btn");

	modalDialog.addEventListener("click", evt => {
		const isClickOnBackdrop = evt.target === evt.currentTarget,
			isClickOnCloseButton = evt.target === closeButton;

		if (isClickOnBackdrop || isClickOnCloseButton) {
			modalDialog.close();
		}
	});
}

changeInputRangeValueAndColorFill();
changeInputRangeColorFill(document.querySelector("#font-size"));
showSettingsBlock();
openModalContacts();
closeModalContacts();

//close()
