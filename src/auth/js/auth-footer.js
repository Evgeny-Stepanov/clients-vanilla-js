function changeInputRangeValue() {
	const input = document.querySelector("#fz"),
		span = document.querySelector(".settings__font-size-value");

	input.addEventListener("input", () => {
		span.textContent = input.value;
	});
}

function showSettingsBlock() {
	const btn = document.querySelector(".footer__settings-btn"),
		settingsBlock = document.querySelector(".footer__settings");

	btn.addEventListener("click", () => {
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

changeInputRangeValue();
showSettingsBlock();
