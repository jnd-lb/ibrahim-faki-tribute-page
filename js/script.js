/*
const rellax = new Rellax(".book-bg");

let bookTable = document.querySelector(".book-table");
setTimeout(() => {

    positionInfo = bookTable.getBoundingClientRect();
    var height = positionInfo.height;
    var width = positionInfo.width;
    bookTable.style.bottom = "0px";
}, 100);


var winScrollTop = 0;

$.fn.is_on_screen = function() {
    var win = $(window);
    var viewport = {
        top: win.scrollTop(),
        left: win.scrollLeft()
    };
    //viewport.right = viewport.left + win.width();
    viewport.bottom = viewport.top + win.height();
    
    var bounds = this.offset();
    //bounds.right = bounds.left + this.outerWidth();
    bounds.bottom = bounds.top + this.outerHeight();
    
    return (!(viewport.bottom < bounds.top || viewport.top > bounds.bottom));
};

function parallax() {
    var scrolled = $(window).scrollTop();
    $('.parallax-section').each(function() {
        
        if ($(this).is_on_screen()) {
            alert();
            var firstTop = $(this).offset().top;
            var $span = $(this).find(".book-table");
            var moveTop = (firstTop - winScrollTop) * 1.5 //speed;
            $span.css("transform", "translateY(" + -moveTop + "px)");
        }
    });
}

$(window).scroll(function(e) {
    winScrollTop = $(this).scrollTop();
    parallax();
});
$(window).scroll(function(e) {

    alert($(window).offset().top);
});
 */


$(document).ready(function() {


    var mySwiper = new Swiper('.swiper-container', {
        // Optional parameters
        loop: true,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    })
});