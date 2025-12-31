// scroll-effects.js

// ページロード時：ヒーローをふわっと
document.addEventListener('DOMContentLoaded', () => {
  anime.timeline()
    .add({
      targets: '.service-hero-text h1',
      opacity: [0, 1],
      translateY: [20, 0],
      easing: 'easeOutQuad',
      duration: 700
    })
    .add({
      targets: '.service-hero-text .lead',
      opacity: [0, 1],
      translateY: [16, 0],
      easing: 'easeOutQuad',
      duration: 600
    }, '-=300')
    .add({
      targets: '.hero-badges span',
      opacity: [0, 1],
      translateY: [14, 0],
      easing: 'easeOutQuad',
      duration: 500,
      delay: anime.stagger(80)
    }, '-=200');
});

// スクロールで .reveal-on-scroll を順次表示
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;

    anime({
      targets: entry.target,
      opacity: [0, 1],
      translateY: [24, 0],
      easing: 'easeOutQuad',
      duration: 700
    });

    observer.unobserve(entry.target);
  });
}, {
  threshold: 0.2
});

// 対象を監視開始
document.querySelectorAll('.reveal-on-scroll').forEach(el => {
  // 初期状態を少し下げておく
  el.style.opacity = 0;
  el.style.transform = 'translateY(24px)';
  observer.observe(el);
});
