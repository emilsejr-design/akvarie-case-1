// Spil parameterne 
let visStartside = true;
let score = 0;
let maxScore = 100;

if(score === maxScore){
    gameCompleted();
    }

function updateProgressbar(){
    }


function removeTrash(trashElement){
    trashElement.remove();
    score += 20;
    updateProgressbar();
    }

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


// Bobler 

//Lyd
function playBubbleSound(){
    let sound = new Audio("bubble.mp3");
    sound.play();
    }

//Progressbaren 


//End of game
function gameCompleted(){
    alert("Tak fordi du hjalp! Havet bliver sundere når vi fjerner skrald.");
    showEndStory();
    }
