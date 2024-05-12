document.getElementById('uploadButton').addEventListener('click', function() {
  var input = document.getElementById('imageInput');
  var file = input.files[0];
  var reader = new FileReader();
  reader.onloadend = function() {
    var imageContainer = document.getElementById('imageContainer');
    var img = document.createElement('img');
    img.src = reader.result;
    imageContainer.innerHTML = '';
    imageContainer.appendChild(img);
  }
  if (file) {
    reader.readAsDataURL(file);
  }
});

var btn = document.querySelector("button");
btn.onclick = () =>{
   window.print();
}
