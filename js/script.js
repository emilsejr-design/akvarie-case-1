// Spil parameterne 
let visStartside = true;
let score = 0;
let maxScore = 100;

//Opdater progressbar
function updateProgressbar(){
    let procent = (score / maxScore) * 100;
    document.getElementById("progressBar").style.width = procent + "%";

    if(score >= maxScore){  // Når spillet er færdigt
    visSlutside();
    }
}

// BOBLER
function createBubble() {
    const bubble = document.createElement("div");
    bubble.classList.add("bubble");

    // Giver dem random størrelse
    const size = Math.random() * 20 + 10; 
    bubble.style.width = size + "px";
    bubble.style.height = size + "px";

    // Giver dem random position
    bubble.style.left = Math.random() * window.innerWidth + "px";

    // Så de stiger med random hastighed
    const duration = Math.random() * 5 + 5;
    bubble.style.animationDuration = duration + "s";

    document.getElementById("bubbleContainer").appendChild(bubble);

    // Fjern boblen efter animation
    setTimeout(() => {
        bubble.remove();
    }, duration * 1000);
}
// Lav mange bobler løbende
setInterval(createBubble, 300);


//LYD
function playBubbleSound(){
    let sound = new Audio("bubble.mp3");
    sound.play();
    }

    // Lyd på FortællerFisken på forsiden
    const heroFishSpeak = document.getElementById("heltelyd");
    function playSoundHeroFish() {
        heroFishSpeak.currentTime = 0;
        heroFishSpeak.play();
    }
    addEventListener("click", playSoundHeroFish);



// TRASH
function removeTrash(trashElement){
    trashElement.remove();
    score += 20;
    updateProgressbar();
}



let speed = 2;

function swim() {
  x += speed;

  // Vend når kanten rammes
  if (x > window.innerWidth - 100 || x < 0) {
    speed *= -1;
    fish.style.transform = speed > 0 ? "scaleX(1)" : "scaleX(-1)";
  }

  // Blød svømmebevægelse
  y += Math.sin(x * 0.05);

  fish.style.left = x + "px";
  fish.style.top = y + "px";

  requestAnimationFrame(swim);
}

swim();


//Slutningen af spilet 
function visSlutside(){
    document.getElementById("slutTekst").innerText =
    "Tak fordi du hjalp! Havet bliver sundere når vi fjerner skrald.";
    }