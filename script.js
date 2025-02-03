let container = document.querySelector(".container");

function displayUI() {
  for (let i = 1; i <= 6; i++) {
    let randomNumber = Math.floor(Math.random() * 1000);
    let imagehtml = `<div class="imgcontainer">
        <img src="https://robohash.org/${randomNumber}.png" alt="" />
      </div>`;
    container.innerHTML += imagehtml;
  }
}
document.addEventListener("DOMContentLoaded", displayUI);



