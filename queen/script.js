const COOLDOWN_MS = 120_000;
const STORAGE = {
  result: "rocketQueenResult",
  generatedAt: "rocketQueenGeneratedAt",
  history: "rocketQueenHistory",
};

const stage = document.getElementById("signal-stage");
const value = document.getElementById("signal-value");
const button = document.getElementById("generate-button");
const status = document.getElementById("status");
const historyElement = document.getElementById("history");

let countdownTimer;

function createMultiplier() {
  const chance = Math.random();

  if (chance < 0.7) return (1.5 + Math.random() * 0.5).toFixed(2);
  if (chance < 0.9) return (2 + Math.random()).toFixed(2);
  return (3 + Math.random() * 2).toFixed(2);
}

function readHistory() {
  try {
    const stored = JSON.parse(localStorage.getItem(STORAGE.history) || "[]");
    return Array.isArray(stored) ? stored.slice(0, 3) : [];
  } catch {
    return [];
  }
}

function renderHistory(items = readHistory()) {
  historyElement.replaceChildren(
    ...items.map((item) => {
      const chip = document.createElement("span");
      chip.textContent = `${item}x`;
      return chip;
    }),
  );
}

function formatRemaining(milliseconds) {
  const seconds = Math.max(0, Math.ceil(milliseconds / 1000));
  const minutes = Math.floor(seconds / 60);
  return `${minutes}:${String(seconds % 60).padStart(2, "0")}`;
}

function setReadyState() {
  clearInterval(countdownTimer);
  button.disabled = false;
  button.querySelector(".generate-button__label").textContent = "Сгенерировать";
  status.textContent = "Готов к запуску";
}

function startCooldown(generatedAt) {
  clearInterval(countdownTimer);
  button.disabled = true;

  const update = () => {
    const remaining = COOLDOWN_MS - (Date.now() - generatedAt);

    if (remaining <= 0) {
      setReadyState();
      return;
    }

    const formatted = formatRemaining(remaining);
    button.querySelector(".generate-button__label").textContent = `Повторить через ${formatted}`;
    status.textContent = "Результат сохранён на этом устройстве";
  };

  update();
  countdownTimer = window.setInterval(update, 1000);
}

function revealResult(result) {
  value.textContent = `${result}x`;
  stage.classList.remove("is-generating");
  stage.classList.add("has-result");
}

function generate() {
  if (button.disabled) return;

  button.disabled = true;
  stage.classList.remove("has-result");
  stage.classList.add("is-generating");
  value.textContent = "...";
  status.textContent = "Формируем результат";

  window.setTimeout(() => {
    const result = createMultiplier();
    const generatedAt = Date.now();
    const history = [result, ...readHistory()].slice(0, 3);

    localStorage.setItem(STORAGE.result, result);
    localStorage.setItem(STORAGE.generatedAt, String(generatedAt));
    localStorage.setItem(STORAGE.history, JSON.stringify(history));

    revealResult(result);
    renderHistory(history);
    startCooldown(generatedAt);
  }, 1100);
}

function restore() {
  const result = localStorage.getItem(STORAGE.result);
  const generatedAt = Number(localStorage.getItem(STORAGE.generatedAt));

  renderHistory();

  if (result) revealResult(result);
  if (generatedAt && Date.now() - generatedAt < COOLDOWN_MS) {
    startCooldown(generatedAt);
  } else {
    setReadyState();
  }
}

button.addEventListener("click", generate);
restore();
