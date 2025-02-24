// Script per gestire l'apertura/chiusura dei sottomenu nella sidebar
document.addEventListener('DOMContentLoaded', () => {
  const menuLinks = document.querySelectorAll('.sidebar .menu > li > a');
  menuLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const submenu = link.nextElementSibling;
      if (submenu && submenu.classList.contains('submenu')) {
        e.preventDefault();
        submenu.classList.toggle('open');
      }
    });
  });
});
