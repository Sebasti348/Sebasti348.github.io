const form = document.querySelector('.contact-form');
const spinner = document.getElementById('spinner');
const modal = document.getElementById('confirmation-modal');
const closeModal = document.getElementById('close-modal');

form.addEventListener('submit', (e) => {
  e.preventDefault(); // Evita el envío real del formulario
  spinner.style.display = 'block'; // Muestra el spinner

  // Simular envío del formulario
  setTimeout(() => {
    spinner.style.display = 'none'; // Ocultar el spinner
    modal.style.display = 'flex'; // Mostrar el modal
  }, 2000); // Simula un tiempo de espera de 2 segundos
});

closeModal.addEventListener('click', () => {
  modal.style.display = 'none'; // Cierra el modal
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none'; // Oculta el modal
    window.location.href = 'index.html'; // Redirige al index.html
  });