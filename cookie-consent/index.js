const modal = document.getElementById("modal");
const mainEL = document.getElementById("main");
const declineBtn = document.getElementById("decline-btn");
setTimeout(function () {
  modal.style.display = "inline";
}, 1500);

const modalCloseEl = document.getElementById("modal-close-btn");
modalCloseEl.addEventListener("click", function () {
  modal.style.display = "none";
});

const formEl = document.getElementById("form");
const modalMsgEl = document.getElementById("modal-text");
const modalChoiceBtns = document.getElementById("modalChoiceBtns");
declineBtn.addEventListener("mouseenter", function () {
  modalChoiceBtns.classList.toggle("reverse");
});

formEl.addEventListener("submit", function (event) {
  event.preventDefault();
  const consentFormData = new FormData(formEl);
  const userName = consentFormData.get("name");
  modalMsgEl.innerHTML = `
    <div class="modal-inner-loading">
    <img src="images/loading.svg" class="loading">
    <p id="uploadText">
        Uploading your data to the dark web...
    </p>
</div>
    `;
  setTimeout(function () {
    document.getElementById("uploadText").textContent = "Making the sale...";
  }, 1500);
  setTimeout(function () {
    document.getElementById(
      "modal-inner"
    ).innerHTML = `<h2>Thanks you <span class="modal-display-name">${userName}</span> </h2>
    <p>We just sold the rights to your eternal soul.</p>
    <div class="idiot-gif">
        <img class="img-gif" src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExa3doajBra3JjYnRrZWVnaTJ1NmpqOHU3eGo3NDUzODF0dXQwa21nNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/FGbeYTiFyLYmQ/giphy.gif">
    </div>
    `;
    modalCloseEl.disabled = false;
  }, 3000);
});
