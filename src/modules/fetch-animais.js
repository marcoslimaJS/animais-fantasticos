import AnimaNumeros from './anima-numeros.js';

export default function initFetchAnimais() {
  function createAnimal({ specie, total }) {
    const animalHTML = `
      <div class="numero-animal">
        <h3>${specie}</h3>
        <span data-numero>${total}</span>
      </div>
    `;
    return animalHTML;
  }

  async function fetchAnimais(url) {
    try {
      const response = await fetch(url);
      const animais = await response.json();
      const numerosGrid = document.querySelector('.numeros-grid');
      animais.forEach((animal) => {
        const divAnimal = createAnimal(animal);
        numerosGrid.innerHTML += divAnimal;
      });
      const animaNumeros = new AnimaNumeros('[data-numero]', '.numeros', 'ativo');
      animaNumeros.init();
    } catch (erro) {
      console.log(erro);
    }
  }

  fetchAnimais('./animais.json');
}
