//LYD
window.onload = function playEndingSound(){
    let endingSound = new Audio("mp3/ending-vo.mp3");
    endingSound.play();
    }

    // Lyd på FortællerFisken på forsiden
    const heroFishSpeak = document.getElementById("heltelyd");
    function playSoundHeroFish() {
        heroFishSpeak.currentTime = 0;
        heroFishSpeak.play();
    }
    addEventListener("click", playSoundHeroFish);
