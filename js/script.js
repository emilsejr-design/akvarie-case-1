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
    let sound = new Audio("bubble.mp3");
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
