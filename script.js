document.addEventListener('DOMContentLoaded', () => {
  // Gestione modali per Login e Registrazione
  const loginButton = document.getElementById('loginButton');
  const registerButton = document.getElementById('registerButton');
  const loginModal = document.getElementById('loginModal');
  const registerModal = document.getElementById('registerModal');
  const closeButtons = document.querySelectorAll('.modal .close');

  // Apri modal Login
  loginButton.addEventListener('click', () => {
    loginModal.style.display = 'block';
  });

  // Apri modal Registrazione
  registerButton.addEventListener('click', () => {
    registerModal.style.display = 'block';
  });

  // Chiudi modal cliccando sulla "X"
  closeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      btn.closest('.modal').style.display = 'none';
    });
  });

  // Chiudi modal cliccando fuori dal contenuto
  window.addEventListener('click', (e) => {
    if (e.target === loginModal) {
      loginModal.style.display = 'none';
    }
    if (e.target === registerModal) {
      registerModal.style.display = 'none';
    }
  });
});
