var profile = document.querySelector('.profile');
var year = document.querySelector('#year');
var locate = document.querySelector('#location');
var iterations = 1;
window.onload = function() {
    rollIn(profile, iterations);
    bounceInDown(locate, iterations);
    year.innerHTML = new Date().getFullYear();
}

function rollIn(elem, iterations) {
    var keyframes = [{ transform: 'translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg)', opacity: '0', offset: 0 },
        { transform: 'none', opacity: '1', offset: 1 }
    ];
    var timing = { duration: 900, iterations: iterations };
    return elem.animate(keyframes, timing);
}

function bounceInDown(elem, iterations) {
    var keyframes = [
        { transform: 'translate3d(0, -3000px, 0)', opacity: '0', offset: 0 },
        { transform: 'translate3d(0, 25px, 0)', opacity: '1', offset: 0.6 },
        { transform: 'translate3d(0, -100px, 0)', offset: 0.75 },
        { transform: 'translate3d(0, 5px, 0)', offset: 0.9 },
        { transform: 'none', opacity: '1', offset: 1 }
    ];
    var timing = { duration: 900, iterations: iterations, easing: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)' };
    return elem.animate(keyframes, timing);
}