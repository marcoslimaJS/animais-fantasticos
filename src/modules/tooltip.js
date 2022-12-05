export default class Tooltip {
  constructor(tooltipsList) {
    this.tooltips = document.querySelectorAll(tooltipsList);

    //  bind do objeto da classe aos callbacks
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
  }

  // Move a tooltip com base em seus estilos
  // de acordo com a posição do mouse
  onMouseMove(e) {
    this.tooltipBox.style.top = `${e.pageY + 20}px`;
    if (e.pageX + 260 > window.innerWidth) {
      this.tooltipBox.style.left = `${e.pageX - 200}px`;
    } else {
      this.tooltipBox.style.left = `${e.pageX + 20}px`;
    }
  }

  // remove a tooltip e os eventos de mousemove e leave
  onMouseLeave(e) {
    this.tooltipBox.remove();
    e.currentTarget.removeEventListener('mouseleave', this.onMouseLeave);
    e.currentTarget.removeEventListener('mousemove', this.onMouseMove);
  }

  //  cria a tooltipbox e coloca no body
  criarTooltip(elemento) {
    const tooltipBox = document.createElement('div');
    const text = elemento.getAttribute('aria-label');
    tooltipBox.classList.add('tooltip');
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    this.tooltipBox = tooltipBox;
  }

  //  cria a tooltip e adiciona os eventos de mousemove e leave ao target
  onMouseOver(e) {
    // cria a tooltipbox e coloca em uma propriedade
    this.criarTooltip(e.currentTarget);
    e.currentTarget.addEventListener('mousemove', this.onMouseMove);
    e.currentTarget.addEventListener('mouseleave', this.onMouseLeave);
  }

  // adiciona os eventos de mouseover a cada tooltip do site
  addTooltipEvents() {
    this.tooltips.forEach((item) => {
      item.addEventListener('mouseover', this.onMouseOver);
    });
  }

  init() {
    if (this.tooltips.length) {
      this.addTooltipEvents();
    }
    return this;
  }
}
