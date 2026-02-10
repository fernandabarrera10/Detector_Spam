document.getElementById('spam-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario
    
    const text = document.getElementById('text-input').value.toLowerCase();
    const resultDiv = document.getElementById('result-message');
    
    // Reglas básicas de detección (puedes personalizar)
    const spamKeywords = ['oferta', 'gratis', 'urgente', 'ganar dinero', 'clic aquí'];
    const hasLinks = /https?:\/\/[^\s]+/i.test(text); // Detecta enlaces
    const hasExcessiveCaps = (text.match(/[A-Z]/g) || []).length > text.length * 0.3; // Más del 30% en mayúsculas
    
    let isSpam = false;
    let reasons = [];
    
    if (spamKeywords.some(keyword => text.includes(keyword))) {
        isSpam = true;
        reasons.push('Contiene palabras clave sospechosas.');
    }
    if (hasLinks) {
        isSpam = true;
        reasons.push('Incluye enlaces.');
    }
    if (hasExcessiveCaps) {
        isSpam = true;
        reasons.push('Tiene muchas mayúsculas.');
    }
    
    // Mostrar resultado
    if (isSpam) {
        resultDiv.innerHTML = <p class="spam">¡Alerta! Este texto parece ser spam. Razones: ${reasons.join(', ')}</p>;
    } else {
        resultDiv.innerHTML = <p class="no-spam">Este texto no parece ser spam.</p>;
    }
});
