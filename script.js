// Carousel functionality
let currentIndex = 0;
const images = document.querySelectorAll('.image-container img');
const totalImages = images.length;

function updateCarousel() {
    const imageWidth = document.querySelector('.carousel').offsetWidth;
    document.querySelector('.image-container').style.transform = `translateX(-${currentIndex * imageWidth}px)`;
}

function showNextImage() {
    currentIndex = (currentIndex + 1) % totalImages;
    updateCarousel();
}

function showPreviousImage() {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    updateCarousel();
}

document.querySelector('.arrow.right').addEventListener('click', showNextImage);
document.querySelector('.arrow.left').addEventListener('click', showPreviousImage);

setInterval(showNextImage, 5000);  // Change image every 5 seconds

// Ensure correct positioning on window resize
window.addEventListener('resize', updateCarousel);

// Function to animate number change
function animateNumbers() {
    const visitors = document.getElementById('visitors');
    const projects = document.getElementById('projects');
    const clients = document.getElementById('clients');

    // Update these numbers with your actual values
    let visitorCount = 1234;
    let projectCount = 56;
    let clientCount = 789;

    // Function to animate numbers
    const animateNumber = (element, start, end, duration) => {
        let range = end - start;
        let stepTime = Math.abs(Math.floor(duration / range));
        let current = start;
        let timer = setInterval(() => {
            current += 1;
            element.textContent = current;
            if (current === end) {
                clearInterval(timer);
            }
        }, stepTime);
    };

    // Call the animation for each stat
    animateNumber(visitors, 0, visitorCount, 2000);
    animateNumber(projects, 0, projectCount, 2000);
    animateNumber(clients, 0, clientCount, 2000);
}

// Call the function on page load
window.onload = animateNumbers;

// تحديد أيقونة الهامبرغر والقائمة المنسدلة
const hamburgerMenu = document.querySelector('.hamburger-menu');
const dropdownMenu = document.querySelector('.dropdown-menu');

// إضافة حدث عند الضغط على الأيقونة لتفعيل القائمة المنسدلة
document.querySelector('.hamburger-icon').addEventListener('click', () => {
    // تبديل الفئة النشطة على الهامبرغر
    hamburgerMenu.classList.toggle('active');
});

