const imagesToPreview = document.querySelectorAll('.image-to-preview');
const imagePreviewContainer = document.getElementById('image-preview-container');
const imagePreview = document.getElementById('image-preview');

imagesToPreview.forEach(imageToPreview => {

    imageToPreview.addEventListener('click', function () {
        imagePreviewContainer.classList.toggle("active");
        const imageURL = this.src;
        imagePreview.src = imageURL;
        imagePreview.classList.toggle("active");
    });
})

imagePreviewContainer.addEventListener('click', function () {
    imagePreviewContainer.classList.toggle("active");
    imagePreview.classList.toggle("active");
});