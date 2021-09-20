let pressA = document.querySelector(".A");
let pressS = document.querySelector(".S");
let pressD = document.querySelector(".D");
let pressF = document.querySelector(".F");
let pressG = document.querySelector(".G");
let pressH = document.querySelector(".H");
let pressJ = document.querySelector(".J");
let pressW = document.querySelector(".W");
let pressE = document.querySelector(".E");
let pressT = document.querySelector(".T");
let pressY = document.querySelector(".Y");
let pressU = document.querySelector(".U");

function interactionA(){
    let audioA = new Audio("audio/A.mp3");
    audioA.play();
    pressA.classList.add("pressWhite");
    setTimeout(() => pressA.classList.remove("pressWhite"), 500);
}
function interactionS(){
    let audioS = new Audio("audio/S.mp3");
    audioS.play();
    pressS.classList.add("pressWhite");
    setTimeout(() => pressS.classList.remove("pressWhite"), 500);
}
function interactionD(){
    let audioD = new Audio("audio/D.mp3");
    audioD.play();
    pressD.classList.add("pressWhite");
    setTimeout(() => pressD.classList.remove("pressWhite"), 500);
}
function interactionF(){
    let audioF = new Audio("audio/F.mp3");
    audioF.play();
    pressF.classList.add("pressWhite");
    setTimeout(() => pressF.classList.remove("pressWhite"), 500);
}
function interactionG(){
    let audioG = new Audio("audio/G.mp3");
    audioG.play();
    pressG.classList.add("pressWhite");
    setTimeout(() => pressG.classList.remove("pressWhite"), 500);
}
function interactionH(){
    let audioH = new Audio("audio/H.mp3");
    audioH.play();
    pressH.classList.add("pressWhite");
    setTimeout(() => pressH.classList.remove("pressWhite"), 500);
}
function interactionJ(){
    let audioJ = new Audio("audio/J.mp3");
    audioJ.play();
    pressJ.classList.add("pressWhite");
    setTimeout(() => pressJ.classList.remove("pressWhite"), 500);
}
function interactionW(){
    let audioW = new Audio("audio/W.mp3");
    audioW.play();
    pressW.classList.add("pressBlack");
    setTimeout(() => pressW.classList.remove("pressBlack"), 500);
}
function interactionE(){
    let audioE = new Audio("audio/E.mp3");
    audioE.play();
    pressE.classList.add("pressBlack");
    setTimeout(() => pressE.classList.remove("pressBlack"), 500);
}
function interactionT(){
    let audioT = new Audio("audio/T.mp3");
    audioT.play();
    pressT.classList.add("pressBlack");
    setTimeout(() => pressT.classList.remove("pressBlack"), 500);
}
function interactionY(){
    let audioY = new Audio("audio/Y.mp3");
    audioY.play();
    pressY.classList.add("pressBlack");
    setTimeout(() => pressY.classList.remove("pressBlack"), 500);
}
function interactionU(){
    let audioU = new Audio("audio/U.mp3");
    audioU.play();
    pressU.classList.add("pressBlack");
    setTimeout(() => pressU.classList.remove("pressBlack"), 500);
}

document.addEventListener("keydown", (e)=>{
    e.preventDefault();
    switch (e.code) {
        case "KeyA":
            interactionA();
            break;
        case "KeyS":
            interactionS();
            break;
        case "KeyD":
            interactionD();
            break;
        case "KeyF":
            interactionF();
            break;
        case "KeyG":
            interactionG();
            break;
        case "KeyH":
            interactionH();
            break;
        case "KeyJ":
            interactionJ();
            break;

        case "KeyW":
            interactionW();
            break;
        case "KeyE":
            interactionE();
            break;
        case "KeyT":
            interactionT();
            break;
        case "KeyY":
            interactionY();
            break;
        case "KeyU":
            interactionU();
            break;

        default:
            console.warn("That won't work");
            break;
    }
});

pressA.addEventListener("click", () => {interactionA()});
pressS.addEventListener("click", () => {interactionS()});
pressD.addEventListener("click", () => {interactionD()});
pressF.addEventListener("click", () => {interactionF()});
pressG.addEventListener("click", () => {interactionG()});
pressH.addEventListener("click", () => {interactionH()});
pressJ.addEventListener("click", () => {interactionJ()});
pressW.addEventListener("click", () => {interactionW()});
pressE.addEventListener("click", () => {interactionE()});
pressT.addEventListener("click", () => {interactionT()});
pressY.addEventListener("click", () => {interactionY()});
pressU.addEventListener("click", () => {interactionU()});




























