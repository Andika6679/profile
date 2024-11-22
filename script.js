const playPauseButton = document.getElementById("play-pause");
const audio = document.getElementById("audio");
const album = document.querySelector(".album");
const progressBar = document.getElementById("progress-bar");
const playIcon = document.querySelector("#play-pause i");

let isPlaying = false;

// Tombol Play/Pause
playPauseButton.addEventListener("click", () => {
    if (isPlaying) {
        audio.pause();
        playIcon.className = "fa fa-play";
        album.classList.remove("playing");
    } else {
        audio.play();
        playIcon.className = "fa fa-pause";
        album.classList.add("playing");
    }
    isPlaying = !isPlaying;
});

// Update Progress Bar
audio.addEventListener("timeupdate", () => {
    const progress = (audio.currentTime / audio.duration) * 100;
    progressBar.value = progress || 0;
});

// Seek Audio
progressBar.addEventListener("input", () => {
    audio.currentTime = (progressBar.value / 100) * audio.duration;
});

// Debugging Events
audio.addEventListener("canplaythrough", () => {
    console.log("Audio is ready to play!");
});

audio.addEventListener("error", (e) => {
    console.error("Audio failed to load:", e);
});
