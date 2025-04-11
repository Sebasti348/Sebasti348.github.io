const toggleModo = document.getElementById('toggle-modo');
const body = document.body;

function alternarModoOscuro() {
    body.classList.toggle('modo-oscuro');
    const tema = body.classList.contains('modo-oscuro') ? 'oscuro' : 'claro';
    toggleModo.textContent = tema === 'oscuro' ? '🌙' : '☀️';
    localStorage.setItem('tema', tema);
}

document.addEventListener('DOMContentLoaded', () => {
    const temaGuardado = localStorage.getItem('tema');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (temaGuardado === 'oscuro' || (!temaGuardado && prefersDarkScheme)) {
        body.classList.add('modo-oscuro');
        toggleModo.textContent = '🌙';
    } else {
        toggleModo.textContent = '☀️';
    }
});

toggleModo.addEventListener('click', alternarModoOscuro);