// Hamburger Menu

function openMenu(){
    document.getElementById('ham-menu-container').style.width = "100%";
}
function closeMenu(){
    document.getElementById('ham-menu-container').style.width = "0%";
}

// MixItup 
var mixer = mixitup('.work-grid');

// Smooth Scroll
$('.ham-menu-container-items ul li a, .scroll-down a').on('click', function(){
    $('html, body').animate({
        scrollTop: $($.attr(this,'href')).offset().top
    }, 1000);
    return false;
});

// Wow

new WOW().init();