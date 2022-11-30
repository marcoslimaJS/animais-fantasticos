import outsideClick from './outsideClick.js';

export default function initMenuMobile() {
  const menuButtton = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="list"]');
  const eventos = ['click', 'touchstart'];

  function openMenu() {
    menuList.classList.add('active');
    menuButtton.classList.add('active');

    outsideClick(menuList, eventos, () => {
      menuList.classList.remove('active');
      menuButtton.classList.remove('active');
    });
  }

  if (menuButtton) {
    eventos.forEach((event) => {
      menuButtton.addEventListener(event, openMenu);
    });
  }
}
