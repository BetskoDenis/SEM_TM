$(document).ready(function () {
    $('.left_block_wrapper').owlCarousel({
        items: 1,
        loop: true,
        dots: true,
        autoplay: true,
        smartSpeed: 1300

    });
$('.button_burger').on('click', function () {
    var burgerButton = $('.button_burger span:first-child'),
        burgerSpan = $('.button_burger span');
        $('.button_burger').toggleClass('click')
    if($('.button_burger').hasClass('click')){
        $('.menu_right_block.mobile').css('right','0')
        $('.button_burger').css('background-color','rgba(22,28,36,0)')
        burgerSpan.css('transform', 'translateX(-200px)')
        //$('.button_burger span:nth-child(4)').css('transform', 'translateX(-50px)')
        //$('.button_burger span:nth-child(5)').css('transform', 'translateX(-50px)')
        $('.button_burger span:nth-child(4)').css('transform', 'rotate(45deg)')
        $('.button_burger span:nth-child(5)').css('transform', 'rotate(-45deg)')
    }else{
        burgerSpan.css('transform', 'translateX(0)')
        $('.menu_right_block.mobile').css('right','-500px')
        $('.button_burger').css('background-color','rgba(22,28,36,1)')
    }
    })
    $('.certificate_block').owlCarousel({
        items: 4,
        loop: true,
        dots: false,
        nav: true,
        smartSpeed: 1300,
        responsive:{
            0:{
                items:1
            },
            450:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    })
})