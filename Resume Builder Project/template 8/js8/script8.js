const imageInput = document.getElementById('imageInput');
const imageContainer = document.getElementById('imageContainer');

imageInput.addEventListener('change', () => {
  const file = imageInput.files[0];
  const reader = new FileReader();

  reader.onload = (event) => {
    const img = document.createElement('img');
    img.src = event.target.result;
    imageContainer.innerHTML = '';
    imageContainer.appendChild(img);
  };

  reader.readAsDataURL(file);
});