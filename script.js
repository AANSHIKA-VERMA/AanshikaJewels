// Scroll animation
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.testimonials-slider', {
        // How many slides to show at once
        slidesPerView: 1,
        // Space between slides
        spaceBetween: 30,
        // Loop slides infinitely
        loop: true,
        
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // Pagination dots
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        // Responsive breakpoints
        breakpoints: {
            // when window width is >= 768px
            768: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            // when window width is >= 1024px
            1024: {
                slidesPerView: 3,
                spaceBetween: 40
            }
        }
    });
});

// Dark mode toggle

  // const toggleBtn = document.getElementById('mode-toggle');
  // toggleBtn.addEventListener('click', () => {
  //   document.body.classList.toggle('dark-mode');
  //   // Optionally switch icon
  //   toggleBtn.innerHTML = document.body.classList.contains('dark-mode')
  //     ? '<i class="fas fa-sun"></i>'
  //     : '<i class="fas fa-moon"></i>';
  // });


  document.addEventListener('DOMContentLoaded', () => {

    const hamburgerButton = document.getElementById('hamburger-menu');
    const navLinksContainer = document.getElementById('nav-links-container');

    // 1. Toggle menu on hamburger click
    hamburgerButton.addEventListener('click', (event) => {
        // Stop the click from bubbling up to the document
        event.stopPropagation(); 
        navLinksContainer.classList.toggle('active');
    });

    // 2. Close menu when a link or icon inside it is clicked
    navLinksContainer.addEventListener('click', () => {
        navLinksContainer.classList.remove('active');
    });

    // 3. Close menu when clicking anywhere else on the page
    document.addEventListener('click', (event) => {
        // Check if the menu is open and the click was outside the menu
        const isClickInsideMenu = navLinksContainer.contains(event.target);
        const isMenuOpen = navLinksContainer.classList.contains('active');

        if (isMenuOpen && !isClickInsideMenu) {
            navLinksContainer.classList.remove('active');
        }
    });
});

