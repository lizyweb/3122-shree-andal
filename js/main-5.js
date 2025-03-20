document.addEventListener('DOMContentLoaded', () => {
    "use strict";
  
 // Header carousel
  $(".header-carousel").owlCarousel({
    animateOut: 'slideOutDown',
    autoplay: true,
    smartSpeed: 1500,
    items: 1,
    dots: false,
    loop: true,
    nav : true,
    navText : [
        '<i class="bi bi-chevron-left"></i>',
        '<i class="bi bi-chevron-right"></i>'
    ]
});
    
});