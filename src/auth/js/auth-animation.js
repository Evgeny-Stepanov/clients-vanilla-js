//* Toggle password visibility and change the icon
function togglePassword() {
	const passInput = document.querySelector("input#password"),
		svgIconParent = document.querySelector("input#password ~ span"),
		svgIcon = svgIconParent.querySelector("svg");

	svgIconParent.addEventListener("click", () => {
		//! Don't work, but worked innerHTML
		let newSvgIcon = `
			<?xml version="1.0" encoding="utf-8"?>
			<svg width="30px" height="30px" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path fill-rule="evenodd" clip-rule="evenodd" d="M0 8L3.07945 4.30466C4.29638 2.84434 6.09909 2 8 2C9.90091 2 11.7036 2.84434 12.9206 4.30466L16 8L12.9206 11.6953C11.7036 13.1557 9.90091 14 8 14C6.09909 14 4.29638 13.1557 3.07945 11.6953L0 8ZM8 11C9.65685 11 11 9.65685 11 8C11 6.34315 9.65685 5 8 5C6.34315 5 5 6.34315 5 8C5 9.65685 6.34315 11 8 11Z" fill="#000000"/>
			</svg>
		`;

		if (passInput.type === "password") {
			passInput.type = "text";
			svgIconParent.insertAdjacentHTML("afterbegin", newSvgIcon);
			svgIcon.style.display = "none";
		} else if (passInput.type === "text") {
			passInput.type = "password";
			svgIcon.style.display = "inline";
		}
	});
}

//* Animation on the input icon color when focused
function changeColorInputSvg() {
	const inputs = document.querySelectorAll("input[data-focus]"),
		svgIcons = document.querySelectorAll("input[data-focus] ~ span svg");

	inputs.forEach((input, i) => {
		input.addEventListener("focus", () => {
			svgIcons[i].classList.add("is-focus");
		});

		input.addEventListener("blur", () => {
			svgIcons[i].classList.remove("is-focus");
		});
	});
}

//* Animation of text "Clients" when hovering over a button
function changeColorClientsText() {
	const formButton = document.querySelectorAll(".form button"),
		clientsText = document.querySelector(".auth__title span");

	formButton.forEach(btn => {
		btn.addEventListener("mouseover", () => {
			clientsText.classList.add("is-hover");
		});
	});

	formButton.forEach(btn => {
		btn.addEventListener("mouseout", () => {
			clientsText.classList.remove("is-hover");
		});
	});
}

togglePassword();
changeColorInputSvg();
changeColorClientsText();
