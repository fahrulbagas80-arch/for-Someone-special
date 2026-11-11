const screens = ["opening", "diary", "memories", "cake", "wishes", "surprise"];

function showScreen(id) {
  screens.forEach((s) => {
    document.getElementById(s).classList.toggle("hidden", s !== id);
  });
  window.scrollTo({ top: 0, behavior: "smooth" });
}

const envelope = document.getElementById("envelope");
envelope.addEventListener("click", () => {
  envelope.classList.add("open");
  setTimeout(() => showScreen("diary"), 900);
});

document.getElementById("exit").addEventListener("click", () => {
  window.close();
  setTimeout(() => {
    window.location.href = "about:blank";
  }, 100);
});

document.querySelectorAll("[data-next]").forEach((btn) => {
  btn.addEventListener("click", () => showScreen(btn.dataset.next));
});

const blow = document.getElementById("blow");
blow.addEventListener("click", () => {
  document.getElementById("flame").classList.add("blown");
  document.getElementById("wishText").textContent =
    "wish sent into the universe ✨💗";
  blow.textContent = "continue →";
  blow.onclick = () => showScreen("wishes");
});

function petal() {
  const p = document.createElement("div");
  p.className = "petal";
  p.textContent = Math.random() > 0.45 ? "♡" : "✦";
  p.style.left = Math.random() * 100 + "vw";
  p.style.animationDuration = 5 + Math.random() * 7 + "s";
  p.style.opacity = 0.25 + Math.random() * 0.55;
  document.getElementById("petals").appendChild(p);
  setTimeout(() => p.remove(), 13000);
}
setInterval(petal, 650);

function launchConfetti() {
  const box = document.getElementById("confetti");
  box.innerHTML = "";
  const symbols = ["♡", "✦", "♥", "✧", "•"];
  for (let i = 0; i < 55; i++) {
    const x = document.createElement("span");
    x.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    x.style.position = "absolute";
    x.style.left = Math.random() * 100 + "%";
    x.style.top = 10 + Math.random() * 30 + "%";
    x.style.fontSize = 10 + Math.random() * 18 + "px";
    x.style.animation = `confettiFall ${2 + Math.random() * 3}s ${Math.random() * 1.5}s forwards`;
    box.appendChild(x);
  }
}
const style = document.createElement("style");
style.textContent =
  "@keyframes confettiFall{to{transform:translateY(75vh) rotate(540deg);opacity:0}}";
document.head.appendChild(style);
