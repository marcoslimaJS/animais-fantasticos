/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_scroll_suave_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/scroll-suave.js */ \"./src/modules/scroll-suave.js\");\n/* harmony import */ var _modules_accordion_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/accordion.js */ \"./src/modules/accordion.js\");\n/* harmony import */ var _modules_tabnav_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/tabnav.js */ \"./src/modules/tabnav.js\");\n/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/modal.js */ \"./src/modules/modal.js\");\n/* harmony import */ var _modules_tooltip_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/tooltip.js */ \"./src/modules/tooltip.js\");\n/* harmony import */ var _modules_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/dropdown-menu.js */ \"./src/modules/dropdown-menu.js\");\n/* harmony import */ var _modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/menu-mobile.js */ \"./src/modules/menu-mobile.js\");\n/* harmony import */ var _modules_funcionamento_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/funcionamento.js */ \"./src/modules/funcionamento.js\");\n/* harmony import */ var _modules_fetch_animais_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/fetch-animais.js */ \"./src/modules/fetch-animais.js\");\n/* harmony import */ var _modules_fetch_bitcoin_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/fetch-bitcoin.js */ \"./src/modules/fetch-bitcoin.js\");\n/* harmony import */ var _modules_scroll_anima_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/scroll-anima.js */ \"./src/modules/scroll-anima.js\");\n\n\n\n\n\n\n\n\n\n\n\n\nconst scrollSuave = new _modules_scroll_suave_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('[data-menu=\"suave\"] a[href^=\"#\"]');\nscrollSuave.init();\n\nconst accordion = new _modules_accordion_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('[data-anime=\"accordion\"] dt');\naccordion.init();\n\nconst tabnav = new _modules_tabnav_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]('[data-tab=\"menu\"] li', '[data-tab=\"content\"] section');\ntabnav.init();\n\nconst modal = new _modules_modal_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]('[data-modal=\"abrir\"]', '[data-modal=\"fechar\"]', '[data-modal=\"container\"]');\nmodal.init();\n\nconst tooltip = new _modules_tooltip_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"]('[data-tooltip]');\ntooltip.init();\n\nconst scrollAnima = new _modules_scroll_anima_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"]('[data-anime=\"scroll\"]');\nscrollAnima.init();\n\n(0,_modules_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n(0,_modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n(0,_modules_funcionamento_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\n\n(0,_modules_fetch_animais_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])('../../animais.json', '.numeros-grid');\n(0,_modules_fetch_bitcoin_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"])('https://blockchain.info/ticker', '.bitcoin-preco');\n\n\n//# sourceURL=webpack://animais-eslint/./src/index.js?");

/***/ }),

/***/ "./src/modules/accordion.js":
/*!**********************************!*\
  !*** ./src/modules/accordion.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Accordion)\n/* harmony export */ });\nclass Accordion {\n  constructor(list) {\n    this.accordionList = document.querySelectorAll(list);\n    this.activeClass = 'ativo';\n  }\n\n  toggleAccordion(item) {\n    item.classList.toggle(this.activeClass);\n    item.nextElementSibling.classList.toggle(this.activeClass);\n  }\n\n  // adicionar os eventos ao accordion\n  addAccordionEvent() {\n    this.accordionList.forEach((item) => {\n      item.addEventListener('click', () => this.toggleAccordion(item));\n    });\n  }\n\n  // iniciar função\n  init() {\n    if (this.accordionList.length) {\n      // ativar primeiro item\n      this.toggleAccordion(this.accordionList[0]);\n      this.addAccordionEvent();\n    }\n  }\n}\n\n\n//# sourceURL=webpack://animais-eslint/./src/modules/accordion.js?");

/***/ }),

