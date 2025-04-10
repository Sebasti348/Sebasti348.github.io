// Selección de todos los artículos del blog
const posts = document.querySelectorAll('.post');

// Configuración del IntersectionObserver para el efecto de revelación al hacer scroll
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('reveal'); // Añade clase para revelar el artículo
    }
  });
});

// Aplicar el observer a cada artículo
posts.forEach(post => observer.observe(post));