// Spil parameterne 
let visStartside = true;
let score = 0;
let maxScore = 100;

//Opdater progressbar
function updateProgressbar(){
    let procent = (score / maxScore) * 100;
    document.getElementById("progressBar").style.width = procent + "%";
    let popSound = new Audio("mp3/pop-normal.mp3");
    popSound.play();

    if(score >= maxScore){  // Når spillet er færdigt
    endingPage();
    }
}

//LAYOUT - Viewport
let currentPosition = 0;
const step = 250; // hvor mange pixels vi flytter pr klik
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

// TRASH
// henter skraldeposerne
const skraldepose1 = document.getElementById("skraldepose1");
const skraldepose2 = document.getElementById("skraldepose2");
const krus = document.getElementById("krus");
const skraldepose3 = document.getElementById("skraldepose3");
// laver funktion der kan fjerne elementer og opdatere progressbar
function fjernSkrald(e) {
    e.target.remove();
    score += 25;
    updateProgressbar();
}
// ved klik på skraldeposerne køres funktionen der fjerner skrald
skraldepose1.addEventListener("click", fjernSkrald);
skraldepose2.addEventListener("click", fjernSkrald);
krus.addEventListener("click", fjernSkrald);
skraldepose3.addEventListener("click", fjernSkrald);




// --- FISK & KRABBE ANIMATION ---

// 1. Hent elementerne
const fish1 = document.getElementById("fish_1");
const fish2 = document.getElementById("fish-2");
const fish3 = document.getElementById("fish-3");
const fish4 = document.getElementById("fish-4");
const crab = document.getElementById("crab");

// 2. Start-værdier (RETTET: speed4 og x4/y4 værdier)
let x1 = 0;   let y1 = 300; let speed1 = 2;
let x2 = 100; let y2 = 150; let speed2 = -1.5;
let x3 = 150; let y3 = 200; let speed3 = 3;
let x4 = 180; let y4 = 450; let speed4 = 3.4; // Her stod speed3 før
let crabX = 200; let crabSpeed = 1.2; let crabStep = 0;

function swim() {
    const totalBredde = document.documentElement.scrollWidth;

    // --- STYR FISK 1 ---
    if (fish1) {
        x1 += speed1;
        if (x1 > totalBredde - 150) { speed1 = -Math.abs(speed1); x1 = totalBredde - 151; } 
        else if (x1 < 0) { speed1 = Math.abs(speed1); x1 = 1; }
        let waveY1 = y1 + Math.sin(x1 * 0.02) * 30;
        fish1.style.left = x1 + "px";
        fish1.style.top = waveY1 + "px";
        fish1.style.transform = `scaleX(${speed1 > 0 ? 1 : -1})`;
    }

    // --- STYR FISK 2 ---
    if (fish2) {
        x2 += speed2;
        if (x2 > totalBredde - 150) { speed2 = -Math.abs(speed2); x2 = totalBredde - 151; } 
        else if (x2 < 0) { speed2 = Math.abs(speed2); x2 = 1; }
        let waveY2 = y2 + Math.sin(x2 * 0.01) * 20;
        fish2.style.left = x2 + "px";
        fish2.style.top = waveY2 + "px";
        fish2.style.transform = `scaleX(${speed2 > 0 ? 1 : -1})`;
    }

    // --- STYR FISK 3 ---
    if (fish3) {
        x3 += speed3;
        if (x3 > totalBredde - 150) { speed3 = -Math.abs(speed3); x3 = totalBredde - 151; } 
        else if (x3 < 0) { speed3 = Math.abs(speed3); x3 = 1; }
        let waveY3 = y3 + Math.sin(x3 * 0.01) * 20; 
        fish3.style.left = x3 + "px";
        fish3.style.top = waveY3 + "px";
        fish3.style.transform = `scaleX(${speed3 > 0 ? 1 : -1})`;
    }

    // --- STYR FISK 4 --- (RETTET: Bruger nu speed4 og waveY4 korrekt)
    if (fish4) {
        x4 += speed4;
        if (x4 > totalBredde - 150) { speed4 = -Math.abs(speed4); x4 = totalBredde - 151; } 
        else if (x4 < 0) { speed4 = Math.abs(speed4); x4 = 1; }
        
        let waveY4 = y4 + Math.sin(x4 * 0.015) * 25; 
        fish4.style.left = x4 + "px";
        fish4.style.top = waveY4 + "px";
        fish4.style.transform = `scaleX(${speed4 > 0 ? 1 : -1})`;
    }

    // --- STYR KRABBEN ---
    if (crab) {
        crabX += crabSpeed;
        if (crabX > totalBredde - 120) { crabSpeed = -Math.abs(crabSpeed); crabX = totalBredde - 121; } 
        else if (crabX < 0) { crabSpeed = Math.abs(crabSpeed); crabX = 1; }
        crabStep += 0.1;
        let lift = Math.abs(Math.sin(crabStep)) * 6;
        crab.style.left = crabX + "px";
        crab.style.transform = `scaleX(${crabSpeed > 0 ? 1 : -1}) translateY(${-lift}px)`;
    }
    requestAnimationFrame(swim);
}

// Start animationen
swim();

//Slutningen af spilet 
function endingPage(){
    window.location.href = "ending.html";
    }