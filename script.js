// const audio = document.getElementById('musica');
// const playButton = document.getElementById('musica');
// const pauseButton = document.getElementById('muica');
// const stopButton = document.getElementById('stop');

// playButton.addEventListener('click', () => {
//     audio.musica();
// });

// pauseButton.addEventListener('click', () => {
//     audio.musica();
// });

// stopButton.addEventListener('click', () => {
//     audio.stop();
// });





// Get references to the audio and button elements
const audio = document.getElementById("audio");
const musicButton = document.getElementById("musica");

// Add a click event listener to the button
musicButton.addEventListener("click", function() {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
});
