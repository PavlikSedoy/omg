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