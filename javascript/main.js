$(document).ready(function(){

	///Checking if the user scroll down the page
	$(window).scroll(function(){

		if($(document).scrollTop() > 10) {

			$('nav').addClass('nonTransparent');

		} else {

			$('nav').removeClass('nonTransparent');
			
		}
	});

	///Removing and adding the active class based on the current page
	// $("#navigationList li a").click(function(){

	// 	$(this).siblings().removeClass('active');
	// 	$(this).addClass('active');
	// });
});