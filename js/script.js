// GAME PARAMETERS
let visStartside = true;
let score = 0;
let maxScore = 100;


// Indlæser baggrunden før alt andet sker.
function preload() { 
    bgImage = loadImage("background.jpg");
    }

//Layout af baggrunden 
function setup(){
    createCanvas(bgImage.width, bgImage.height);
    textFont("Arial");
    textSize(20);
    textAlign(LEFT, TOP);
    }

// BOBLER
fill(150, 100, 200, 150); // Draw the bubble - Soft purple with transparency
ellipse(c.x, c.y, c.size);

//LYDE
function playBubbleSound(){
    let sound = new Audio("......");
    sound.play();
    }

//PROGRESSBAR
if(score === maxScore){
    gameCompleted();
    }

function updateProgressbar(){
    }

//TRASH
function removeTrash(trashElement){
    trashElement.remove();
    score += 20;
    updateProgressbar();
    }

//END OF GAME
function gameCompleted(){
    alert("Tak fordi du hjalp! Havet bliver sundere når vi fjerner skrald.");
    showEndStory();
    }


    //når man klikker på fisken skal der gerne komme en lyd 
   const fisk = document.getElementById('hero_fish');
const lyd = document.getElementById('heltelyd');

fisk.addEventListener('click', () => {
    console.log("Fisken blev klikket!"); // Tjekker om klikket overhovedet registreres
    lyd.currentTime = 0; // Spoler tilbage så man kan klikke flere gange
    lyd.play().catch(error => {
        console.error("Fejl ved afspilning:", error);
    });
});