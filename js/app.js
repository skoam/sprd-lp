$(document).foundation();

var starFieldVideo = document.getElementById("star-field");
var starFieldVideoSource = document.getElementById("star-field-videosource");

var streamVideo = document.getElementById("stream-video");
var streamVideoSource = document.getElementById("stream-video-source");

starFieldActive = false;
streamActive = false;

var firstContainer = document.getElementById("first-container");
var menuBar = document.getElementById("menu-bar");

var update = setInterval(function () {
    if (window.scrollY > $(firstContainer).offset().top - 35) {
        menuBar.style.position = "fixed";
        menuBar.style.top = "0px";
        menuBar.style.zIndex = "10";

        firstContainer.style.marginTop = "40px";
    } else {
        menuBar.style.position = "relative";
        menuBar.style.top = "";
        menuBar.style.zIndex = "3";

        firstContainer.style.marginTop = "";
    }

    if ($(document).width() > 669) {
        if (!streamActive) {
            streamVideoSource.src = "video/stream_6_cut.mp4";
            streamVideo.load();
            streamActive = true;
        }
    } else {
        if (streamActive) {
            streamVideoSource.src = "video/black.mp4";
            streamVideo.load();
            streamActive = false;
        }
    }

    if ($(document).width() > 1023) {
        if (!starFieldActive) {
            starFieldVideoSource.src = "video/particles_15_cut.mp4";
            starFieldVideo.load();
            starFieldActive = true;
        }
    } else {
        if (starFieldActive) {
            starFieldVideoSource.src = "video/black.mp4";
            starFieldVideo.load();
            starFieldActive = false;
        }
    }
}, 1);

var menuButtonPlugin = document.getElementById("menubutton-plugin");
menuButtonPlugin.onclick = function (e) {
    $("html,body").animate({
        scrollTop : $(firstContainer).offset().top
    }, 250, 'swing');
    
    $("[id^=menubutton]").parent().removeClass("active");
    $(this).parent().addClass("active");

    e.preventDefault();
};

var service = document.getElementById("area-service");
/*var menuButtonService = document.getElementById("menubutton-service");
menuButtonService.onclick = function (e) {
    $("html,body").animate({
        scrollTop : $(service).offset().top - 80
    }, 200, 'swing');

    $("[id^=menubutton]").parent().removeClass("active");
    $(this).parent().addClass("active");
    e.preventDefault();
};*/

var menuButtonFeatures = document.getElementById("menubutton-features");
var features= document.getElementById("area-features");
menuButtonFeatures .onclick = function (e) {
    $("html,body").animate({
        scrollTop : $(service).offset().top - 80
    }, 200, 'swing');

    $("[id^=menubutton]").parent().removeClass("active");
    $(this).parent().addClass("active");
    e.preventDefault();
};

$("#slick-slider").slick({
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    adaptiveHeight: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: true,
    pauseOnDotsHover: true
});
