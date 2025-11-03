// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('primary-nav');

if (toggle && nav) {
  const update = (expanded) => {
    toggle.setAttribute('aria-expanded', String(expanded));
    nav.setAttribute('aria-hidden', String(!expanded));
  };
  update(false);
  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    update(!expanded);
  });
}

// Back to top
const toTop = document.querySelector('.to-top');
if (toTop) {
  toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

/* =========================================================
   YouTube: Lite Embed 方式 ＋ 必要CSSをJSで自動注入
   ---------------------------------------------------------
   1) 既存 <iframe> をサムネ＋再生ボタンに置換（まだiframeは作らない）
   2) クリック時にだけ iframe を生成し autoplay
   3) http(s)配信時は ?origin=<現在のオリジン> を付与
   4) CSS未反映でも崩れないよう、必要最小限のCSSを <style> で注入
   ========================================================= */
(function () {
  // ここで yt-lite 用の最低限CSSを注入（style.css が未更新でもOK）
  const injectLiteCss = () => {
    if (document.getElementById('yt-lite-style')) return;
    const css = `
      .yt-lite{
        position:relative; display:block; width:100%;
        /* ページ全幅に広がり過ぎるのを防止（単体動画は最大840px） */
        max-width:min(840px, 100%); margin:12px auto;
        border:1px solid var(--border); border-radius:16px;
        overflow:hidden; aspect-ratio:16/9; background:#000; box-shadow:var(--shadow);
      }
      /* 複数動画のグリッド内はカラム幅いっぱいに（最大幅制限を解除） */
      .video-list .yt-lite{ max-width:100%; margin:0; }
      .yt-lite__play{
        position:absolute; inset:0; display:grid;
        grid-template-rows:1fr auto; place-items:center;
        width:100%; height:100%; background:transparent; border:0; cursor:pointer;
      }
      .yt-lite__thumb{ width:100%; height:100%; object-fit:cover; filter:brightness(.9); }
      .yt-lite__icon{
        font-size:42px; line-height:1; background:rgba(0,0,0,.45);
        padding:.4em .6em; border-radius:999px; color:#fff; margin-bottom:8px;
      }
      .yt-lite__label{
        font-size:12px; color:#cbd5e1; padding:4px 8px;
        background:rgba(0,0,0,.35); border-radius:999px; margin-bottom:14px;
      }
      .yt-lite__play:hover .yt-lite__thumb{ filter:brightness(1); }
    `.trim();
    const style = document.createElement('style');
    style.id = 'yt-lite-style';
    style.textContent = css;
    document.head.appendChild(style);
  };

  const DOC_READY = () => {
    injectLiteCss();

    const selector = 'iframe[src*="youtube.com/embed/"],iframe[src*="youtube-nocookie.com/embed/"]';
    const targets = Array.from(document.querySelectorAll(selector));
    if (targets.length === 0) return;

    const httpOrigin = (location && location.origin && location.origin.startsWith('http')) ? location.origin : '';

    targets.forEach((old) => {
      try {
        const m = old.src.match(/embed\/([a-zA-Z0-9_-]{11})/);
        if (!m) return;
        const id = m[1];
        const title = old.getAttribute('title') || 'YouTube video';
        // 既存の .video ラッパがあればそれを使う。なければ親要素を使う
        const wrapper = old.closest('.video') || old.parentElement;

        // Liteビュー（サムネ＋再生ボタン）に置換
        const btn = document.createElement('button');
        btn.className = 'yt-lite__play';
        btn.setAttribute('aria-label', `${title} を再生`);
        btn.innerHTML = `
          <img class="yt-lite__thumb" src="https://i.ytimg.com/vi/${id}/hqdefault.jpg" alt="">
          <span class="yt-lite__icon">▶</span>
          <span class="yt-lite__label">${title}</span>
        `;

        wrapper.classList.add('yt-lite'); // .video が付いていてもOK。併用可
        wrapper.innerHTML = '';
        wrapper.appendChild(btn);

        // クリックで本物の iframe を生成
        const activate = () => {
          try {
            const params = new URLSearchParams({
              autoplay: '1',
              playsinline: '1',
              rel: '0',
              modestbranding: '1'
            });
            if (httpOrigin) params.set('origin', httpOrigin);

            const iframe = document.createElement('iframe');
            iframe.src = `https://www.youtube-nocookie.com/embed/${id}?${params.toString()}`;
            iframe.title = title;
            iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
            iframe.setAttribute('allowfullscreen', '');
            iframe.setAttribute('referrerpolicy', 'strict-origin-when-cross-origin');
            iframe.style.width = '100%';
            iframe.style.height = '100%';
            iframe.style.border = '0';

            wrapper.replaceChildren(iframe);
          } catch (e) {
            // どうしても埋め込めない環境は新規タブで動画を開く（保険）
            window.open(`https://www.youtube.com/watch?v=${id}`, '_blank', 'noopener');
          }
        };

        btn.addEventListener('click', activate, { once: true });
      } catch (_) {}
    });
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', DOC_READY);
  } else {
    DOC_READY();
  }
})();
