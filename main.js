const portflioBtn = document.getElementById("draw-button");
const showTxt = document.getElementById("show");

const portfolioTexts = [{ name: "Vegetarian gyoza" }];

function drawText() {
  let index = Math.floor(Math.random() * portfolioTexts.length);
  let txt = portfolioTexts[index].name;
  return txt;
}
let paragraph = document.createElement("p");
function showText() {
  console.log("ok");
  paragraph.textContent = "";
  paragraph.textContent = `Dzisiaj zjesz: ${drawText()}`;
  showTxt.classList.add("showText");
  showTxt.appendChild(paragraph);
}

portflioBtn.addEventListener("click", showText);
