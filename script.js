let decision = document.querySelector(".DecisionText");

let arrHT = ["HEAD", "TAIL"];
let arrYN = ["YES", "NO"];

function oneTwo() {
  return Math.floor(Math.random() * 2);
}

function headTail() {
  decision.innerHTML = arrHT[oneTwo()];
}
function yesNO() {
  decision.innerHTML = arrYN[oneTwo()];
}
function reset() {
  decision.innerHTML = "";
}
