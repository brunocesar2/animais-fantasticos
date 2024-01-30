import initNumberAnimation from "./number-animation.js";

export default function initFetchNumberAnimation() {
  async function fetchNumberAnimation(url) {
    const response = await fetch(url);
    const json = await response.json();
    const numerosSobre = document.querySelector(".numeros-sobre");
    json.forEach((animal) => {
      const divAnimal = createAnimal(animal);
      numerosSobre.appendChild(divAnimal);
    });
    initNumberAnimation();
  }
  fetchNumberAnimation("./number-animation-api.json");
  function createAnimal(animal) {
    console.log(animal);
    const div = document.createElement("div");
    div.innerHTML = `<h3>${animal.specie}</h3><span>${animal.total}</span>`;
    return div;
  }
}
