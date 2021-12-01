const toggles = document.querySelectorAll(".faq__toggle");

toggles.forEach((el) => {
	el.addEventListener("click", () => {
		el.parentNode.classList.toggle("active");
	});
});
