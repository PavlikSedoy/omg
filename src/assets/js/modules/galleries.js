require('lightgallery.js/dist/js/lightgallery');
require('lg-video.js/dist/lg-video');

lightGallery(document.getElementById('reviewsMessageGallery'), {
    thumbnail: false,
    selector: '.msg-gallery__link'
});
lightGallery(document.getElementById('reviewsPhotoGallery'), {
    thumbnail: false,
    selector: '.msg-gallery__link--photo1'
});
lightGallery(document.getElementById('reviewsVideoGallery'), {
    // thumbnail: false,
    selector: '.msg-gallery__link--video1',
    youtubePlayerParams: {
        modestbranding: 1,
        showinfo: 0,
        rel: 0,
        controls: 0
    },
});