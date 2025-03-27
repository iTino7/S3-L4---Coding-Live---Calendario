const createNumber = (e) => {
  const tabellone = document.getElementById("tabellone");
  for (let i = 0; i < 90; i++) {
    const cellDiv = document.createElement("div");
    cellDiv.classList.add("number");
    const h2 = document.createElement("h2");
    h2.innerHTML = i + 1;

    cellDiv.appendChild(h2);
    tabellone.appendChild(cellDiv);
  }

  const randomNumber = () => {
    const numbers = document.querySelectorAll(".number");
    const randomIndex = Math.floor(Math.random() * numbers.length);
    numbers[randomIndex].style.backgroundColor = "black";
    numbers[randomIndex].style.color = "white";
  };

  const button = document.getElementById("containerButton");

  button.addEventListener("click", randomNumber);
};

window.addEventListener("DOMContentLoaded", () => {
  createNumber();
});
