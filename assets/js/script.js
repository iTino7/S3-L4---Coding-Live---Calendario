const appointments = [];

const createNumber = (e) => {
  const tabellone = document.getElementById("tabellone");
  for (let i = 0; i < 90; i++) {
    appointments.push([]);

    const cellDiv = document.createElement("div");
    cellDiv.classList.add("number");
    const h2 = document.createElement("h2");
    h2.innerHTML = i + 1;

    cellDiv.appendChild(h2);
    tabellone.appendChild(cellDiv);
  }
};

createNumber();
