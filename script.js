// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    const audio = document.getElementById("audio");
    const playBtn = document.getElementById("playBtn");
    const pauseBtn = document.getElementById("pauseBtn");
    const stopBtn = document.getElementById("stopBtn");
    const volumeSlider = document.getElementById("volumeSlider");
  
    // Play button click event
    playBtn.addEventListener("click", function() {
      audio.play();
    });
  
    // Pause button click event
    pauseBtn.addEventListener("click", function() {
      audio.pause();
    });
  
    // Stop button click event
    stopBtn.addEventListener("click", function() {
      audio.pause();
      audio.currentTime = 0;
    });
  
    // Volume slider change event
    volumeSlider.addEventListener("input", function() {
      audio.volume = volumeSlider.value;
    });
  });
  