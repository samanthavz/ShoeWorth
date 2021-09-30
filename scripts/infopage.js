const loadingDiv = document.getElementById("loading-div");
const loadingText = document.getElementById("loading-text");
const infoPage = document.getElementById("infopage");

// loadingsscreen
window.onload = function () {
  setTimeout(() => {
    loadingText.innerHTML = "Calculating price prediction...";
    redirect();
  }, 3000);
};

//switch to infopage
function redirect () {
  setTimeout(() => {
    loadingDiv.classList.add("invisible");
    infoPage.classList.replace("invisible", "visible");
  }, 4000);
}

const text = document.getElementById("info-text")
const section2 = document.getElementById("section2");
const deco = document.getElementById("deco");
const arrow = document.getElementById("arrow");
const arrow2 = document.getElementById("arrow2");

// arrow up function
function undo() {
  text.innerHTML =
    "This Jordan 1 consists of a white leather upper with Court Purple overlays and black detailing. A black Swoosh and Wings logo...";
  section2.classList.replace("visible", "invisible");
  deco.classList.replace("decoration2", "decoration");

  arrow2.classList.replace("flex", "invisible");
  arrow.classList.replace("invisible", "flex");
}

//arrow down function
function jump () {
  text.innerHTML = "This Jordan 1 consists of a white leather upper with Court Purple overlays and black detailing. A black Swoosh and Wings logo, white midsole, and Court Purple outsole completes the design. These sneakers released in April of 2020 and retailed for $170.";
  section2.classList.replace("invisible", "visible");
  deco.classList.replace("decoration", "decoration2");

  arrow.classList.replace("flex", "invisible");
  arrow2.classList.replace("invisible", "flex");
}
