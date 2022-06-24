let menuMobile= document.getElementById("menu-mobile");
let buttonMobile = document.getElementById("button-mobile");
let ceepimg = document.querySelector(".section-one-slider");
let voltar = document.querySelector("#button-voltar");

let stats = false; 
let menu = true;

function abrirMenu() {
    if(stats == false ) {
        menuMobile.style.visibility = "visible";
        menuMobile.style.top = "59px";
        stats = true;
    } else {
        menuMobile.style.visibility = "hidden";
        menuMobile.style.top = "-50%";
        stats = false;
    };
};

function atualizarImg() {
    if(menuMobile.style.visibility == "visible") {
        buttonMobile.src = "./img/perto.png";
    } else {
        buttonMobile.src = "./img/botaomenu.png";
    };
};

var slideIndex = 1;

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
    var x = document.getElementsByClassName("section-one-slides");

    if (n > x.length) {
        slideIndex = 1
    };

    if (n < 1) {
        slideIndex = x.length
    };

    for (let i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    };

    x[slideIndex-1].style.display = "block";
}

buttonMobile.addEventListener("click", abrirMenu);
buttonMobile.addEventListener("click", atualizarImg);
showDivs(slideIndex);






