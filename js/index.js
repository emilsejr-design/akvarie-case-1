"use strict";

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