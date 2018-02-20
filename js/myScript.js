$('.carousel').carousel({
    interval: 3000
});



//navbar

$(document).ready(function () {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > 300) {
            $(".navbar-area").css("background", "rgba(0,0,0, .8)");
        }

        else {
            $(".navbar-area").css("background", "");
        }
    });
});

//wow plugin
new WOW().init();

//back to top

