// Selecciona todos los botones con la clase 'boton-audio'
const botones = document.querySelectorAll('.boton-audio');

// Itera sobre cada botón para agregarle un 'escuchador' de eventos
botones.forEach(boton => {
    boton.addEventListener('click', () => {
        // Obtiene la ruta del archivo de audio desde el atributo 'data-audio-src' del botón
        const audioSrc = boton.getAttribute('data-audio-src');

        // Crea un nuevo elemento de audio en el momento de hacer clic
        const audio = new Audio(audioSrc);

        // Reproduce el audio
        audio.play()
            .catch(error => console.error("Error al reproducir el audio:", error)); 
            // Esto es útil para detectar errores, por ejemplo, si la ruta del archivo es incorrecta.
    });
});