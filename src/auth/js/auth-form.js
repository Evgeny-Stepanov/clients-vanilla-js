const forms = document.querySelectorAll("form");

forms.forEach(form => {
	form.addEventListener("submit", evt => {
		evt.preventDefault();
	});
});
