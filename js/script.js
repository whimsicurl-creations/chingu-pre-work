function smoothScroll(target, duration) {
    var target  = document.querySelector(target);
    var targetPosition = target.getBoundingClientRect().top;
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;
    var startTime = null;

    function animation(currentTime) {
        if(startTime === null) {
            startTime = currentTime;
        };
        var timeElapsed = currentTime - startTime;
        var run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) {
            requestAnimationFrame(animation);
        };
    };

    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    };

    requestAnimationFrame(animation);
}

var homepage = document.querySelector('#homepage-nav');
var about = document.querySelector('#about-nav');
var services = document.querySelector('#services-nav');
var contact = document.querySelector('#contact-nav');

homepage.addEventListener('click', function() {
    smoothScroll('#homepage', 2000);
});
about.addEventListener('click', function() {
    smoothScroll('#about', 2000);
});
services.addEventListener('click', function() {
    smoothScroll('#services', 2000);
});
contact.addEventListener('click', function() {
    smoothScroll('#contact', 2000);
});