document.addEventListener('DOMContentLoaded', () => {
    const allHoverImages = document.querySelectorAll('.hover-container div img');
    const imgContainer = document.querySelector('.img-container');

    allHoverImages[0].parentElement.classList.add('active');

    allHoverImages.forEach((image) => {
        image.addEventListener('mouseover', () => {
            imgContainer.querySelector('img').src = image.src;
            resetActiveImg();
            image.parentElement.classList.add('active');
        });
    });

    function resetActiveImg() {
        allHoverImages.forEach((img) => {
            img.parentElement.classList.remove('active');
        });
    }
});



const urlParams = new URLSearchParams(window.location.search);
const productImage = urlParams.get('image');
const additionalImages = urlParams.get('additionalImages');

// Set the main product image source
document.querySelector('.img-container img').src = productImage;

// Remove existing additional images
const hoverContainer = document.querySelector('.hover-container');
hoverContainer.innerHTML = ''; // Clear the existing content

// Set the additional product images
const additionalImagesArray = additionalImages.split(',');
additionalImagesArray.forEach((image) => {
    const imgElement = document.createElement('div');
    imgElement.innerHTML = `<img src="${image}">`;
    hoverContainer.appendChild(imgElement);
});







