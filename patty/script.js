document.addEventListener('DOMContentLoaded', () => {
    
    // --- VARIABLES DE ELEMENTOS ---
    const envelope = document.getElementById('envelope');
    const invitation = document.querySelector('.invitation-container');
    const thankYouCard = document.getElementById('thankYouCard'); 
    
    const btnYes = document.getElementById('btnYes');
    const btnNo = document.getElementById('btnNo');
    
    // --- VARIABLES DE ESTADO ---
    let noClickCount = 0;
    const maxNoClicks = 10; 
    
    // Configurar el botón 'No' a posición absoluta fuera del listener para el movimiento
    btnNo.style.position = 'absolute';

    // --- LÓGICA DEL SOBRE ---
    function openInvitation() {
        envelope.classList.add('hidden');
        
        setTimeout(() => {
            invitation.classList.add('visible');
        }, 100); 
    }
    
    envelope.addEventListener('click', openInvitation);
    
    // --- LÓGICA DEL BOTÓN 'SÍ' ---
    btnYes.addEventListener('click', () => {
        invitation.classList.remove('visible');
        invitation.classList.add('hidden'); 
        
        setTimeout(() => {
            thankYouCard.classList.add('visible');
        }, 300); 
    });

    // --- LÓGICA DEL BOTÓN 'NO' (LÍMITES REFORZADOS) ---
    btnNo.addEventListener('click', (e) => {
        e.preventDefault(); 
        
        if (noClickCount >= maxNoClicks) {
            btnNo.textContent = "¡Ya no puedes!";
            btnNo.style.cursor = 'default';
            return; 
        }

        noClickCount++;
        
        const invitationContainer = invitation;
        const btnRectWidth = btnNo.offsetWidth;
        const btnRectHeight = btnNo.offsetHeight;

        // -------------------------------------------------------------
        //  AJUSTE CLAVE: Definir el área de movimiento estricto
        // -------------------------------------------------------------
        
        const PADDING = 20; // Margen de seguridad desde los lados (izquierda/derecha)
        const TOP_LIMIT = 120; // Límite superior para evitar la Question Box
        const BOTTOM_LIMIT = 50; // Margen de seguridad desde abajo
        
        // Máximo valor que 'left' puede tomar (Ancho total - Ancho Botón - Padding derecho)
        const maxX = invitationContainer.offsetWidth - btnRectWidth - PADDING;
        
        // Máximo valor que 'top' puede tomar (Alto total - Alto Botón - Margen inferior)
        const maxY = invitationContainer.offsetHeight - btnRectHeight - BOTTOM_LIMIT; 

        // Calcular nuevas posiciones X e Y
        
        // newX: Entre PADDING y maxX
        let newX = Math.floor(Math.random() * (maxX - PADDING + 1)) + PADDING; 
        
        // newY: Entre TOP_LIMIT y maxY
        let newY = Math.floor(Math.random() * (maxY - TOP_LIMIT + 1)) + TOP_LIMIT; 


        // Aplicar la nueva posición
        btnNo.style.left = `${newX}px`;
        btnNo.style.top = `${newY}px`;
        btnNo.style.transition = 'all 0.3s ease-in-out'; 

        // El botón 'Sí' se hace más grande
        const scaleFactor = 1.0 + (noClickCount * 0.05);
        btnYes.style.transform = `scale(${scaleFactor})`;
        
        if (noClickCount === maxNoClicks) {
            btnNo.textContent = "¡Ya no puedes!";
            btnNo.style.cursor = 'default';
        }
    });
});