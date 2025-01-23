// script.js

// Select the lightbox and related elements
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const thumbnails = document.querySelectorAll('.thumbnail');
const closeBtn = document.querySelector('.close');

// Open lightbox on thumbnail click
thumbnails.forEach(thumbnail => {
  thumbnail.addEventListener('click', () => {
    lightbox.style.display = 'flex';
    lightboxImg.src = thumbnail.src; // Set the lightbox image source
  });
});

// Close lightbox when close button is clicked
closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

// Close lightbox when clicking outside the image
lightbox.addEventListener('click', (e) => {
  if (e.target !== lightboxImg) {
    lightbox.style.display = 'none';
  }
});