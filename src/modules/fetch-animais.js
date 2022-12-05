import AnimaNumeros from './anima-numeros.js';

export default function fetchAnimais(url, target) {
  const numerosGrid = document.querySelector(target);

  /*  Cria a div contendo informações
  com o total de animais
  */
  function createAnimal({ specie, total }) {
    const animalHTML = `
      <div class="numero-animal">
        <h3>${specie}</h3>
        <span data-numero>${total}</span>
      </div>
    `;
    return animalHTML;
  }

  //  anima os numeros de cada animal
  function animaAnimaisNumero() {
    const animaNumeros = new AnimaNumeros('[data-numero]', '.numeros', 'ativo');
    animaNumeros.init();
  }

  /*  puxa os animais atraves de um arquivon json
  e cria cada animal utilizando createAnimal
  */
  async function createAnimais() {
    try {
      const response = await fetch(url);
      const animais = await response.json();
      animais.forEach((animal) => {
        const divAnimal = createAnimal(animal);
        numerosGrid.innerHTML += divAnimal;
      });
      //  Apos o fetch e json ativa a função para animar os numeros
      animaAnimaisNumero();
    } catch (erro) {
      console.log(erro);
    }
  }

  return createAnimais();
}
