//* Animation on the input icon color when focused

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

changeColorClientsText();
