'use strict';

// (function($){
// 	$(document).ready(function() {
// 		// Code
		
// 	});
// })(jQuery);

const swiper = new Swiper('.swiper-container', {
	direction: 'horizontal',
	slidesPerView: 1,
	loop: true,
  
	pagination: {
		el: '.swiper-pagination',
		clickable: true
	},
  
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	}
});
