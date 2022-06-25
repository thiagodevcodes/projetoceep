let menuMobile= document.getElementById("menu-mobile");
let buttonMobile = document.getElementById("button-mobile");
let ceepimg = document.querySelector(".home-banner-slider");
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
    var x = document.getElementsByClassName("home-slider-img");

    if (n > x.length) {
        slideIndex = 1
    };

    if (n < 1) {
        slideIndex = x.length
    };

    for (let i = 0; i < x.length; i++) {
        x[i].style.opacity = "1";
    };

    x[slideIndex-1].style.opacity = "0";
}


buttonMobile.addEventListener("click", abrirMenu);
buttonMobile.addEventListener("click", atualizarImg);
showDivs(slideIndex);

/*
var slideIndex = 1;

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
    var x = document.getElementsByClassName("home-banner-slides");

    if (n > x.length) {
        slideIndex = 1
    };

    if (n < 1) {
        slideIndex = x.length
    };

    for (let i = 0; i < x.length; i++) {
        x[i].style.opacity = "0";
    };

    x[slideIndex-1].style.opacity = "1";

}
*/






