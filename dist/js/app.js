
//------------Our team slider----------------//
$(function(){
	$("#owl-demo").owlCarousel({
		items: 1,
        nav: true,
        // navText: ['<div class="nav-slide"><i class="fa fa-chevron-left"></i></div>', '<div class="nav-slide"><i class="fa fa-chevron-right"></i></div>'],
        navText: false,
        dots: true,
        autoplay: true,
        autoplayTimeout:6000,
        autoplayHoverPause:true,
        loop: true,
        delay: 500

    });
    
    // $(".owl-prev").html('<ion-icon name="arrow-dropleft"></ion-icon>');
    // $(".owl-next").html('<ion-icon name="arrow-dropright"></ion-icon>');
});