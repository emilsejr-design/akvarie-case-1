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
let currentPosition = 0;
const step = 200; // hvor mange pixels vi flytter pr klik
const background = document.querySelector(".background_move_around");

// Max/min grænser (så vi ikke rykker ud af baggrunden)
const maxPosition = background.scrollWidth - window.innerWidth;

function move(direction) {
    if (direction === 'left'){
        currentPosition -= step; // venstre = negativ bevægelse
    } else if (direction === 'right'){
        currentPosition += step; // højre = positiv bevægelse
    }
    
    // Sørger for at vi ikke går ud over grænserne
    currentPosition = Math.max(0, Math.min(currentPosition, maxPosition))

    background.style.transform = `translateX(-${currentPosition}px)`;
}
//Knappernes funktion
document.getElementById("leftButton").addEventListener("click", () => move('left'));
document.getElementById("rightButton").addEventListener("click", () => move('right'));

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




//KRABBE
// --- FISK & KRABBE ANIMATION ---

// 1. Hent elementerne
const fish1 = document.getElementById("fish_1");
const fish2 = document.getElementById("fish-2");
const crab = document.getElementById("crab");

// 2. Start-værdier for Fisk 1
let x1 = 0;
let y1 = 300;
let speed1 = 2;

// 3. Start-værdier for Fisk 2
let x2 = 100;
let y2 = 150;
let speed2 = -1.5;

// 4. Start-værdier for Krabben
let crabX = 200;
let crabSpeed = 1.2;
let crabStep = 0;

function swim() {
    // --- STYR FISK 1 ---
    if (fish1) {
        x1 += speed1;
        if (x1 > window.innerWidth - 150 || x1 < 0) speed1 *= -1;
        let waveY1 = y1 + Math.sin(x1 * 0.02) * 30;
        fish1.style.left = x1 + "px";
        fish1.style.top = waveY1 + "px";
        fish1.style.transform = `scaleX(${speed1 > 0 ? 1 : -1})`;
    }

    // --- STYR FISK 2 ---
    if (fish2) {
        x2 += speed2;
        if (x2 > window.innerWidth - 150 || x2 < 0) speed2 *= -1;
        let waveY2 = y2 + Math.sin(x2 * 0.01) * 20;
        fish2.style.left = x2 + "px";
        fish2.style.top = waveY2 + "px";
        fish2.style.transform = `scaleX(${speed2 > 0 ? 1 : -1})`;
    }

    // --- STYR KRABBEN ---
    if (crab) {
        crabX += crabSpeed;
        if (crabX > window.innerWidth - 120 || crabX < 0) crabSpeed *= -1;
        
        // Lav en lille hoppende bevægelse (ben-løft)
        crabStep += 0.1;
        let lift = Math.abs(Math.sin(crabStep)) * 6;
        
        crab.style.left = crabX + "px";
        // Vi bruger translateY til at få den til at hoppe lidt mens den går sidelæns
        crab.style.transform = `scaleX(${crabSpeed > 0 ? 1 : -1})`, `translateY(${-lift}px)`;
    }

    requestAnimationFrame(swim);
}

// Start alle dyrene
swim();



//Slutningen af spilet 
function visSlutside(){
    document.getElementById("slutTekst").innerText =
    "Tak fordi du hjalp! Havet bliver sundere når vi fjerner skrald.";
    }