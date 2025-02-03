let container = document.querySelector(".container");

function displayUI() {
  for (let i = 1; i <= 6; i++) {
    let randomNumber = Math.floor(Math.random() * 1000);
    let imagehtml = `<div class="imgcontainer">
        <img src="https://robohash.org/${randomNumber}.png" alt="" />
      </div>`;
    container.innerHTML += imagehtml;
  }
  likeFeature();
}
document.addEventListener("DOMContentLoaded", displayUI);

function likeFeature() {
  container.addEventListener("dblclick", (e) => {
    let hearthtml = `<i class="fa-solid fa-heart" id="heart"></i>`;
    let imgclicked = e.target.parentElement;

    imgclicked.innerHTML += hearthtml;

    setTimeout(() => {
      imgclicked.children[1].remove();
    }, 2000);
  });
}
