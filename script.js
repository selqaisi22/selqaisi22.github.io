function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// Back to top button functionality
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};

// Show or hide button based on scroll position
window.onscroll = function() {
    const backToTopButton = document.getElementById('backToTop');
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
};


// Swiper initialization code
document.addEventListener('DOMContentLoaded', function () {
    var swiper1 = new Swiper('.swiper-container', {
        loop: true, // Enable continuous loop mode
        autoplay: {
            delay: 3000, // Delay between transitions (in milliseconds)
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        // Enable grab cursor when hovering over the swiper
        grabCursor: true,
    });

    var swiper2 = new Swiper('.swiper-container2', {
        loop: true, // Enable continuous loop mode
        autoplay: {
            delay: 3000, // Delay between transitions (in milliseconds)
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination2',
            clickable: true,
        },
        grabCursor: true,
    });

    var swiper3 = new Swiper('.swiper-container3', {
        loop: true, // Enable continuous loop mode
        autoplay: {
            delay: 3000, // Delay between transitions (in milliseconds)
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination3',
            clickable: true,
        },
        // Enable grab cursor when hovering over the swiper
        grabCursor: true,
    });
});