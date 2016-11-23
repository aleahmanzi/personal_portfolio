$(function() {
    // Smooth scroll
    $('.navpoint').on('click',function (e) {
        e.preventDefault();
        var target = this.hash,
        $target = $(target);

        $('html, body').animate({
    	scrollTop: $("#Hello").offset().top
		}, 1000);

		
    });

});