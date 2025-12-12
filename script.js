// 🌙 Dark Mode Toggle
const toggleBtn = document.getElementById("theme-toggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggleBtn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

// ✨ Smooth Hero Animation (Fade + Slide Up)
window.addEventListener("load", () => {
  const section = document.querySelector(".hero-animate");
  const img = document.querySelector(".hero-img");
  const title = document.querySelector(".hero-title");
  const text = document.querySelector(".hero-text");

  setTimeout(() => {
    // Main container
    section.classList.add("opacity-100", "translate-y-0", "transition-all", "duration-700");

    // Elements delay for smooth stagger effect
    setTimeout(() => img.classList.add("opacity-100", "transition-opacity", "duration-700"), 200);
    setTimeout(() => title.classList.add("opacity-100", "transition-opacity", "duration-700"), 400);
    setTimeout(() => text.classList.add("opacity-100", "transition-opacity", "duration-700"), 600);
  }, 200);
});
