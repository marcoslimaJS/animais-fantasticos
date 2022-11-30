import outsideClick from './outsideClick.js';

export default function initDropdownMenu() {
  const dropdownMenu = document.querySelectorAll('[data-dropdown]');

  function handleClick(event) {
    event.preventDefault();
    this.classList.add('active');
    outsideClick(this, ['touchstart', 'click'], () => { // arrow function é o callback que sera chamado na função hundleOutsideClick;
      this.classList.remove('active');
    });
  }

  dropdownMenu.forEach((menu) => {
    ['touchstart', 'click'].forEach((userEvent) => {
      menu.addEventListener(userEvent, handleClick);
    });
  });
}
