import SmoothScroll from 'smooth-scroll';

var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 300,
    customEasing: function (time) {

        // return <your formulate with time as a multiplier>

        // Example: easeInOut Quad
        return time < 0.5 ? 2 * time * time : -1 + (4 - 2 * time) * time;

    },
    offset: 50
});