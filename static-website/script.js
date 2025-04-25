'use strict';

function enviar(event){
    event.preventDefault();
    
    const fullname = document.getElementById('fullname').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phonenumber').value;
    const subject = document.getElementById('subject').value;
    
    const nameRegex    = /^[A-Za-zÁÉÍÓÚáéíóúÑñ ]{2,50}$/;
    const emailRegex   = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex   = /^\+?\d{7,15}$/;
    
    
    if (!nameRegex.test(fullname)) {
        alert('El nombre no es válido. Debe contener solo letras y espacios.');
        return;
    }
    if (!emailRegex.test(email)) {
        alert('El correo electrónico no es válido.');
        return;
    }
    if (!phoneRegex.test(phone)) {
        alert('El número de teléfono no es válido. Debe contener entre 7 y 15 dígitos.');
        return;
    }
    if (subject.length < 10) {
        alert('El asunto debe tener al menos 10 caracteres.');
        return;
    }
    
    return alert('Formulario enviado con éxito');
    
};