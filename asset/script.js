// script.js
document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navUl = document.querySelector('nav ul');

    menuToggle.addEventListener('click', () => {
        navUl.classList.toggle('active');
    });

    // 2. Image Slider (Homepage)
    const slides = document.querySelector('.slides');
    const slideItems = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    
    // Check if slider exists on this page
    if (slides) {
        let index = 0;
        const totalSlides = slideItems.length;

        function showSlide(i) {
            // Handle overflow
            if (i >= totalSlides) index = 0;
            else if (i < 0) index = totalSlides - 1;
            else index = i;

            // Calculate shift percentage
            const shiftPercentage = -(index * 100);
            slides.style.transform = `translateX(${shiftPercentage / totalSlides}%)`;
        }

        // Event Listeners
        prevBtn.addEventListener('click', () => showSlide(index - 1));
        nextBtn.addEventListener('click', () => showSlide(index + 1));

        // Optional: Auto-slide every 5 seconds
        // setInterval(() => showSlide(index + 1), 5000);
    }
});