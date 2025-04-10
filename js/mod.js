// Seleccionar el botón y el body
const toggleModo = document.getElementById('toggle-modo');
const body = document.body;

// Función para alternar el modo oscuro
function alternarModoOscuro() {
    body.classList.toggle('modo-oscuro');

    // Guardar preferencia en localStorage
    if (body.classList.contains('modo-oscuro')) {
        toggleModo.textContent = '☀️'; // Sol para modo claro
        localStorage.setItem('tema', 'oscuro');
    } else {
        toggleModo.textContent = '🌙'; // Luna para modo oscuro
        localStorage.setItem('tema', 'claro');
    }
}

// Verificar si hay una preferencia guardada
document.addEventListener('DOMContentLoaded', () => {
    const temaGuardado = localStorage.getItem('tema');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (temaGuardado === 'oscuro' || (!temaGuardado && prefersDarkScheme)) {
        body.classList.add('modo-oscuro');
        toggleModo.textContent = '☀️';
    } else {
        body.classList.remove('modo-oscuro');
        toggleModo.textContent = '🌙';
    }
});

// Agregar evento al botón para alternar el modo
toggleModo.addEventListener('click', alternarModoOscuro);