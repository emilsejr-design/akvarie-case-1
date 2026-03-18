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

//LAYOUT - Viewport
const leftButton = document.getElementById("leftButton");
const rightButton = document.getElementById("rightButton");
const background = document.querySelector(".background_move_around");

let currentPosition = 0;
const step = window.innerWidth; // flyt 1 skærmbredde ad gangen
const maxPosition = (background.offsetWidth - window.innerWidth); // max til højre

// Flyt til venstre
leftButton.addEventListener("click", () => {
    currentPosition -= step;
    if (currentPosition < 0) currentPosition = 0;
    background.style.transform = `translateX(-${currentPosition}px)`;
});

// Flyt til højre
rightButton.addEventListener("click", () => {
    currentPosition += step;
    if (currentPosition > maxPosition) currentPosition = maxPosition;
    background.style.transform = `translateX(-${currentPosition}px)`;
});


// BOBLER
function createBubble() {
    const bubble = document.createElement("div"); //Opret et nyt div-element, som bliver en boble
    bubble.classList.add("bubble"); //Tilføjer CSS-klassen "bubble", som styrer udseende og animation

    // Giver dem random størrelse mellem 10px og 30px
    const size = Math.random() * 20 + 10; //Genererer et tilfældigt tal mellem 0 og 1, som ganges med 20 og pluses med 10.
    //Det forskyder intervallet fra 0-20 til 10-30, så "size" bliver tilfældig mellem 10-30px.
    bubble.style.width = size + "px"; // Sæt bredde
    bubble.style.height = size + "px"; // Sæt højde

    //Sæt boblens vandrette position tilfældigt inden for skærmbredden
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
    let sound = new Audio("sfx-bubbles.mp3");
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
// henter skraldeposerne
const skraldepose1 = document.getElementById("skraldepose1");
const skraldepose2 = document.getElementById("skraldepose2");
// laver funktion der kan fjerne elementer og opdatere progressbar
function fjernSkrald(e) {
    e.target.remove();
    score += 20;
    updateProgressbar();
}
// ved klik på skraldeposerne køres funktionen der fjerner skrald
skraldepose1.addEventListener("click", fjernSkrald)
skraldepose2.addEventListener("click", fjernSkrald)


// Hent begge fisk ind
const fish1 = document.getElementById("fish_1");
const fish2 = document.getElementById("fish-2");

// Start-værdier for fisk 1
let x1 = 0;
let y1 = 300;
let speed1 = 2;

// Start-værdier for fisk 2
let x2 = 100;
let y2 = 150;
let speed2 = -1.5; // Denne svømmer den anden vej fra start

function swim() {
    // --- STYR FISK 1 ---
    x1 += speed1;
    if (x1 > window.innerWidth - 150 || x1 < 0) {
        speed1 *= -1;
    }
    let waveY1 = y1 + Math.sin(x1 * 0.02) * 30;
    
    // Brug backticks ` og ${} til transform, så vi både kan flytte og flippe
    let flip1 = speed1 > 0 ? 1 : -1;
    fish1.style.left = x1 + "px";
    fish1.style.top = waveY1 + "px";
    fish1.style.transform = `scaleX(${flip1})`;

    // --- STYR FISK 2 ---
    x2 += speed2;
    if (x2 > window.innerWidth - 150 || x2 < 0) {
        speed2 *= -1;
    }
    let waveY2 = y2 + Math.sin(x2 * 0.01) * 20; // Lidt anden bølge-rytme
    
    let flip2 = speed2 > 0 ? 1 : -1;
    fish2.style.left = x2 + "px";
    fish2.style.top = waveY2 + "px";
    fish2.style.transform = `scaleX(${flip2})`;

    requestAnimationFrame(swim);
}

// Start festen!
swim();



//Slutningen af spilet 
function visSlutside(){
    document.getElementById("slutTekst").innerText =
    "Tak fordi du hjalp! Havet bliver sundere når vi fjerner skrald.";
    }