/***/ "./src/modules/anima-numeros.js":
/*!**************************************!*\
  !*** ./src/modules/anima-numeros.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AnimaNumeros)\n/* harmony export */ });\nclass AnimaNumeros {\n  constructor(numeros, observerTarget, observerClass) {\n    this.numeros = document.querySelectorAll(numeros);\n    this.observerTarget = document.querySelector(observerTarget);\n    this.observerClass = observerClass;\n\n    //  bind o this do objeto ao callback da mutaçao\n    this.hundleMutation = this.hundleMutation.bind(this);\n  }\n\n  /*  recebe um elemento do dom, com número em seu texto\n  incrementa a partir de 0 ate o numero final\n  */\n  static incrementarNumero(numero) {\n    const total = +numero.innerText;\n    const incremento = Math.floor(total / 100);\n    let start = 0;\n    const timer = setInterval(() => {\n      start += incremento;\n      numero.innerText = start;\n      if (start > total) {\n        numero.innerText = total;\n        clearInterval(timer);\n      }\n    }, 25 * Math.random());\n  }\n\n  // Ativa incrementar numero para cada numero selecionado do dom\n  animaNumeros() {\n    this.numeros.forEach((numero) => this.constructor.incrementarNumero(numero));\n  }\n\n  // função executada quando a mutação ocorrer\n  hundleMutation(mutation) {\n    if (mutation[0].target.classList.contains(this.observerClass)) {\n      this.observer.disconnect();\n      this.animaNumeros();\n    }\n  }\n\n  /*  Adiciona o MutationObserver para verificar\n    quando a classe ativo é adicionada ao element target\n  */\n  addMutationObeserver() {\n    this.observer = new MutationObserver(this.hundleMutation);\n    this.observer.observe(this.observerTarget, { attributes: true });\n  }\n\n  init() {\n    if (this.numeros.length && this.observerTarget) {\n      this.addMutationObeserver();\n    }\n    return this;\n  }\n}\n\n\n//# sourceURL=webpack://animais-eslint/./src/modules/anima-numeros.js?");

/***/ }),

/***/ "./src/modules/debouce.js":
/*!********************************!*\
  !*** ./src/modules/debouce.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ debounce)\n/* harmony export */ });\nfunction debounce(callback, delay) {\n  let timer;\n  return (...args) => {\n    if (timer) clearTimeout(timer);\n    timer = setTimeout(() => {\n      callback(...args);\n      timer = null;\n    }, delay);\n  };\n}\n\n\n//# sourceURL=webpack://animais-eslint/./src/modules/debouce.js?");

/***/ }),

/***/ "./src/modules/dropdown-menu.js":
/*!**************************************!*\
  !*** ./src/modules/dropdown-menu.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initDropdownMenu)\n/* harmony export */ });\n/* harmony import */ var _outsideClick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outsideClick.js */ \"./src/modules/outsideClick.js\");\n\n\nfunction initDropdownMenu() {\n  const dropdownMenu = document.querySelectorAll('[data-dropdown]');\n\n  function handleClick(event) {\n    event.preventDefault();\n    this.classList.add('active');\n    (0,_outsideClick_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, ['touchstart', 'click'], () => { // arrow function é o callback que sera chamado na função hundleOutsideClick;\n      this.classList.remove('active');\n    });\n  }\n\n  dropdownMenu.forEach((menu) => {\n    ['touchstart', 'click'].forEach((userEvent) => {\n      menu.addEventListener(userEvent, handleClick);\n    });\n  });\n}\n\n\n//# sourceURL=webpack://animais-eslint/./src/modules/dropdown-menu.js?");

/***/ }),

/***/ "./src/modules/fetch-animais.js":
/*!**************************************!*\
  !*** ./src/modules/fetch-animais.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ fetchAnimais)\n/* harmony export */ });\n/* harmony import */ var _anima_numeros_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./anima-numeros.js */ \"./src/modules/anima-numeros.js\");\n\n\nfunction fetchAnimais(url, target) {\n  const numerosGrid = document.querySelector(target);\n\n  /*  Cria a div contendo informações\n  com o total de animais\n  */\n  function createAnimal({ specie, total }) {\n    const animalHTML = `\n      <div class=\"numero-animal\">\n        <h3>${specie}</h3>\n        <span data-numero>${total}</span>\n      </div>\n    `;\n    return animalHTML;\n  }\n\n  //  anima os numeros de cada animal\n  function animaAnimaisNumero() {\n    const animaNumeros = new _anima_numeros_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('[data-numero]', '.numeros', 'ativo');\n    animaNumeros.init();\n  }\n\n  /*  puxa os animais atraves de um arquivon json\n  e cria cada animal utilizando createAnimal\n  */\n  async function createAnimais() {\n    try {\n      const response = await fetch(url);\n      const animais = await response.json();\n      animais.forEach((animal) => {\n        const divAnimal = createAnimal(animal);\n        numerosGrid.innerHTML += divAnimal;\n      });\n      //  Apos o fetch e json ativa a função para animar os numeros\n      animaAnimaisNumero();\n    } catch (erro) {\n      console.log(erro);\n    }\n  }\n\n  return createAnimais();\n}\n\n\n//# sourceURL=webpack://animais-eslint/./src/modules/fetch-animais.js?");

