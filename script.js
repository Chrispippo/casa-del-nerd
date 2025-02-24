document.addEventListener('DOMContentLoaded', () => {
  // Elementi dei modali e dei pulsanti
  const loginButton = document.getElementById('loginButton');
  const registerButton = document.getElementById('registerButton');
  const loginModal = document.getElementById('loginModal');
  const registerModal = document.getElementById('registerModal');
  const closeButtons = document.querySelectorAll('.modal .close');

  // Apri il modal di login
  loginButton.addEventListener('click', () => {
    loginModal.style.display = 'block';
  });

  // Apri il modal di registrazione
  registerButton.addEventListener('click', () => {
    registerModal.style.display = 'block';
  });

  // Aggiungi event listener per chiudere i modali cliccando sulla "X"
  closeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      btn.parentElement.parentElement.style.display = 'none';
    });
  });

  // Chiudi il modal cliccando fuori dal contenuto
  window.addEventListener('click', (e) => {
    if (e.target === loginModal) {
      loginModal.style.display = 'none';
    }
    if (e.target === registerModal) {
      registerModal.style.display = 'none';
    }
  });
});
