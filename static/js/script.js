let menuMobile= document.getElementById("menu-mobile");
let buttonMobile = document.getElementById("button-mobile");
let ceepimg = document.querySelector(".section-one-ceep-img");
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

buttonMobile.addEventListener("click", abrirMenu);
buttonMobile.addEventListener("click", atualizarImg);







