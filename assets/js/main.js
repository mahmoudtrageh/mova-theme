$(document).ready(function(){
    
    // header height 
    var h = window.innerHeight;
    $('.header .slider img').css('height', h);

    // type js 
    var typed = new Typed('.type', {
        strings: [
            'Designer',
            'Developer'
        ],
        typeSpeed: 140,
        backSpeed: 140,
        loop: true
    });

    // navbar a & go up button
    $(".list a, .go-up").click(function () {
        $("html,body").animate({
            scrollTop: $($(this).attr("href")).offset().top
        }, 1000);
        $('.side-menu').removeClass('open');
    });

    $(window).scroll(function(){
        if($(window).scrollTop() > 800) {
            $(".go-up").fadeIn(1000)
        } else {
            $('.go-up').fadeOut(1000)
        }
    });

    // Start owl carousel 
    $('.header .owl-carousel').owlCarousel({
        loop: true,
        items: 1,
        dots: true,
        autoplay: true,
        animateOut: 'fadeOut',
        smartSpeed: 450,
    })

    // Start side menu
    $("body").on('click', '.menu', function () {
        $('.side-menu').toggleClass('open')
    });

    $("body").on('click', '.fa-times', function () {
        $('.side-menu').removeClass('open')
    });

    // toggle nav 
    $(window).scroll(function(){
        if($(this).scrollTop() >= 30){
            $('.nav-left').fadeOut(500);
            $('.top-nav').fadeIn(500);
        } else {
            $('.nav-left').fadeIn(500);
            $('.top-nav').fadeOut(500);
        }
    });

    // counter up
    const counters = document.querySelectorAll('.about .num');
    const delay = 200;
    counters.forEach(counter => {
        const updateCount = () => {
            const target = counter.getAttribute('data-target');
            const count = +counter.innerText;
            const speed = target /delay;

            if(count < target){
                counter.innerText = Math.floor(count + speed);
                setTimeout(updateCount, 1);
            } 
            else{
                counter.innerText = target;
            }
        }
        updateCount();
    })

    // carousel brands
    $('.brands .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        responsive: {
            0: {
                items:2
            },
            768: {
                items:4
            },
            992: {
                items:6
            }
        }
    })

    // gallery isotope
    $('.grid').isotope({
        itemSelector: '.grid-item',
        layoutMode: 'fitRows'
    });
    $('.filter button').click(function(){
        $('.filter button').removeClass('active');
        $(this).addClass('active');
        var selector = $(this).attr('data-name');
        $('.grid').isotope({
            filter: selector
        });
        return false
    });

    // framework
    $('.btn').hover(function(){
        $('.btn i').removeClass('fa-smile');
        $('.btn i').addClass('fa-smile-wink');
    }, function(){
        $('.btn i').removeClass('fa-smile-wink');
        $('.btn i').addClass('fa-smile');
    });

    // search
	$('a[href="#search"]').on('click', function(event) {                    
		$('#search').addClass('open');
		$('#search > form > input[type="search"]').focus();
	});            
	$('#search, #search button.close').on('click keyup', function(event) {
		if (event.target == this || event.target.className == 'close' || event.keyCode == 27) {
			$(this).removeClass('open');
		}
    });     
    
    $('a[href="#search_top"]').on('click', function (event) {
        $('#search_top').addClass('open');
        $('#search_top > form > input[type="search"]').focus();
    });
    $('#search_top, #search_top button.close').on('click keyup', function (event) {
        if (event.target == this || event.target.className == 'close' || event.keyCode == 27) {
            $(this).removeClass('open');
        }
    });

    // arrow scroll down
    $(document).on('click', '.arrow a[href^="#"]', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 800);
    });
});