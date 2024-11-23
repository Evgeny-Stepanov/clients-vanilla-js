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

function showFooterBlock(button, block) {
	button.addEventListener("click", () => {
		if (!block.classList.contains("is-open")) {
			block.classList.add("is-open");
		}
	});
}

function hideFooterBlock(button, block) {
	document.body.addEventListener("click", evt => {
		if (!block.contains(evt.target) && !button.contains(evt.target)) {
			block.classList.remove("is-open");
		}
	});
}

changeInputRangeValueAndColorFill();
changeInputRangeColorFill(document.querySelector("#font-size"));

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
