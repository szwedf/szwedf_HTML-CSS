// scroll-effects.js

document.addEventListener("DOMContentLoaded", () => {
  const heroPanel = document.querySelector(".hero-panel");
  const heroSection = document.querySelector(".hero-with-canvas");

  if (heroPanel && heroSection) {
    const strength = 12; // 傾きの強さ（度）

    heroSection.addEventListener("mousemove", (e) => {
      const rect = heroSection.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const percentX = (x / rect.width) - 0.5;  // -0.5〜0.5
      const percentY = (y / rect.height) - 0.5;

      const rotateX = percentY * -strength;
      const rotateY = percentX * strength;

      heroPanel.style.transform = `
        translate3d(0,0,0)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
      `;
    });

    heroSection.addEventListener("mouseleave", () => {
      heroPanel.style.transform = "translate3d(0,0,0) rotateX(0deg) rotateY(0deg)";
    });
  }
});
// スクロールでフェードイン
document.addEventListener("DOMContentLoaded", () => {
  const targets = document.querySelectorAll(".reveal-on-scroll");
  if (!targets.length) return;

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  targets.forEach((el) => observer.observe(el));
});
