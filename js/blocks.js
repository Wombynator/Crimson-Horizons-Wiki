const imageToPreview = document.getElementById('image-to-preview');
const imagePreviewContainer = document.getElementById('image-preview-container');
const imagePreview = document.getElementById('image-preview');

imageToPreview.addEventListener('click', function () {
    imagePreviewContainer.classList.add("active");
    imagePreview.classList.toggle("active");
});

imagePreviewContainer.addEventListener('click', function () {
    imagePreviewContainer.classList.add("deactivating");
    imagePreviewContainer.classList.remove("active");
    imagePreview.classList.toggle("active");
    setTimeout(() => {
        imagePreviewContainer.classList.remove("deactivating");
    }, 300);
});