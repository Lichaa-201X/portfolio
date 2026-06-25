const contactForm = document.getElementById('contactForm');
const formResponse = document.getElementById('formResponse');

if (contactForm) {
  contactForm.addEventListener('submit', event => {
    event.preventDefault();

    const name = contactForm.name.value.trim();
    const email = contactForm.email.value.trim();
    const message = contactForm.message.value.trim();

    if (!name || !email || !message) {
      formResponse.textContent = 'Por favor completa todos los campos antes de enviar.';
      return;
    }

    formResponse.textContent = 'Enviando tu mensaje...';

    setTimeout(() => {
      formResponse.textContent = `Gracias, ${name}! Tu mensaje ha sido enviado correctamente.`;
      contactForm.reset();
    }, 800);
  });
}
