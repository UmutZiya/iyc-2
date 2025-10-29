
// Lightbox functionality
const images = [
    'images/galeri-1.jpg',
    'images/galeri-2.jpg',
    'images/galeri-3.jpg',
    'images/galeri-4.jpg',
    'images/galeri-5.jpg',
    'images/galeri-6.jpg',
    'images/galeri-7.jpg',
    'images/galeri-8.jpg'
];

let currentIndex = 0;
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const galeriItems = document.querySelectorAll('.galeri-item');

// Open lightbox
galeriItems.forEach(item => {
    item.addEventListener('click', () => {
        currentIndex = parseInt(item.dataset.index);
        showImage();
        lightbox.style.display = 'block';
    });
});

// Close lightbox
document.querySelector('.lightbox-close').addEventListener('click', () => {
    lightbox.style.display = 'none';
});

// Previous image
document.querySelector('.lightbox-prev').addEventListener('click', () => {
    currentIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
    showImage();
});

// Next image
document.querySelector('.lightbox-next').addEventListener('click', () => {
    currentIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
    showImage();
});

// Show current image
function showImage() {
    lightboxImg.src = images[currentIndex];
}

// Close on background click
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = 'none';
    }
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (lightbox.style.display === 'block') {
        if (e.key === 'Escape') {
            lightbox.style.display = 'none';
        } else if (e.key === 'ArrowLeft') {
            currentIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
            showImage();
        } else if (e.key === 'ArrowRight') {
            currentIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
            showImage();
        }
    }
});
