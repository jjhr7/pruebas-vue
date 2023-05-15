$(() => {
	// Hamburger menu
	$("#hamburger").on("click", () => {
		$("#hamburger").toggleClass("is-active");

		// Setting the nav height depending on the window width
		var w = window.innerWidth;
		var h = "50px";

		if (w <= 740) {
			h = "100vh";
		}

		if ($("#hamburger").hasClass("is-active")) {
			$(".menu-lateral").css("display", "block");
			anime({
				targets: ".menu-lateral",
				height: h,
				duration: 400,
				easing: "easeOutQuad",
			});
			anime({
				targets: "#ml-div",
				opacity: "100%",
				duration: 300,
				delay: 250,
				easing: "easeOutQuad",
			});
		} else {
			anime({
				targets: ".menu-lateral",
				height: "0",
				duration: 400,
				delay: 100,
				easing: "easeInOutQuad",
				complete: () => {
					$(".menu-lateral").css("display", "none");
				},
			});
			anime({
				targets: "#ml-div",
				opacity: "0",
				duration: 400,
				easing: "easeOutQuad",
			});
		}
	});
});
