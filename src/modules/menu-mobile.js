import outsideClick from './outsideClick.js';

export default class MenuMobile {
  constructor(menuButtton, menuList, events) {
    this.menuButtton = document.querySelector(menuButtton);
    this.menuList = document.querySelector(menuList);
    this.events = events ?? ['touchstart', 'click'];
    this.activeClass = 'active';

    this.openMenu = this.openMenu.bind(this);
  }

  openMenu() {
    this.menuList.classList.add(this.activeClass);
    this.menuButtton.classList.add(this.activeClass);

    outsideClick(this.menuList, this.events, () => {
      this.menuList.classList.remove(this.activeClass);
      this.menuButtton.classList.remove(this.activeClass);
    });
  }

  addMenuMobileEvents() {
    this.events.forEach((event) => {
      this.menuButtton.addEventListener(event, this.openMenu);
    });
  }

  init() {
    if (this.menuButtton && this.menuList) {
      this.addMenuMobileEvents();
    }
    return this;
  }
}
