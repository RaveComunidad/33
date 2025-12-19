// mejoras-movil.js
$(document).ready(function() {
    // 1. Forzar que el input de chat no dispare el zoom del navegador
    const chatInput = $('#msg');
    if (chatInput.length) {
        chatInput.css({
            'font-size': '16px', // Tamaño mágico para evitar zoom en iOS
            'touch-action': 'manipulation'
        });

        // 2. Cuando el teclado se cierra, forzar a la pantalla a volver a su sitio
        chatInput.on('blur', function() {
            setTimeout(function() {
                window.scrollTo(0, 0);
                document.body.scrollTop = 0;
            }, 100);
        });
    }

    // 3. Bloquear el scroll elástico y gestos de "atrás" en el navegador
    document.addEventListener('touchstart', function(event) {
        if (event.touches.length > 1) {
            event.preventDefault(); // Bloquea zoom con dos dedos
        }
    }, { passive: false });

    // 4. Evitar que la pantalla se mueva si el usuario arrastra el dedo fuera del juego
    document.addEventListener('touchmove', function(event) {
        if (event.scale !== 1) { event.preventDefault(); }
    }, { passive: false });
});