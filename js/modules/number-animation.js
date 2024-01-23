export default function initNumberAnimation() {
  const numbers = document.querySelectorAll("[data-number] span");
  numbers.forEach((number) => {
    const total = +number.innerHTML;
    const increment = Math.floor(total / 100);
    let start = 0;
    const timer = setInterval(() => {
      start = start + increment;
      number.innerHTML = start;
      if (start > total) {
        number.innerHTML = total;
        clearInterval(timer);
      }
    }, 25 * Math.random());
  });
  function handleMutation() {}
  const observerTarget = document.querySelector(".numbers");
  const observer = new MutationObserver(handleMutation);
  observer.observer(observerTarget, { attributes: true });
}
