$("load", function () {
  elemekElerese1();
  elemekElerese2();
  elemekElerese3();
  elemekElerese4();
  elemekFormazasa1();
  esemenykezeles1();
  esemenykezeles2();
});

function elemekElerese1() {
  const ELEM = $("section h2");
  console.log(ELEM.html());
}

function elemekElerese2() {
  const ELEM = $("#ide");
  ELEM.html("<p>Jó reggelt!</p>");
}

function elemekElerese3() {
  const ELEM = $(".ide");
  ELEM.html("<p>Jó reggelt!</p>");
}

function elemekElerese4() {
  const ELEM = $(".lista");
  let txt = "<ul>";
  for (let index = 0; index < 5; index++) {
    txt += `<li> ${Math.floor(Math.random() * 20 + 10)} </li>`;
  }
  txt += "</ul>";

  return ELEM.eq(0).html(txt);
}

function elemekFormazasa1() {
  const ELEM = $(".lista");
  ELEM.addClass("formazott");
}

function esemenykezeles1() {
  const buttonELEM = $(".lista");
  console.log(buttonELEM.html());
  $(".lista").on("click", kattintas);
}
function kattintas() {
    const buttonELEM = $(".lista");
    $("kattintasutan").eq(0).html() = buttonELEM.html();
}


function esemenykezeles2() {
    ELEM = $("feladat");
    ELEM.html("<button>OK</button>");
    ELEM = $("feladat button");
    const buttonELEM = $(".feladat button");
    console.log(buttonELEM);
    $(".feladat button").on("click", kattintas2);
  }
  function kattintas2() {
    const buttonELEM = $(".feladat");
    document.$("feladat").eq(0).html() += buttonELEM.html("<div><img src='unnamed.gif' alt='tuta'></div>");
}

function esemenykezeles3() {
    
  }