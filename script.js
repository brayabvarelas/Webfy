document.getElementById('uploadButton').addEventListener('click', function () {
    const fileInput = document.getElementById('fileInput');
    const gallery = document.getElementById('gallery');

    // Limpiar la galería antes de mostrar nuevas imágenes
    gallery.innerHTML = '';

    // Obtener las imágenes seleccionadas
    const files = fileInput.files;

    for (let i = 0; i < files.length; i++) {
        const file = files[i];

        // Crear un objeto URL para la imagen
        const imageUrl = URL.createObjectURL(file);

        // Crear un elemento <img> para mostrar la imagen
        const img = document.createElement('img');
        img.src = imageUrl;
        img.alt = `Imagen ${i + 1}`;

        // Agregar la imagen a la galería
        gallery.appendChild(img);
    }
});