// Data lagu
const songs = [
  {
    title: "Bunga Abadi",
    file: "assets/music/bunga abadi.mp3",
    cover: "assets/image/dika.jpg"
  },
  {
    title: "Nresnani",
    file: "assets/music/nresnani.mp3",
    cover: "assets/image/dika.jpg"
  },
  {
    title: "Pengarepan",
    file: "assets/music/PENGAREPAN.mp3",
    cover: "assets/image/dika.jpg"
  }
];

// Elemen HTML
const songList = document.getElementById("song-list");
const audio = document.getElementById("audio");
const albumCover = document.getElementById("album-cover");
const songTitle = document.getElementById("song-title");

// Menampilkan daftar lagu
songs.forEach((song, index) => {
  const li = document.createElement("li");
  li.textContent = song.title;
  li.addEventListener("click", () => playSong(index, li));
  songList.appendChild(li);
});

// Fungsi untuk memutar lagu
function playSong(index, selectedLi) {
  const song = songs[index];

  // Update data lagu
  audio.src = song.file;
  albumCover.src = song.cover;
  songTitle.textContent = song.title;
  audio.play();

  // Tambahkan class aktif
  const allListItems = document.querySelectorAll("#song-list li");
  allListItems.forEach(li => li.classList.remove("active"));
  selectedLi.classList.add("active");

  // Smooth scroll ke atas player
  document.querySelector(".player").scrollIntoView({ behavior: "smooth" });
}
