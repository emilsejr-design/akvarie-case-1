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


//fisk svømmer
const fish = document.getElementById("fish_1");
let x = 0;
let y = 300; // Start position i højden
let speed = 2;

function swim() {
    x += speed;

    // Vend når kanten rammes (150 er fiskens bredde)
    if (x > window.innerWidth - 150 || x < 0) {
        speed *= -1;
        // Spejlvend fisken så den kigger den vej den svømmer
        fish.style.transform = speed > 0 ? "scaleX(1)" : "scaleX(-1)";
    }

    // Blød bølgebevægelse (Sinus-kurve)
    // Vi lægger Math.sin til den nuværende y-position
    let waveY = y + Math.sin(x * 0.02) * 30; 

    fish.style.left = x + "px";
    fish.style.top = waveY + "px";

    requestAnimationFrame(swim);
}

// Start animationen
swim();


//Slutningen af spilet 
function visSlutside(){
    document.getElementById("slutTekst").innerText =
    "Tak fordi du hjalp! Havet bliver sundere når vi fjerner skrald.";
    }