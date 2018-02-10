$(document).ready(function() {
    $('.fa-bars').on('click',function() {
        $('nav').toggleClass('show');
    })
});

let scroll = new SmoothScroll('a[href*="#"]');