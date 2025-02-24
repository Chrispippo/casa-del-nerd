// Script per gestire l'apertura/chiusura dei sottomenu
document.addEventListener('DOMContentLoaded', () => {
  const menuLinks = document.querySelectorAll('.menu > li > a');
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
