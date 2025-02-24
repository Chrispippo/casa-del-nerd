document.addEventListener('DOMContentLoaded', () => {
  const loginButton = document.getElementById('loginButton');
  const loginModal = document.getElementById('loginModal');
  const closeModal = document.querySelector('.modal .close');
  
  // Apri il modal al clic del pulsante "Accedi"
  loginButton.addEventListener('click', () => {
    loginModal.style.display = 'block';
  });
  
  // Chiudi il modal al clic della "X"
  closeModal.addEventListener('click', () => {
    loginModal.style.display = 'none';
  });
  
  // Chiudi il modal cliccando fuori dalla finestra del modal
  window.addEventListener('click', (event) => {
    if (event.target === loginModal) {
      loginModal.style.display = 'none';
    }
  });
});
