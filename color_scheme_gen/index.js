const inputColorEl = document.getElementById("color-input");
const colorSchemeEl = document.getElementById("color-scheme");
const getSchemeBtn = document.getElementById("get-scheme-btn");
const colorContainerEl = document.getElementById("color-container");
const navEl = document.getElementById("nav");

function renderColors(colorsData) {
  for (let i of colorsData.colors) {
    const colorEl = document.createElement("div");
    colorEl.classList.add("color");
    const colorHexEl = document.createElement("h2");
    colorHexEl.textContent = i.hex.clean;
    const colorNameEl = document.createElement("p");
    colorNameEl.textContent = i.name.value;
    colorEl.appendChild(colorHexEl);
    colorEl.appendChild(colorNameEl);
    colorEl.style.backgroundColor = i.hex.value;
    colorEl.style.color = i.contrast.value;
    colorContainerEl.appendChild(colorEl);
  }
}

function getColorScheme(color, scheme) {
  let url = `https://www.thecolorapi.com/scheme?hex=${color.slice(
    1
  )}&mode=${scheme}&count=5`;
  let options = {
    method: "GET",
  };
  fetch(url, options)
    .then(function (response) {
      return response.json();
    })
    .then(function (jsondata) {
      console.log(jsondata.colors);
      renderColors(jsondata);
    });
}
getSchemeBtn.addEventListener("click", function () {
  colorContainerEl.textContent = "";
  getColorScheme(inputColorEl.value, colorSchemeEl.value);
});

get;
