(function ($) {
    "use strict";
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });

    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });

    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        center: true,
        autoplay: true,
        smartSpeed: 2000,
        dots: true,
        loop: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:2
            }
        }
    });
    
})(jQuery);





// target the anchor links and div container
const links = document.querySelectorAll('.collage a');
const overlay = document.querySelector('.collage-viewer');

// following a click event on the links show the overlay
function showOverlay(e) {
    e.preventDefault();
    e.stopPropagation()
  // use the src & alt attribute of the selected image in the overlay
  const src = this.querySelector('img').getAttribute('src');
  const alt = this.querySelector('img').getAttribute('alt');
  overlay.querySelector('img').setAttribute('src', src);
  overlay.querySelector('img').setAttribute('alt', alt);

  overlay.classList.add('overlay');

  // to remove the anchor links from reach set the tabindex attribute to a negative value
  links.forEach(link => link.setAttribute('tabindex', -1));
}

links.forEach(link => link.addEventListener('click', showOverlay));

// following a click event on the overlay, consider if the click was registered on the button
// if so hide the overlay back
function hideOverlay(e) {
  if (e.target.tagName === 'BUTTON') {
    overlay.classList.remove('overlay');
    // restore the default value of the anchor links
    links.forEach(link => link.setAttribute('tabindex', 0));
  }
}

overlay.addEventListener('click', hideOverlay);

function enviarWhatsApp(mensaje) {
     
    const telefono = "+51956386338"; // Tu número con código de país

    const mensajeTexto = `Hola, vengo desde la web de Clinica Automotriz MV y me gustaria agendar una cita. ${mensaje?mensaje:''}`;
    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensajeTexto)}`;

    window.open(url, '_blank');
}