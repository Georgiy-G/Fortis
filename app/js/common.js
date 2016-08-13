$(function() {

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	//navigation & ask-question( header)
	$(".menu__icon").click(function () {
		$(".navigation").css("left","0");
	});
	$(".navigation .icon-close").click(function () {
		$(".navigation").css("left","-100%");
	});

	$(".ask-question").click(function () {
		$(".ask-question-nav").css("right","0");
	});
	$(".ask-question-nav .icon-hidden").click(function () {
		$(".ask-question-nav").css("right","-100%");
	});
	//navigation & ask-question( header-mob)
	$(".menu__icon").click(function () {
		$(".navigation-mob").css("left","0");
	});
	$(".navigation-mob .icon-close").click(function () {
		$(".navigation-mob").css("left","-100%");
	});

	$(".icon-search").click(function () {
		$(".ask-question-nav-mob").css("right","0");
	});
	$(".ask-question-nav-mob .icon-close").click(function () {
		$(".ask-question-nav-mob").css("right","-100%");
	});
	//header-menu-clicked
	$(".cost__block").click(function () {
		var n = $(".cost__block").index($(this));
		$(".cost__block").removeClass("active-block");
		$(".cost__block").eq(n).addClass("active-block");
		
	});

	//slider for employees mobile
	$(".employees-slider_container").slick({
		dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
	})

});