/***/ }),

/***/ "./src/modules/fetch-bitcoin.js":
/*!**************************************!*\
  !*** ./src/modules/fetch-bitcoin.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ fetchBitcoin)\n/* harmony export */ });\nfunction fetchBitcoin(url, target) {\n  fetch(url)\n    .then((res) => res.json())\n    .then(({ BRL: { buy } }) => {\n      const bitcoinPreco = document.querySelector(target);\n      bitcoinPreco.innerText = (1000 / buy).toFixed(4);\n    })\n    .catch((erro) => console.log(Error(erro)));\n}\n\n\n//# sourceURL=webpack://animais-eslint/./src/modules/fetch-bitcoin.js?");

/***/ }),

/***/ "./src/modules/funcionamento.js":
/*!**************************************!*\
  !*** ./src/modules/funcionamento.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFuncionamento)\n/* harmony export */ });\nfunction initFuncionamento() {\n  const funcionamento = document.querySelector('[data-semana]');\n  const diasSemana = funcionamento.dataset.semana.split(',').map(Number);\n  const horarioSemana = funcionamento.dataset.horario.split(',').map(Number);\n\n  const dataAgora = new Date();\n  const diaAgora = dataAgora.getDay();\n  const horarioAgora = dataAgora.getHours();\n\n  const semanaAberto = diasSemana.indexOf(diaAgora) !== -1;\n  const horarioAberto = (horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1]);\n\n  if (semanaAberto && horarioAberto) {\n    funcionamento.classList.add('aberto');\n  }\n}\n\n\n//# sourceURL=webpack://animais-eslint/./src/modules/funcionamento.js?");

/***/ }),

/***/ "./src/modules/menu-mobile.js":
/*!************************************!*\
  !*** ./src/modules/menu-mobile.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initMenuMobile)\n/* harmony export */ });\n/* harmony import */ var _outsideClick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outsideClick.js */ \"./src/modules/outsideClick.js\");\n\n\nfunction initMenuMobile() {\n  const menuButtton = document.querySelector('[data-menu=\"button\"]');\n  const menuList = document.querySelector('[data-menu=\"list\"]');\n  const eventos = ['click', 'touchstart'];\n\n  function openMenu() {\n    menuList.classList.add('active');\n    menuButtton.classList.add('active');\n\n    (0,_outsideClick_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(menuList, eventos, () => {\n      menuList.classList.remove('active');\n      menuButtton.classList.remove('active');\n    });\n  }\n\n  if (menuButtton) {\n    eventos.forEach((event) => {\n      menuButtton.addEventListener(event, openMenu);\n    });\n  }\n}\n\n\n//# sourceURL=webpack://animais-eslint/./src/modules/menu-mobile.js?");

/***/ }),

/***/ "./src/modules/modal.js":
/*!******************************!*\
  !*** ./src/modules/modal.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Modal)\n/* harmony export */ });\nclass Modal {\r\n  constructor(btnAbrir, btnFechar, container) {\r\n    this.botaoAbrir = document.querySelector(btnAbrir);\r\n    this.botaoFechar = document.querySelector(btnFechar);\r\n    this.containerModal = document.querySelector(container);\r\n\r\n    /* bind this ao callback para fazer referencia ao objeto da classe\r\n    */\r\n    this.eventToggleModal = this.eventToggleModal.bind(this);\r\n    this.cliqueForaModal = this.cliqueForaModal.bind(this);\r\n  }\r\n\r\n  toggleModal() {\r\n    this.containerModal.classList.toggle('ativo');\r\n  }\r\n\r\n  eventToggleModal(e) {\r\n    e.preventDefault();\r\n    this.toggleModal();\r\n  }\r\n\r\n  cliqueForaModal(e) {\r\n    if (e.target === this.containerModal) {\r\n      this.toggleModal(e);\r\n    }\r\n  }\r\n\r\n  addModalEvent() {\r\n    this.botaoAbrir.addEventListener('click', this.eventToggleModal);\r\n    this.botaoFechar.addEventListener('click', this.eventToggleModal);\r\n    this.containerModal.addEventListener('click', this.cliqueForaModal);\r\n  }\r\n\r\n  init() {\r\n    if (this.botaoAbrir && this.botaoFechar && this.containerModal) {\r\n      this.addModalEvent();\r\n    }\r\n    return this;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://animais-eslint/./src/modules/modal.js?");

/***/ }),

