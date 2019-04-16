$(document).ready(function() {
	// on-click functions
	$(".navbar-toggler").on("click", function() {
		rotateArrow();
	});

	$("#myBtn").on("click", function() {
		topFunction();
	});
});

window.onscroll = function() {
	scrollFunction();
};

function rotateArrow() {
	if (!$("#collapsingNavbarLg").hasClass("show")) {
		$(".fa-arrow-left").addClass("rotate");
		console.log("true");
	} else {
		$(".fa-arrow-left").removeClass("rotate");
		console.log("false");
	}
}

function scrollFunction() {
	if ($("body").scrollTop > 20 || document.documentElement.scrollTop > 20) {
		$("#myBtn").show();
	} else {
		$("#myBtn").hide();
	}
}

function topFunction() {
	$("html, body").animate({
		scrollTop: "0px"
	});
	$(document).animate({
		scrollTop: "0px"
	});
}
