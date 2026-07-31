const signal = document.getElementById("responseText");
const loader = document.querySelector(".loader2");

function nextSignal() {
  if (!signal) return;

  const multiplier = (Math.random() * 3.9 + 1.1).toFixed(2);
  signal.textContent = `${multiplier}x`;
  signal.className = "text betting";
  localStorage.setItem("resultText", signal.textContent);

  window.setTimeout(() => {
    signal.textContent = "Waiting..";
    signal.className = "text fly";
  }, 4500);
}

window.hideElements = function hideElements() {
  if (loader) loader.style.display = "none";
};

nextSignal();
window.setInterval(nextSignal, 6000);