/***/ "./src/modules/outsideClick.js":
/*!*************************************!*\
  !*** ./src/modules/outsideClick.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ outsideClick)\n/* harmony export */ });\nfunction outsideClick(element, events, callback) {\n  const html = document.documentElement;\n  const outside = 'data-outside';\n\n  function hundleOutsideClick(event) {\n    if (!element.contains(event.target)) {\n      //  verifica se o elemento clicado foi fora do LI, caso sim ira remover\n      element.removeAttribute(outside);\n      events.forEach((userEvent) => {\n        html.removeEventListener(userEvent, hundleOutsideClick);\n      });\n      callback();\n    }\n  }\n\n  if (!element.hasAttribute(outside)) {\n    events.forEach((userEvent) => {\n      setTimeout(() => html.addEventListener(userEvent, hundleOutsideClick));\n    });\n    element.setAttribute(outside, '');\n  }\n}\n\n\n//# sourceURL=webpack://animais-eslint/./src/modules/outsideClick.js?");

/***/ }),

/***/ "./src/modules/scroll-anima.js":
/*!*************************************!*\
  !*** ./src/modules/scroll-anima.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ScrollAnima)\n/* harmony export */ });\n/* harmony import */ var _debouce_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./debouce.js */ \"./src/modules/debouce.js\");\n\n\nclass ScrollAnima {\n  constructor(sections) {\n    this.sections = document.querySelectorAll(sections);\n    this.windowMetade = window.innerHeight * 0.7;\n\n    this.checkDistance = (0,_debouce_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this.checkDistance.bind(this), 100);\n  }\n\n  //  pega a distancia de cada item com relação ao top do site\n  getDistance() {\n    this.distance = [...this.sections].map((section) => {\n      const offset = section.offsetTop;\n      return {\n        element: section,\n        offset: Math.floor(offset - this.windowMetade),\n      };\n    });\n  }\n\n  /* verifica a distancia em cada objeto\n  em relação ao scroll do site\n  */\n  checkDistance() {\n    console.log('teste');\n    this.distance.forEach((item) => {\n      if (window.scrollY > item.offset) {\n        item.element.classList.add('ativo');\n      } else if (item.element.classList.contains('ativo')) {\n        item.element.classList.remove('ativo');\n      }\n    });\n  }\n\n  init() {\n    if (this.sections.length) {\n      this.getDistance();\n      this.checkDistance();\n      window.addEventListener('scroll', this.checkDistance);\n    }\n    return this;\n  }\n\n  //  remove o event de scroll caso queira\n  stop() {\n    window.removeEventListener('scroll', this.checkDistance);\n  }\n}\n\n\n//# sourceURL=webpack://animais-eslint/./src/modules/scroll-anima.js?");

/***/ }),

/***/ "./src/modules/scroll-suave.js":
/*!*************************************!*\
  !*** ./src/modules/scroll-suave.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ScrollSuave)\n/* harmony export */ });\nclass ScrollSuave {\r\n  constructor(links, options) {\r\n    this.linksInternos = document.querySelectorAll(links);\r\n    if (options === undefined) {\r\n      this.options = { behavior: 'smooth', block: 'start' };\r\n    } else {\r\n      this.options = options;\r\n    }\r\n\r\n    this.scrollToSection = this.scrollToSection.bind(this);\r\n  }\r\n\r\n  scrollToSection(event) {\r\n    event.preventDefault();\r\n    const href = event.currentTarget.getAttribute('href');\r\n    const section = document.querySelector(href);\r\n    section.scrollIntoView(this.options);\r\n  }\r\n\r\n  addLinkEvent() {\r\n    this.linksInternos.forEach((link) => {\r\n      link.addEventListener('click', this.scrollToSection);\r\n    });\r\n  }\r\n\r\n  init() {\r\n    if (this.linksInternos.length) {\r\n      this.addLinkEvent();\r\n    }\r\n    return this;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://animais-eslint/./src/modules/scroll-suave.js?");

/***/ }),

