require('lightgallery.js/dist/js/lightgallery');
require('lg-video.js/dist/lg-video');

lightGallery(document.getElementById('reviewsMessageGallery'), {
    // thumbnail: false,
    selector: '.msg-gallery__link'
});
lightGallery(document.getElementById('reviewsPhotoGallery'), {
    // thumbnail: false,
    selector: '.msg-gallery__link--photo1'
});
lightGallery(document.getElementById('galleryPhotoGallery'), {
    // thumbnail: false,
    selector: '.msg-gallery__link--photo2'
});
lightGallery(document.getElementById('galleryVideoGallery'), {
    // thumbnail: false,
    selector: '.msg-gallery__link--video2',
});