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
    // let audioA = document.querySelector("audio.record_A");
    audioA.currentTime = 0;
    audioA.play();
    pressA.classList.add("pressWhite");
    // setTimeout(() => pressA.classList.remove("pressWhite"), 500);
    pressA.addEventListener("transitionend", function(tEnd){
        if(tEnd.propertyName !== "transform") return;
        tEnd.target.classList.remove("pressWhite");
    });
}
function interactionS(){
    let audioS = new Audio("audio/S.mp3");
    // let audioS = document.querySelector("audio.record_S");
    audioS.currentTime = 0;
    audioS.play();
    pressS.classList.add("pressWhite");
    // setTimeout(() => pressS.classList.remove("pressWhite"), 500);
    pressS.addEventListener("transitionend", function(tEnd){
        if(tEnd.propertyName !== "transform") return;
        tEnd.target.classList.remove("pressWhite");
    });
}
function interactionD(){
    let audioD = new Audio("audio/D.mp3");
    // let audioD = document.querySelector("audio.record_D");
    audioD.currentTime = 0;
    audioD.play();
    pressD.classList.add("pressWhite");
    // setTimeout(() => pressD.classList.remove("pressWhite"), 500);
    pressD.addEventListener("transitionend", function(tEnd){
        if(tEnd.propertyName !== "transform") return;
        tEnd.target.classList.remove("pressWhite");
    });
}
function interactionF(){
    let audioF = new Audio("audio/F.mp3");
    // let audioF = document.querySelector("audio.record_F");
    audioF.currentTime = 0;
    audioF.play();
    pressF.classList.add("pressWhite");
    // setTimeout(() => pressF.classList.remove("pressWhite"), 500);
    pressF.addEventListener("transitionend", function(tEnd){
        if(tEnd.propertyName !== "transform") return;
        tEnd.target.classList.remove("pressWhite");
    });
}
function interactionG(){
    let audioG = new Audio("audio/G.mp3");
    // let audioG = document.querySelector("audio.record_G");
    audioG.currentTime = 0;
    audioG.play();
    pressG.classList.add("pressWhite");
    // setTimeout(() => pressG.classList.remove("pressWhite"), 500);
    pressG.addEventListener("transitionend", function(tEnd){
        if(tEnd.propertyName !== "transform") return;
        tEnd.target.classList.remove("pressWhite");
    });
}
function interactionH(){
    let audioH = new Audio("audio/H.mp3");
    // let audioH = document.querySelector("audio.record_H");
    audioH.currentTime = 0;
    audioH.play();
    pressH.classList.add("pressWhite");
    // setTimeout(() => pressH.classList.remove("pressWhite"), 500);
    pressH.addEventListener("transitionend", function(tEnd){
        if(tEnd.propertyName !== "transform") return;
        tEnd.target.classList.remove("pressWhite");
    });
}
function interactionJ(){
    let audioJ = new Audio("audio/J.mp3");
    // let audioJ = document.querySelector("audio.record_J");
    audioJ.currentTime = 0;
    audioJ.play();
    pressJ.classList.add("pressWhite");
    // setTimeout(() => pressJ.classList.remove("pressWhite"), 500);
    pressJ.addEventListener("transitionend", function(tEnd){
        if(tEnd.propertyName !== "transform") return;
        tEnd.target.classList.remove("pressWhite");
    });
}
function interactionW(){
    let audioW = new Audio("audio/W.mp3");
    // let audioW = document.querySelector("audio.record_W");
    audioW.currentTime = 0;
    audioW.play();
    pressW.classList.add("pressBlack");
    // setTimeout(() => pressW.classList.remove("pressBlack"), 500);
    pressW.addEventListener("transitionend", function(tEnd){
        if(tEnd.propertyName !== "transform") return;
        tEnd.target.classList.remove("pressBlack");
    });
}
function interactionE(){
    let audioE = new Audio("audio/E.mp3");
    // let audioE = document.querySelector("audio.record_E");
    audioE.currentTime = 0;
    audioE.play();
    pressE.classList.add("pressBlack");
    // setTimeout(() => pressE.classList.remove("pressBlack"), 500);
    pressE.addEventListener("transitionend", function(tEnd){
        if(tEnd.propertyName !== "transform") return;
        tEnd.target.classList.remove("pressBlack");
    });
}
function interactionT(){
    let audioT = new Audio("audio/T.mp3");
    // let audioT = document.querySelector("audio.record_T");
    audioT.currentTime = 0;
    audioT.play();
    pressT.classList.add("pressBlack");
    // setTimeout(() => pressT.classList.remove("pressBlack"), 500);
    pressT.addEventListener("transitionend", function(tEnd){
        if(tEnd.propertyName !== "transform") return;
        tEnd.target.classList.remove("pressBlack");
    });
}
function interactionY(){
    let audioY = new Audio("audio/Y.mp3");
    // let audioY = document.querySelector("audio.record_Y");
    audioY.currentTime = 0;
    audioY.play();
    pressY.classList.add("pressBlack");
    // setTimeout(() => pressY.classList.remove("pressBlack"), 500);
    pressY.addEventListener("transitionend", function(tEnd){
        if(tEnd.propertyName !== "transform") return;
        tEnd.target.classList.remove("pressBlack");
    });
}
function interactionU(){
    let audioU = new Audio("audio/U.mp3");
    // let audioU = document.querySelector("audio.record_U");
    audioU.currentTime = 0;
    audioU.play();
    pressU.classList.add("pressBlack");
    // setTimeout(() => pressU.classList.remove("pressBlack"), 500);
    pressU.addEventListener("transitionend", function(tEnd){
        if(tEnd.propertyName !== "transform") return;
        tEnd.target.classList.remove("pressBlack");
    });
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