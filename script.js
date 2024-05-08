// ---------toggle icon navbar----//

document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('.carousel');
    const carouselItems = document.querySelectorAll('.carousel-item');
    const totalItems = carouselItems.length;
    let currentIndex = 0;

    function showSlide(index) {
        carousel.style.transform = `translateX(-${index * 100}%)`;
    }

    // Function to handle next slide
    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalItems;
        showSlide(currentIndex);
    }

    // Function to handle previous slide
    function prevSlide() {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        showSlide(currentIndex);
    }

    // Auto-play the carousel
    setInterval(nextSlide, 3000); // Change slide every 3 seconds

    // Optional: Add event listeners for navigation buttons
    const prevButton = document.querySelector('.prev-btn');
    const nextButton = document.querySelector('.next-btn');

    prevButton.addEventListener('click', prevSlide);
    nextButton.addEventListener('click', nextSlide);
});
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

document.addEventListener('DOMContentLoaded', function () {
    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('header nav a');

    window.addEventListener('scroll', () => {
        let scrollY = window.scrollY;

        sections.forEach(section => {
            let sectionTop = section.offsetTop - 150;
            let sectionHeight = section.offsetHeight;
            let sectionId = section.getAttribute('id');

            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                });

                // Use attribute selector with quotes
                document.querySelector(`header nav a[href="#${sectionId}"]`).classList.add('active');
            }
        });

        // --------------toggle sticky header-----------//
        let header = document.querySelector('header');
        header.classList.toggle('sticky', scrollY > 100);

        // --------------remove toggle icon and navbar-----------//
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    });
});

// function animateSlideInLeft(elements) {
//     elements.forEach(element => {
//         element.classList.add('animate-slideInLeft');
//     });
// }

// // Animate elements in the experience section using slideInLeft animation
// const experienceElements = document.querySelectorAll('.experience-form');
// animateSlideInLeft(experienceElements);

// // Animate elements in the project section using slideInLeft animation
// const projectElements = document.querySelectorAll('.portfolio');
// animateSlideInLeft(projectElements);
// scroll reaveal//

ScrollReveal ({
    // reset:true,
    distance:'80px',
    duration:2000,
    delay:200
});

ScrollReveal().reveal('.home-content , .heading' ,{origin: 'top'});
ScrollReveal().reveal('.home-img, .Skill-container ,.Project-box,Contact form',{origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img' ,{origin: 'left'});
ScrollReveal().reveal('.home-content p, .about-content' ,{origin: 'right'});
ScrollReveal().reveal('.portfolio-box' ,{origin: 'right'});
ScrollReveal().reveal('.experience-form' ,{origin: 'left'});
ScrollReveal().reveal('.skills-container' ,{origin: 'lright'});

