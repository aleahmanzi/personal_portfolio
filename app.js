$(function() {
    // Smooth scroll
    $('.navpoint').on('click',function (e) {
        e.preventDefault();
        var target = this.hash,
        $target = $(target);

        $('html, body').animate({
    	scrollTop: $("#about").offset().top
		}, 1000);

		
    });

});