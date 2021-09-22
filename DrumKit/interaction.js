let percussionA = document.querySelector(`div[data-key="65"]`);
let percussionS = document.querySelector(`div[data-key="83"]`);
let percussionD = document.querySelector(`div[data-key="68"]`);
let percussionF = document.querySelector(`div[data-key="70"]`);
let percussionG = document.querySelector(`div[data-key="71"]`);
let percussionH = document.querySelector(`div[data-key="72"]`);
let percussionJ = document.querySelector(`div[data-key="74"]`);
let percussionK = document.querySelector(`div[data-key="75"]`);
let percussionL = document.querySelector(`div[data-key="76"]`);

window.addEventListener("keydown", (e) =>{
  e.preventDefault();
  let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  let getKey = document.querySelector(`div[data-key="${e.keyCode}"]`);
  audio.currentTime = 0;
  audio.play();
  getKey.classList.add("playing");
  // setTimeout(() => getKey.classList.remove("playing"), 300);
  getKey.addEventListener("transitionend", function(tEnd){
    if (tEnd.propertyName !== 'transform') return;
    tEnd.target.classList.remove('playing');
  });
  
});

percussionA.addEventListener("click", function(e){
  let audio = document.querySelector(`audio[data-key="65"]`);
  let key = document.querySelector(`div[data-key="65"]`);
  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
  key.addEventListener("transitionend", function(tEnd){
    if(tEnd.propertyName !== "transform") return;
    tEnd.target.classList.remove("playing");
  });
});

percussionS.addEventListener("click", function(e){
  let audio = document.querySelector(`audio[data-key="83"]`);
  let key = document.querySelector(`div[data-key="83"]`);
  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
  key.addEventListener("transitionend", function(tEnd){
    if(tEnd.propertyName !== "transform") return;
    tEnd.target.classList.remove("playing");
  });
});

percussionD.addEventListener("click", function(e){
  let audio = document.querySelector(`audio[data-key="68"]`);
  let key = document.querySelector(`div[data-key="68"]`);
  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
  key.addEventListener("transitionend", function(tEnd){
    if(tEnd.propertyName !== "transform") return;
    tEnd.target.classList.remove("playing");
  });
});

percussionF.addEventListener("click", function(e){
  let audio = document.querySelector(`audio[data-key="70"]`);
  let key = document.querySelector(`div[data-key="70"]`);
  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
  key.addEventListener("transitionend", function(tEnd){
    if(tEnd.propertyName !== "transform") return;
    tEnd.target.classList.remove("playing");
  });
});

percussionG.addEventListener("click", function(e){
  let audio = document.querySelector(`audio[data-key="71"]`);
  let key = document.querySelector(`div[data-key="71"]`);
  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
  key.addEventListener("transitionend", function(tEnd){
    if(tEnd.propertyName !== "transform") return;
    tEnd.target.classList.remove("playing");
  });
});

percussionH.addEventListener("click", function(e){
  let audio = document.querySelector(`audio[data-key="72"]`);
  let key = document.querySelector(`div[data-key="72"]`);
  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
  key.addEventListener("transitionend", function(tEnd){
    if(tEnd.propertyName !== "transform") return;
    tEnd.target.classList.remove("playing");
  });
});

percussionJ.addEventListener("click", function(e){
  let audio = document.querySelector(`audio[data-key="74"]`);
  let key = document.querySelector(`div[data-key="74"]`);
  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
  key.addEventListener("transitionend", function(tEnd){
    if(tEnd.propertyName !== "transform") return;
    tEnd.target.classList.remove("playing");
  });
});

percussionK.addEventListener("click", function(e){
  let audio = document.querySelector(`audio[data-key="75"]`);
  let key = document.querySelector(`div[data-key="75"]`);
  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
  key.addEventListener("transitionend", function(tEnd){
    if(tEnd.propertyName !== "transform") return;
    tEnd.target.classList.remove("playing");
  });
});

percussionL.addEventListener("click", function(e){
  let audio = document.querySelector(`audio[data-key="76"]`);
  let key = document.querySelector(`div[data-key="76"]`);
  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
  key.addEventListener("transitionend", function(tEnd){
    if(tEnd.propertyName !== "transform") return;
    tEnd.target.classList.remove("playing");
  });
});






