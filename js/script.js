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


//Layout af baggrunden 
function setup(){
}


// Bobler 




//Slutningen på spilet 
function visSlutspil(){

    document.getElementById("storyBox").innerText =
    "Tak fordi du hjalp! Havet bliver sundere når vi fjerner skrald.";
    
    }
