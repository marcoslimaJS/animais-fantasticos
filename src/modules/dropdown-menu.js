import outsideClick from './outsideClick.js';

export default class DropdownMenu {
  constructor(dropdownMenus, events) {
    this.dropdownMenus = document.querySelectorAll(dropdownMenus);
    this.events = events ?? ['touchstart', 'click'];
    this.activeDropdownMenu = this.activeDropdownMenu.bind(this);
  }

  /* Ativa o dropdwonMenu e adiciona
  a função que observa o click fora dele
  */
  activeDropdownMenu(event) {
    console.log(event);
    event.preventDefault();
    const element = event.currentTarget;
    element.classList.add('active');
    // arrow function é o callback que sera chamado na função hundleOutsideClick;
    outsideClick(element, this.events, () => {
      element.classList.remove('active');
    });
  }

  // Adiciona os eventos ao dropdownMenu
  addDropdownMenuEvent() {
    this.dropdownMenus.forEach((menu) => {
      console.log(this.events);
      this.events.forEach((userEvent) => {
        menu.addEventListener(userEvent, this.activeDropdownMenu);
      });
    });
  }

  init() {
    if (this.dropdownMenus.length) {
      this.addDropdownMenuEvent();
    }
    return this;
  }
}
