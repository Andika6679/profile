// Ambil elemen penting
const playPauseButton = document.getElementById("play-pause");
const audio = document.getElementById("audio");
const album = document.querySelector(".album");
const playIcon = document.querySelector("#play-pause i");

let isPlaying = false;

// Fungsi Play/Pause
playPauseButton.addEventListener("click", () => {
    if (isPlaying) {
        audio.pause();
        playIcon.className = "fa fa-play"; // Ganti ikon ke play
        album.classList.remove("playing"); // Hentikan animasi
    } else {
        audio.play();
        playIcon.className = "fa fa-pause"; // Ganti ikon ke pause
        album.classList.add("playing"); // Aktifkan animasi

    }
    isPlaying = !isPlaying;
});
