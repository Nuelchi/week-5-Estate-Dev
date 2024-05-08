$(document).ready(function() {
	$(".accordion_title").on("click", function(e) {

		e.preventDefault();
		var $this = $(this);

		if (!$this.hasClass("accordion-active")) {
			$(".accordion_content").slideUp(400);
			$(".accordion_title").removeClass("accordion-active");
			$('.accordion_arrow').removeClass('accordion_rotate');
		}

		$this.toggleClass("accordion-active");
		$this.next().slideToggle();
		$('.accordion_arrow',this).toggleClass('accordion_rotate');
	});

	
		$('.media_hamburger_wrapper').click(function() {
			$('nav.main_nav').toggleClass('sidebar_open');
		});
	
	
});