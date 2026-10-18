"use strict";
const selector = document.getElementById("video-task");
const player = document.getElementById("navigation-video");
let isDisplayed = false;
player.muted = true;
function playDisplayedVideo() {
  if (isDisplayed) player.play().catch(() => {
    // Native controls remain available if the browser blocks playback.
  });
}
const visibilityObserver = new IntersectionObserver(entries => {
  isDisplayed = entries[0].isIntersecting;
  if (isDisplayed) playDisplayedVideo();
  else player.pause();
}, { threshold: 0 });
visibilityObserver.observe(player);
selector.addEventListener("change", () => {
  const selected = selector.selectedOptions[0];
  player.pause();
  player.src = selected.value;
  player.load();
  document.getElementById("video-title").textContent = selected.textContent;
  document.getElementById("video-label").textContent = selected.textContent;
  document.getElementById("video-link").href = selected.value;
  playDisplayedVideo();
});
