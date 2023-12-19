import initAnimaNumeros from "./anima-numeros.js";

export default function initFetchAnimals() {
  async function fetchAnimals(url) {
    const response = await fetch(url);
    const data = await response.json();
    const numberFetch = document.querySelector(".numeros-sobre");
    data.forEach((animal) => {
      const divAnimal = createAnimal(animal);
      numberFetch.appendChild(divAnimal);
    });
    initAnimaNumeros();
  }
  function createAnimal(animal) {
    const div = document.createElement("div");
    div.innerHTML = `<h3>${animal.especie}</h3> <span>${animal.total}</span>`;
    return div;
  }
  fetchAnimals("./animals-api.json");
}
