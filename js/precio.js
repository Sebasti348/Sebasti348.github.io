// Selección del switch y de los elementos de precios
const toggleSwitch = document.getElementById('toggle-switch');
const mensualPrices = document.querySelectorAll('.price.mensual');
const anualPrices = document.querySelectorAll('.price.anual');

// Evento para detectar cambios en el toggle
toggleSwitch.addEventListener('change', () => {
  if (toggleSwitch.checked) {
    // Si el toggle está activado, muestra los precios anuales y oculta los mensuales
    mensualPrices.forEach(price => {
      price.style.display = 'none';
    });
    anualPrices.forEach(price => {
      price.style.display = 'block';
    });
  } else {
    // Si el toggle está desactivado, muestra los precios mensuales y oculta los anuales
    mensualPrices.forEach(price => {
      price.style.display = 'block';
    });
    anualPrices.forEach(price => {
      price.style.display = 'none';
    });
  }
});