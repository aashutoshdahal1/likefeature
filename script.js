let container = document.querySelector(".container");
let showimagebtn = document.querySelector("#show_heart_img");
let likeimageloadcontainer = document.querySelector(".likeimageloadcontainer");
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
  container.addEventListener("click", (e) => {
    let hearthtml = `<i class="fa-solid fa-heart" id="heart"></i>`;
    let imgclicked = e.target.parentElement;

    imgclicked.innerHTML += hearthtml;

    setTimeout(() => {
      imgclicked.children[1].remove();
    }, 2000);
    StoreLikeImg(e);
  });
}

function StoreLikeImg(e) {
  let likedimg = e.target.src;
  let img = document.createElement("img");
  img.src = likedimg;
  img.setAttribute("class", "likedimage");
  console.log(img);
  likeimageloadcontainer.appendChild(img);
}
