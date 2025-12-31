// scroll-effects.js
document.addEventListener('DOMContentLoaded', () => {
  // ========== 0. ヘッダーをスッと表示 ==========
  const header = document.querySelector('.site-header');
  if (header && window.anime) {
    anime({
      targets: header,
      translateY: [-32, 0],
      opacity: [0, 1],
      duration: 600,
      easing: 'easeOutQuad'
    });
  }

  // ========== 1. ヒーローセクションのロードアニメ ==========
  const heroInner = document.querySelector('.service-hero-inner');
  if (heroInner && window.anime) {
    const tl = anime.timeline({
      easing: 'easeOutQuad',
      duration: 550
    });

    tl
      .add({
        targets: '.service-hero-text .section-label, .service-hero-text .eyebrow',
        opacity: [0, 1],
        translateY: [12, 0]
      })
      .add({
        targets: '.service-hero-text h1, .hero-title, .top-hero-title',
        opacity: [0, 1],
        translateY: [18, 0],
        offset: '-=300'
      })
      .add({
        targets: '.service-hero-text .lead, .hero-lead, .top-hero-lead',
        opacity: [0, 1],
        translateY: [18, 0],
        offset: '-=260'
      })
      .add({
        targets: '.hero-badges span, .badge',
        opacity: [0, 1],
        translateY: [10, 0],
        delay: anime.stagger(70),
        offset: '-=320'
      })
      .add({
        targets: '.service-hero-panel, .top-hero-panel, .card.hero-panel',
        opacity: [0, 1],
        translateY: [20, 0],
        scale: [0.96, 1],
        offset: '-=380'
      });
  }

  // ========== 2. スクロールでふわっと出す ==========
  const revealEls = document.querySelectorAll('.reveal-on-scroll');
  if (revealEls.length && window.IntersectionObserver && window.anime) {
    const io = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;

          const el = entry.target;
          io.unobserve(el);

          anime({
            targets: el,
            opacity: [0, 1],
            translateY: [24, 0],
            duration: 650,
            easing: 'easeOutQuad'
          });
        });
      },
      {
        threshold: 0.2
      }
    );

    revealEls.forEach(el => io.observe(el));
  }

  // ========== 3. カード類のホバーで少し浮かせる ==========
  const liftSelector = '.service-card, .bottom-box, .card';
  document.querySelectorAll(liftSelector).forEach(el => {
    el.addEventListener('mouseenter', () => {
      if (!window.anime) return;
      anime.remove(el);

      anime({
        targets: el,
        translateY: -4,
        boxShadow: '0 16px 35px rgba(15, 23, 42, 0.16)',
        duration: 200,
        easing: 'easeOutQuad'
      });
    });

    el.addEventListener('mouseleave', () => {
      if (!window.anime) return;
      anime.remove(el);

      // もともとの影っぽい値に戻す
      anime({
        targets: el,
        translateY: 0,
        boxShadow: '0 10px 24px rgba(148, 163, 184, 0.12)',
        duration: 220,
        easing: 'easeOutQuad'
      });
    });
  });

  // ========== 4. ヒーローパネルにほんのりチルト（傾き） ==========
  const heroPanel = document.querySelector('.hero-panel, .service-hero-panel');
  if (heroPanel) {
    const maxTilt = 8; // 最大の傾き（度）

    const handleMove = e => {
      const rect = heroPanel.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const px = x / rect.width - 0.5; // -0.5〜0.5
      const py = y / rect.height - 0.5;

      const rotateX = py * maxTilt;
      const rotateY = -px * maxTilt;

      heroPanel.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(0)`;
    };

    const resetTilt = () => {
      heroPanel.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) translateZ(0)';
    };

    heroPanel.addEventListener('mousemove', handleMove);
    heroPanel.addEventListener('mouseleave', resetTilt);
  }
});
