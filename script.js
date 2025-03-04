const heroSectionOfHomePage = document.querySelectorAll('.heroSectionOfHomePage');
let incrementDetails = document.querySelectorAll('.incrementDetails');

// Ensure sections are initially hidden except the first one
let count = 0;
heroSectionOfHomePage.forEach((section, index) => {
    section.style.display = index === 0 ? 'block' : 'none';
});

// Hero section slider functionality
setInterval(() => {
    heroSectionOfHomePage.forEach((section) => {
        section.style.display = 'none';
    });

    heroSectionOfHomePage[count].style.display = 'block';
    count = (count + 1) % heroSectionOfHomePage.length;
}, 3000);


// Slider Functionality
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const prev = document.querySelector('.prev'); // Ensure these elements exist
const next = document.querySelector('.next');

let index = 0;

function showSlide(direction) {
    if (direction === 'next') {
        index = (index + 1) % slides.length;
    } else if (direction === 'prev') {
        index = (index - 1 + slides.length) % slides.length;
    }
    slider.style.transform = `translateX(-${index * (slides[0].offsetWidth + 30)}px)`;
}

// Add event listeners to the buttons
if (prev && next) {
    prev.addEventListener('click', () => showSlide('prev'));
    next.addEventListener('click', () => showSlide('next'));
}

// Scroll event for animations
window.onscroll = function () { myFunction() };
let section3RDimageBox = document.getElementById("section3RDimageBox");
let isHashed = false;

function myFunction() {
    if (document.body.scrollTop > 450 || document.documentElement.scrollTop > 450) {
        section3RDimageBox.classList.add("active");
    } else {
        section3RDimageBox.classList.remove("active");
    }

    if ((document.body.scrollTop > 2150 || document.documentElement.scrollTop > 2150) && !isHashed) {
        autoIncrement(incrementDetails);
        isHashed = true;
    }
}

// Auto-increment function
function autoIncrement(incrementDetails) {
    incrementDetails.forEach(item => {
        let increment = 0;
        let targetVal = parseInt(item.innerText);
        let progressIncrement = setInterval(() => {
            if (increment >= targetVal) {
                clearInterval(progressIncrement);
                item.innerText = `${increment}+`;
            } else {
                increment++;
                item.innerText = `${increment}+`;
            }
        }, 40);
    });
}
