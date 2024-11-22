const playPauseBtn = document.getElementById('play-pause-btn');
const audioPlayer = document.getElementById('audio-player');
const albumArt = document.getElementById('album-art');
let isPlaying = false;

playPauseBtn.addEventListener('click', () => {
    if (isPlaying) {
        audioPlayer.pause();
        playPauseBtn.innerHTML = '<i class="fa fa-play"></i>';
        albumArt.style.transform = 'rotate(0deg)';
    } else {
        audioPlayer.play();
        playPauseBtn.innerHTML = '<i class="fa fa-pause"></i>';
        albumArt.style.transform = 'rotate(360deg)';
    }
    isPlaying = !isPlaying;
});
