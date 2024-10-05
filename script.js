// script.js
/* Gustavo Molina Batista
 gusmol37@gmail.com SENA - ADSO Ficha 2834929 */

// Manejar el envío de formularios
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const formId = form.id;

        if (formId === 'registro' || formId === 'login') {
            const email = document.getElementById('email').value.trim();
            const password = document.getElementById('password').value.trim();
            const confirmPassword = formId === 'registro' ? document.getElementById('confirm-password').value.trim() : null;

            if (!email || !password || (formId === 'registro' && password !== confirmPassword)) {
                alert("Por favor, completa todos los campos correctamente.");
                return;
            }

            if (!validarEmail(email)) {
                alert("Por favor, ingresa un email válido.");
                return;
            }

            alert(formId === 'registro' ? "Registro exitoso. Ahora puedes iniciar sesión." : "Inicio de sesión exitoso.");
            form.reset();
        }

        if (formId === 'recuperacion') {
            const email = document.getElementById('email').value.trim();

            if (!email) {
                alert("Por favor, ingresa tu email.");
                return;
            }

            if (!validarEmail(email)) {
                alert("Por favor, ingresa un email válido.");
                return;
            }

            alert("Hemos enviado un enlace de recuperación a tu email.");
            form.reset();
        }
    });
});

// Función para validar un email
function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Función para manejar la contratación de servicios
function contratarServicio(tipo) {
    alert("Has contratado el servicio de " + tipo + ". Nos pondremos en contacto contigo pronto.");
}

// Función para manejar el enlace de contratación de servicios
document.querySelectorAll('.servicio a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const tipoServicio = new URL(this.href).searchParams.get('tipo');
        contratarServicio(tipoServicio);
    });
});

// Función para cargar historial de servicios
function cargarHistorial() {
    const historial = [
        { servicio: "Limpieza del Hogar", fecha: "01/08/2024" },
        { servicio: "Mantenimiento de Jardines", fecha: "15/07/2024" },
        { servicio: "Reparaciones Menores", fecha: "30/06/2024" }
    ];

    const historialElement = document.getElementById('historial-lista');
    historial.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.servicio} - ${item.fecha}`;
        historialElement.appendChild(li);
    });
}

// Llamar a la función de carga de historial en la página correspondiente
if (document.getElementById('historial-lista')) {
    cargarHistorial();
}
