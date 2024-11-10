function changeInputRangeValue() {
	const input = document.querySelector("#fz"),
		span = document.querySelector(".settings__input-range-value");

	input.addEventListener("input", () => {
		span.textContent = `${input.value} px`;
	});
}

changeInputRangeValue();
