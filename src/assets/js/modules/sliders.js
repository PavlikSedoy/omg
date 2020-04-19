import Swiper from 'swiper';

// Messages slider
var mySwiper = new Swiper ('#reviewsMessageGallery', {
    slidesPerView: 4,
    spaceBetween: 40,

    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 0
        },
        576: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        992: {
            slidesPerView: 4,
            spaceBetween: 40
        }
    },

    // Navigation arrows
    navigation: {
        nextEl: '#reviewsMessageGallery-next',
        prevEl: '#reviewsMessageGallery-prev',
    },
});

// PhotogallerySlider
var photoGallery1 = new Swiper ('#reviewsPhotoGallery', {
    slidesPerView: 3,
    spaceBetween: 30,
    // slidesOffsetBefore: 15,

    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 30
        },
        576: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 30
        }
    },

    // Navigation arrows
    navigation: {
        nextEl: '#reviewsPhotoGallery-next',
        prevEl: '#reviewsPhotoGallery-prev',
    },
});

// PhotogallerySlider
var videoGallery1 = new Swiper ('#reviewsVideoGallery', {
    slidesPerView: 3,
    spaceBetween: 30,
    // slidesOffsetBefore: 15,

    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 30
        },
        576: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 30
        }
    },

    // Navigation arrows
    navigation: {
        nextEl: '#reviewsVideoGallery-next',
        prevEl: '#reviewsVideoGallery-prev',
    },
});

document.addEventListener('click', e => {
    if (e.target.classList[0] == 'tab') {
        photoGallery1.update();
        videoGallery1.update();
    }
});