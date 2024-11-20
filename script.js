const playPauseButton = document.getElementById("play-pause");
const audio = document.getElementById("audio");
const albumImage = document.querySelector(".album-image");

let isPlaying = false;

playPauseButton.addEventListener("click", () => {
    if (isPlaying) {
        audio.pause();
        playPauseButton.textContent = "Play";
        albumImage.style.animationPlayState = "paused";
    } else {
        audio.play();
        playPauseButton.textContent = "Pause";
        albumImage.style.animationPlayState = "running";
    }
    isPlaying = !isPlaying;
});

