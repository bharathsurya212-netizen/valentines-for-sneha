const heart = document.getElementById("heart-container");
const intro = document.getElementById("intro");
const memories = document.getElementById("memories");
const music = document.getElementById("music");

heart.addEventListener("click", () => {
  intro.style.transform = "scale(3)";
  intro.style.opacity = "0";

  setTimeout(() => {
    intro.style.display = "none";
    memories.style.display = "flex";
    music.play();
  }, 2000);
});