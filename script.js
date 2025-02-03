let container = document.querySelector(".container");
let showimagebtn = document.querySelector("#show_heart_img");
let likeimageloadcontainer = document.querySelector(".likeimageloadcontainer");
let showbtn = document.querySelector(".likedimagecontainer p");
let likedimgsarray = [];
let previousSavedImgArray = [];
function displayUI() {
  for (let i = 1; i <= 6; i++) {
    let randomNumber = Math.floor(Math.random() * 1000);
    let imagehtml = `<div class="imgcontainer">
        <img src="https://robohash.org/${randomNumber}.png" alt="" id ="unliked" />
      </div>`;
    container.innerHTML += imagehtml;
  }
  likeFeature();
  let likedImagesSavedPrevious =
    JSON.parse(localStorage.getItem("likedImages")) || [];
  likedImagesSavedPrevious.forEach((e) => {
    previousSavedImgArray.push(e);
  });
  console.log(previousSavedImgArray);
  previousSavedImgArray.forEach((e) => {
    let likedimg = e;
    let img = document.createElement("img");
    img.src = likedimg;
    img.setAttribute("class", "likedimage");
    console.log(img);
    likeimageloadcontainer.appendChild(img);
  });
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
    setTimeout(() => {
      likeimageloadcontainer.style.display = "block";
    }, 200);
    setTimeout(() => {
      likeimageloadcontainer.style.display = "none";
    }, 2000);
    if (!likedimgsarray.includes(e.target.src)) {
      likedimgsarray.push(e.target.src);
      previousSavedImgArray.push(e.target.src);
      localStorage.setItem(
        "likedImages",
        JSON.stringify(previousSavedImgArray)
      );
      StoreLikeImg(e);
    }
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
let flag = true;
showbtn.addEventListener("click", () => {
  if (flag) {
    likeimageloadcontainer.style.display = "block";
    flag = false;
  } else {
    likeimageloadcontainer.style.display = "none";
    flag = true;
  }
});
