// hero-bg.js
const canvas = document.getElementById("heroCanvas");
if (!canvas) {
  console.warn("heroCanvas が見つかりません");
}
const ctx = canvas.getContext("2d");

let particles = [];
const particleCount = 40;
let width, height;

// マウス位置（ライト用）
const pointer = {
  x: 0,
  y: 0,
  active: false,
};

function resize() {
  width = canvas.clientWidth;
  height = canvas.clientHeight;
  canvas.width = width;
  canvas.height = height;
}
window.addEventListener("resize", resize);
resize();

function createParticles() {
  particles = [];
  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      r: 20 + Math.random() * 40,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      color:
        Math.random() > 0.5
          ? "rgba(59,130,246,0.18)" // 青
          : "rgba(56,189,248,0.18)", // 水色
    });
  }
}
createParticles();

// マウスでライト位置更新
canvas.addEventListener("mousemove", (e) => {
  const rect = canvas.getBoundingClientRect();
  pointer.x = e.clientX - rect.left;
  pointer.y = e.clientY - rect.top;
  pointer.active = true;
});

canvas.addEventListener("mouseleave", () => {
  pointer.active = false;
});

function draw() {
  ctx.clearRect(0, 0, width, height);

  // ベースのグラデーション背景
  const grad = ctx.createLinearGradient(0, 0, width, height);
  grad.addColorStop(0, "#eff6ff");
  grad.addColorStop(1, "#e0f2fe");
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, width, height);

  // パーティクル
  particles.forEach((p) => {
    p.x += p.vx;
    p.y += p.vy;

    // 画面外に出たら反対側へ
    if (p.x < -p.r) p.x = width + p.r;
    if (p.x > width + p.r) p.x = -p.r;
    if (p.y < -p.r) p.y = height + p.r;
    if (p.y > height + p.r) p.y = -p.r;

    const radial = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r);
    radial.addColorStop(0, p.color);
    radial.addColorStop(1, "rgba(255,255,255,0)");
    ctx.fillStyle = radial;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fill();
  });

  // マウス追従ライト
  if (pointer.active) {
    const lightRadius = Math.min(width, height) * 0.4;
    const lightGrad = ctx.createRadialGradient(
      pointer.x,
      pointer.y,
      0,
      pointer.x,
      pointer.y,
      lightRadius
    );
    lightGrad.addColorStop(0, "rgba(96,165,250,0.35)");
    lightGrad.addColorStop(1, "rgba(255,255,255,0)");
    ctx.fillStyle = lightGrad;
    ctx.beginPath();
    ctx.arc(pointer.x, pointer.y, lightRadius, 0, Math.PI * 2);
    ctx.fill();
  }

  requestAnimationFrame(draw);
}
draw();
