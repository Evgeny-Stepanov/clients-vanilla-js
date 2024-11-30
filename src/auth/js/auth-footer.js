function changeFontSize() {
	const rangeInput = document.querySelector("#font-size"),
		inputValueSpan = document.querySelector(".settings__font-size-value");

	if (localStorage.getItem("font-size")) {
		rangeInput.value = localStorage.getItem("font-size");
		changeInputRange(
			rangeInput,
			inputValueSpan,
			localStorage.getItem("font-size"),
		);
	}

	rangeInput.addEventListener("input", () => {
		changeInputRange(rangeInput, inputValueSpan, rangeInput.value);

		if (rangeInput.value == 16) {
			localStorage.removeItem("font-size");
		} else {
			localStorage.setItem("font-size", rangeInput.value);
		}
	});
}

function changeInputRange(input, valueSpan, valueFontSize) {
	valueSpan.textContent = input.value;
	changeInputRangeColorFill(input);
	setFontSizeVariable(valueFontSize);
}

function setFontSizeVariable(value) {
	const root = document.querySelector(":root");
	root.style.setProperty("--font-size", `${value}px`);
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

function changeThemeColor() {
	const checkboxInput = document.querySelector("#theme-color");

	if (localStorage.getItem("theme-color")) {
		document.body.classList.add("white-theme");
		checkboxInput.checked = true;
	}

	checkboxInput.addEventListener("change", () => {
		if (checkboxInput.checked) {
			localStorage.setItem("theme-color", "white");
			document.body.classList.add("white-theme");
		} else {
			localStorage.removeItem("theme-color");
			document.body.classList.remove("white-theme");
		}
	});
}

function showFooterBlock(button, block) {
	button.addEventListener("click", () => {
		if (!block.classList.contains("footer--is-open")) {
			block.classList.add("footer--is-open");
		} else {
			block.classList.remove("footer--is-open");
		}
	});
}

function hideFooterBlock(button, block) {
	document.body.addEventListener("click", evt => {
		if (!block.contains(evt.target) && !button.contains(evt.target)) {
			block.classList.remove("footer--is-open");
		}
	});
}

changeFontSize();
changeInputRangeColorFill(document.querySelector("#font-size"));
changeThemeColor();
showFooterBlock(
	document.querySelector(".footer__settings-btn"),
	document.querySelector(".footer__settings"),
);

showFooterBlock(
	document.querySelector(".footer__contacts-btn"),
	document.querySelector(".footer__contacts.contacts"),
);
hideFooterBlock(
	document.querySelector(".footer__settings-btn"),
	document.querySelector(".footer__settings"),
);
hideFooterBlock(
	document.querySelector(".footer__contacts-btn"),
	document.querySelector(".footer__contacts.contacts"),
);