/***/ "./src/modules/tabnav.js":
/*!*******************************!*\
  !*** ./src/modules/tabnav.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TabNav)\n/* harmony export */ });\nclass TabNav {\n  constructor(menu, content) {\n    this.tabMenu = document.querySelectorAll(menu);\n    this.tabContent = document.querySelectorAll(content);\n    this.activeClass = 'ativo';\n  }\n\n  activeTab(index) {\n    this.tabContent.forEach((content) => content.classList.remove(this.activeClass));\n    const direcao = this.tabContent[index].dataset.anime;\n    this.tabContent[index].classList.add(this.activeClass, direcao);\n  }\n\n  //  adicionar os eventos as tabs\n  addTabNavEvent() {\n    this.tabMenu.forEach((itemMenu, index) => {\n      itemMenu.addEventListener('click', () => this.activeTab(index));\n    });\n  }\n\n  init() {\n    if (this.tabMenu.length && this.tabContent.length) {\n      // ativar primeiro item\n      this.activeTab(0);\n      this.addTabNavEvent();\n    }\n  }\n}\n\n\n//# sourceURL=webpack://animais-eslint/./src/modules/tabnav.js?");

/***/ }),

/***/ "./src/modules/tooltip.js":
/*!********************************!*\
  !*** ./src/modules/tooltip.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Tooltip)\n/* harmony export */ });\nclass Tooltip {\n  constructor(tooltipsList) {\n    this.tooltips = document.querySelectorAll(tooltipsList);\n\n    //  bind do objeto da classe aos callbacks\n    this.onMouseLeave = this.onMouseLeave.bind(this);\n    this.onMouseMove = this.onMouseMove.bind(this);\n    this.onMouseOver = this.onMouseOver.bind(this);\n  }\n\n  // Move a tooltip com base em seus estilos\n  // de acordo com a posição do mouse\n  onMouseMove(e) {\n    this.tooltipBox.style.top = `${e.pageY + 20}px`;\n    if (e.pageX + 260 > window.innerWidth) {\n      this.tooltipBox.style.left = `${e.pageX - 200}px`;\n    } else {\n      this.tooltipBox.style.left = `${e.pageX + 20}px`;\n    }\n  }\n\n  // remove a tooltip e os eventos de mousemove e leave\n  onMouseLeave(e) {\n    this.tooltipBox.remove();\n    e.currentTarget.removeEventListener('mouseleave', this.onMouseLeave);\n    e.currentTarget.removeEventListener('mousemove', this.onMouseMove);\n  }\n\n  //  cria a tooltipbox e coloca no body\n  criarTooltip(elemento) {\n    const tooltipBox = document.createElement('div');\n    const text = elemento.getAttribute('aria-label');\n    tooltipBox.classList.add('tooltip');\n    tooltipBox.innerText = text;\n    document.body.appendChild(tooltipBox);\n    this.tooltipBox = tooltipBox;\n  }\n\n  //  cria a tooltip e adiciona os eventos de mousemove e leave ao target\n  onMouseOver(e) {\n    // cria a tooltipbox e coloca em uma propriedade\n    this.criarTooltip(e.currentTarget);\n    e.currentTarget.addEventListener('mousemove', this.onMouseMove);\n    e.currentTarget.addEventListener('mouseleave', this.onMouseLeave);\n  }\n\n  // adiciona os eventos de mouseover a cada tooltip do site\n  addTooltipEvents() {\n    this.tooltips.forEach((item) => {\n      item.addEventListener('mouseover', this.onMouseOver);\n    });\n  }\n\n  init() {\n    if (this.tooltips.length) {\n      this.addTooltipEvents();\n    }\n    return this;\n  }\n}\n\n\n//# sourceURL=webpack://animais-eslint/./src/modules/tooltip.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;