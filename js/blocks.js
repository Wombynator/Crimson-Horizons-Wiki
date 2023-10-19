const imageToPreview = document.getElementById('image-to-preview');
const imagePreviewContainer = document.getElementById('image-preview-container');
const imagePreview = document.getElementById('image-preview');

imageToPreview.addEventListener('click', function () {
    const imageURL = this.src;
    imagePreview.src = imageURL;
    imagePreviewContainer.style.display = 'flex';
});

imagePreviewContainer.addEventListener('click', function () {
    imagePreviewContainer.style.display = 'none';
});