function show() {
    var archivo = document.getElementById("file").files[0];
    var reader = new FileReader();
    if (file) {
        reader.readAsDataURL(archivo);
        reader.onloadend = function() {
            document.getElementById("img").src = reader.result;
        }
    }
}