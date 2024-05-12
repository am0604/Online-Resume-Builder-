const profileImageInput = document.getElementById('profile-image-input');
const profileImagePreview = document.getElementById('profile-image-preview');

profileImageInput.addEventListener('change', (e) => {
  const file = profileImageInput.files[0];
  const reader = new FileReader();

  reader.onload = (event) => {
    const imageData = event.target.result;
    const img = document.createElement('img');
    img.src = imageData;
    profileImagePreview.innerHTML = '';
    profileImagePreview.appendChild(img);
  };

  reader.readAsDataURL(file);
});