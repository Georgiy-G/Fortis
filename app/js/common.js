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
		$(".cost__block").removeClass("active-block ");
		$(".cost__block").eq(n).addClass("active-block");	
	});

	//about-insurance
	$(".description-blocks").first().addClass("active-description");
	$(".about-name ul li a").first().addClass("active-list");
	$(".about-name ul li a").click(function (e) {
		e.preventDefault();
		var n = $(".about-name ul li a").index($(this));
		$(".description-blocks").removeClass("active-description");
		$(".about-name ul li a").removeClass("active-list");
		$(".about-name ul li a").eq(n).addClass("active-list");
		$(".description-blocks").removeClass("active-description animated fadeIn");
		$(".description-blocks").eq(n).addClass("active-description animated fadeIn");	
	});

	//slider for employees mobile
	$(".employees-slider_container").slick({
		dots: true,
		infinite: true,
		arrows: false,
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 1,
	});
	//slider for about-insurance
	$(".about__slider").slick({
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		arrows: true,
		prevArrow: '<div class="slick-arrow slick-prev"></div>',
		nextArrow: '<div class="slick-arrow slick-next"></div>',
		slidesToScroll: 1,
	});

});
