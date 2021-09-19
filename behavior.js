document.addEventListener("keydown", (e)=>{
    e.preventDefault();
    switch (e.code) {
        case "KeyA":
            let audioA = new Audio("audio/A.mp3");
            audioA.play();
            let pressA = document.querySelector(".A");
            pressA.classList.add("pressWhite");
            setTimeout(() => pressA.classList.remove("pressWhite"), 500);
            break;
        case "KeyS":
            let audioS = new Audio("audio/S.mp3");
            audioS.play();
            let pressS = document.querySelector(".S");
            pressS.classList.add("pressWhite");
            setTimeout(() => pressS.classList.remove("pressWhite"), 500);
            break;
        case "KeyD":
            let audioD = new Audio("audio/D.mp3");
            audioD.play();
            let pressD = document.querySelector(".D");
            pressD.classList.add("pressWhite");
            setTimeout(() => pressD.classList.remove("pressWhite"), 500);
            break;
        case "KeyF":
            let audioF = new Audio("audio/F.mp3");
            audioF.play();
            let pressF = document.querySelector(".F");
            pressF.classList.add("pressWhite");
            setTimeout(() => pressF.classList.remove("pressWhite"), 500);
            break;
        case "KeyG":
            let audioG = new Audio("audio/G.mp3");
            audioG.play();
            let pressG = document.querySelector(".G");
            pressG.classList.add("pressWhite");
            setTimeout(() => pressG.classList.remove("pressWhite"), 500);
            break;
        case "KeyH":
            let audioH = new Audio("audio/H.mp3");
            audioH.play();
            let pressH = document.querySelector(".H");
            pressH.classList.add("pressWhite");
            setTimeout(() => pressH.classList.remove("pressWhite"), 500);
            break;
        case "KeyJ":
            let audioJ = new Audio("audio/J.mp3");
            audioJ.play();
            let pressJ = document.querySelector(".J");
            pressJ.classList.add("pressWhite");
            setTimeout(() => pressJ.classList.remove("pressWhite"), 500);
            break;

        case "KeyW":
            let audioW = new Audio("audio/W.mp3");
            audioW.play();
            let pressW = document.querySelector(".W");
            pressW.classList.add("pressBlack");
            setTimeout(() => pressW.classList.remove("pressBlack"), 500);
            break;
        case "KeyE":
            let audioE = new Audio("audio/E.mp3");
            audioE.play();
            let pressE = document.querySelector(".E");
            pressE.classList.add("pressBlack");
            setTimeout(() => pressE.classList.remove("pressBlack"), 500);
            break;
        case "KeyT":
            let audioT = new Audio("audio/T.mp3");
            audioT.play();
            let pressT = document.querySelector(".T");
            pressT.classList.add("pressBlack");
            setTimeout(() => pressT.classList.remove("pressBlack"), 500);
            break;
        case "KeyY":
            let audioY = new Audio("audio/Y.mp3");
            audioY.play();
            let pressY = document.querySelector(".Y");
            pressY.classList.add("pressBlack");
            setTimeout(() => pressY.classList.remove("pressBlack"), 500);
            break;
        case "KeyU":
            let audioU = new Audio("audio/U.mp3");
            audioU.play();
            let pressU = document.querySelector(".U");
            pressU.classList.add("pressBlack");
            setTimeout(() => pressU.classList.remove("pressBlack"), 500);
            break;

        default:
            console.warn("That won't work");
            break;
    }

});