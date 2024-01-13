// Selecciona el elemento con el ID "tv"
var consola = document.getElementById('tv');

// Selecciona todos los botones
var botones = document.querySelectorAll('a');

// Para cada botón
botones.forEach(function(a) {
    // Añade un controlador de eventos de clic
    a.addEventListener('click', function() {
        // Cambia la propiedad backgroundImage del elemento a la URL de la nueva imagen
        consola.style.backgroundImage = "url('./img/" + a.id + ".jpg')";
    });
});