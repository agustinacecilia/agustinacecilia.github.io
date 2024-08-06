document.addEventListener('DOMContentLoaded', function () {
    var modalTriggers = document.querySelectorAll('.modal-trigger');
    var modals = document.querySelectorAll('.modal');
    var closeButtons = document.querySelectorAll('.close');

    modalTriggers.forEach(function (trigger) {
        trigger.addEventListener('click', function () {
            var modalId = this.getAttribute('data-modal');
            var modal = document.getElementById(modalId);
            modal.style.display = 'block';
        });
    });

    closeButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            var modal = this.closest('.modal');
            modal.style.display = 'none';
        });
    });

    window.addEventListener('click', function (event) {
        modals.forEach(function (modal) {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    });

    var slides = document.querySelectorAll('.project-slide');
    var currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? 'block' : 'none';
        });
    }

    document.querySelector('.prev').addEventListener('click', function () {
        currentSlide = (currentSlide > 0) ? currentSlide - 1 : slides.length - 1;
        showSlide(currentSlide);
    });

    document.querySelector('.next').addEventListener('click', function () {
        currentSlide = (currentSlide < slides.length - 1) ? currentSlide + 1 : 0;
        showSlide(currentSlide);
    });

    showSlide(currentSlide);
});
