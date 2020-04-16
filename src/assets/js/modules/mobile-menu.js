// Mobile menu open/close
import { disablePageScroll, enablePageScroll } from 'scroll-lock'

const hamburgerCheck = document.getElementById('hamburger'),
    mobileMenu = document.getElementById('mobile-menu');

let mobileMenuState = false;

hamburgerCheck.addEventListener('change', () => {
    if (!mobileMenuState) {
        mobileMenu.classList.add('mobile-menu--active');
        disablePageScroll();
    }
    else {
        mobileMenu.classList.remove('mobile-menu--active');
        enablePageScroll();
    }

    // Change mobile nav state
    mobileMenuState = !mobileMenuState;
});
// End mobile menu open/close

// Fixed/unfixed navbar
import * as ScrollMagic from "scrollmagic";
import { TweenMax, TimelineMax } from "gsap";
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";

ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);

const tl = new TimelineMax();

const navbar = document.getElementById('navbar');
let navbarActiveFlag = false;

document.addEventListener('scroll', () => {
    let scrollPos = window.pageYOffset;

    if (scrollPos > 100 && !navbarActiveFlag) fixNavbar();
    else if (scrollPos <= 100 && navbarActiveFlag) unfixNavbar();
});

// Fix navbar function
const fixNavbar = () => {
    // console.log('fix');
    tl.fromTo(navbar, .5, {
        opacity: 0
    }, {
        opacity: 1,
        position: 'fixed',
        backgroundColor: '#ffffff',
        boxShadow: '0px 4px 74px rgba(0, 0, 0, 0.17)'
});

    navbarActiveFlag = true;
}

const unfixNavbar = () => {
    tl.to(navbar, .5, {
        position: 'absolute',
        boxShadow: 'none',
        backgroundColor: 'transparent'
    });

    navbarActiveFlag = false;
}
// End Fixed/unfixed navbar