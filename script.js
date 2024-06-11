document.addEventListener('DOMContentLoaded', function() {
    const navBar = document.querySelector('.nav-bar');
    const navOptions = document.querySelector('.nav-option');

    navBar.addEventListener('click', function() {
        navOptions.classList.toggle('open');
        navBar.classList.toggle('open');
    });
    navOptions.addEventListener('click', function() {
        navOptions.classList.toggle('close');
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Create the intersection observer
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Unobserve after adding the class
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the element is in the viewport
    });

    // Select all sections or elements you want to observe
    const elementsToObserve = document.querySelectorAll('section, .header, .project-card');

    elementsToObserve.forEach(element => {
        element.classList.add('hidden'); // Add hidden class initially
        observer.observe(element); // Observe the element
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-option a');

    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-option a');

    const options = {
        threshold: 0.6
    };

    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href').substring(1) === entry.target.id) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });
});
