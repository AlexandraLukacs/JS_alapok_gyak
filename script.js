window.addEventListener("load", function () {
  elemekElerese1();
  elemekElerese2();
  elemekElerese3();
  elemekElerese4();
  elemekFormazasa1();
  esemenykezeles1();
  esemenykezeles2();
});

function elemekElerese1() {
  const ELEM = document.querySelectorAll("#f1")[0];
  console.log(ELEM.innerHTML);
}

function elemekElerese2() {
  const ELEM = document.querySelectorAll("#ide")[0];
  ELEM.innerHTML = "<p>Jó reggelt!</p>";
}

function elemekElerese3() {
  ELEM = document.querySelectorAll(".ide")[0];
  ELEM.innerHTML = "<p>Jó reggelt!</p>";
}

function elemekElerese4() {
  let txt = "<ul>";
  for (let index = 0; index < 5; index++) {
    txt += `<li> ${Math.floor(Math.random() * 20 + 10)} </li>`;
  }
  txt += "</ul>";

  ELEM = document.getElementsByClassName("lista")[0];
  ELEM.innerHTML = txt;
}

function elemekFormazasa1() {
  ELEM = document.querySelectorAll(".lista")[0];
  ELEM.classList.add("formazott");
}

function esemenykezeles1() {
  const buttonELEM = document.querySelectorAll(".lista")[0];
  console.log(buttonELEM);
  buttonELEM.addEventListener("click", kattintas);
}
function kattintas() {
    const buttonELEM = document.querySelectorAll(".lista")[0];
    document.getElementsByClassName("kattintasutan")[0].innerHTML =
    buttonELEM.innerHTML;
}


function esemenykezeles2() {
    ELEM = document.getElementsByClassName("feladat")[0];
    ELEM.innerHTML = "<button>OK</button>"
    ELEM = document.getElementsByClassName("feladat button")[0];
    const buttonELEM = document.querySelectorAll(".feladat button")[0];
    console.log(buttonELEM);
    buttonELEM.addEventListener("click", kattintas2);
  }
  function kattintas2() {
    const buttonELEM = document.querySelectorAll(".feladat")[0];
    document.getElementsByClassName("feladat")[0].innerHTML +=
    buttonELEM.innerHTML = "<div><img src='unnamed.gif' alt='tuta'></div>";
}

function esemenykezeles3() {
    
  }