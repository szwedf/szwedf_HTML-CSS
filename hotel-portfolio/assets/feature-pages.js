document.addEventListener("DOMContentLoaded", () => {
  const features = {
    wedding: {
      category: "Wedding",
      title: "ウェディング特設ページ",
      crumb: "ウェディング",
      lead: "自然光の入るチャペルと上品な披露宴会場で、大切な一日を美しく演出します。",
      concept: "白を基調としたチャペルと、洗練された披露宴会場、専任スタッフのきめ細やかなサポートにより、ホテルウェディングならではの上質な一日をご提案します。",
      hero: "images/wedding-chapel.jpg",
      subImage: "images/wedding-chapel.jpg",
      infos: [
        { label: "相談受付", value: "毎日 10:00–19:00" },
        { label: "挙式スタイル", value: "チャペル / 宴内人前式" },
        { label: "対応人数", value: "20名〜120名" },
        { label: "相談方法", value: "来館 / オンライン" }
      ],
      highlights: [
        { title: "自然光のチャペル", desc: "柔らかな光が差し込む、清楚で上品なセレモニー空間。" },
        { title: "披露宴会場", desc: "少人数から中規模まで対応できる、洗練されたバンケット。" },
        { title: "専任サポート", desc: "衣装・装花・料理まで一貫してプランニング。" }
      ],
      gallery: [
        "images/wedding-chapel.jpg",
        "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80"
      ],
      guide: [
        "ご相談は事前予約制です。",
        "少人数婚・家族婚のご相談も承ります。",
        "ご試食付きフェアの開催日もございます。"
      ],
      primaryText: "相談する",
      primaryHref: "contact.html?type=wedding",
      ctaTitle: "人生の節目を、記憶に残る一日に",
      ctaText: "会場見学やプラン相談など、お気軽にお問い合わせください。"
    },

    "offer-breakfast": {
      category: "Offer",
      title: "ベッド＆ブレックファスト",
      crumb: "ベッド＆ブレックファスト",
      lead: "朝食付きで気軽に楽しめる、定番のご宿泊プランです。",
      concept: "初めてのご宿泊にもおすすめの朝食付きプラン。ゆったりとした客室での滞在と、ホテルならではの上質な朝食で、一日の始まりを心地よく整えます。",
      hero: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1400&q=80",
      subImage: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=1200&q=80",
      infos: [
        { label: "対象", value: "全客室タイプ" },
        { label: "朝食", value: "ブッフェ または セット" },
        { label: "チェックアウト", value: "11:00" },
        { label: "予約", value: "オンライン限定あり" }
      ],
      highlights: [
        { title: "朝食付き", desc: "ホテルならではの和洋朝食をお楽しみいただけます。" },
        { title: "定番プラン", desc: "観光・ビジネスどちらにも使いやすい基本宿泊プラン。" },
        { title: "初利用にも最適", desc: "初めての滞在でも選びやすい安心感のある内容です。" }
      ],
      gallery: [
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1496412705862-e0088f16f791?auto=format&fit=crop&w=1200&q=80"
      ],
      guide: [
        "プラン内容は予約日や客室タイプにより異なる場合があります。",
        "朝食会場・提供形式は日程により変更となる場合があります。",
        "宿泊税込み価格は検索結果画面でご確認ください。"
      ],
      primaryText: "今すぐ探す",
      primaryHref: "search.html?plan=breakfast",
      ctaTitle: "朝の時間まで上質に",
      ctaText: "ご滞在と朝食をセットで楽しめる、人気のベーシックプランです。"
    },

    "offer-anniversary": {
      category: "Offer",
      title: "アニバーサリーステイ",
      crumb: "アニバーサリー",
      lead: "記念日や誕生日、大切な節目にふさわしい特別プランです。",
      concept: "シャンパンや特典付きアレンジ、客室でのゆったりとした滞在を組み合わせた、記念日向けの宿泊プラン。特別な一日を落ち着いたホテルステイで彩ります。",
      hero: "https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?auto=format&fit=crop&w=1400&q=80",
      subImage: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1200&q=80",
      infos: [
        { label: "おすすめ用途", value: "誕生日 / 記念日" },
        { label: "特典例", value: "シャンパン / メッセージ" },
        { label: "対象客室", value: "ダブル以上" },
        { label: "予約", value: "事前予約推奨" }
      ],
      highlights: [
        { title: "記念日向け演出", desc: "メッセージプレートやお花などの追加相談も可能。" },
        { title: "客室でゆったり", desc: "外出せずホテル内で特別な時間を過ごせます。" },
        { title: "上質な滞在", desc: "ラグジュアリーな空間で落ち着いたひとときを演出。" }
      ],
      gallery: [
        "https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1200&q=80"
      ],
      guide: [
        "演出内容はご予約時にご相談ください。",
        "日程により追加料金が発生する場合があります。",
        "サプライズ対応は可能な範囲で承ります。"
      ],
      primaryText: "プランを見る",
      primaryHref: "search.html?plan=anniversary",
      ctaTitle: "記念日にふさわしいホテルステイを",
      ctaText: "特別な日を上質に過ごすための宿泊プランをご案内します。"
    },

    "gallery-experience": {
      category: "Gallery",
      title: "写真で見るホテル体験",
      crumb: "ホテル体験",
      lead: "客室、外観、ウェディング、フィットネスなど、ホテルの世界観を写真でお楽しみいただけます。",
      concept: "HOTEL AURELIA TOKYO の魅力を、時間帯やシーンごとに切り取った特設ギャラリーです。夜の外観や館内の雰囲気を通して、ブランドイメージを体感いただけます。",
      hero: "images/exterior-night.jpg",
      subImage: "images/exterior-night.jpg",
      infos: [
        { label: "掲載内容", value: "客室 / 外観 / 館内" },
        { label: "更新", value: "随時追加" },
        { label: "おすすめ", value: "夜景・外観写真" },
        { label: "関連ページ", value: "ギャラリー本編あり" }
      ],
      highlights: [
        { title: "夜の外観", desc: "都心に浮かび上がるホテルの存在感を感じられます。" },
        { title: "ブランドトーン", desc: "高級感・静けさ・上質さを一連の写真で表現。" },
        { title: "導線強化", desc: "ギャラリーや客室ページへの入口としても活用できます。" }
      ],
      gallery: [
        "images/exterior-night.jpg",
        "images/room-deluxe.png",
        "images/wedding-chapel.jpg"
      ],
      guide: [
        "本格的な写真一覧はギャラリーページでもご覧いただけます。",
        "画像はサイト演出用のサンプルを含みます。",
        "スマートフォンでも見やすいよう最適化しています。"
      ],
      primaryText: "ギャラリーを見る",
      primaryHref: "gallery.html",
      ctaTitle: "ホテルの世界観を、写真でめぐる",
      ctaText: "客室や館内、特別なシーンをギャラリーでご覧ください。"
    }
  };

  const type = new URLSearchParams(location.search).get("type") || "wedding";
  const data = features[type] || features.wedding;

  const setText = (id, value) => {
    const el = document.getElementById(id);
    if (el) el.textContent = value;
  };

  setText("featureCrumb", data.crumb);
  setText("featureCategory", data.category);
  setText("featureTitle", data.title);
  setText("featureLead", data.lead);
  setText("featureConcept", data.concept);
  setText("featureCtaTitle", data.ctaTitle);
  setText("featureCtaText", data.ctaText);

  const hero = document.getElementById("featureHeroImage");
  const sub = document.getElementById("featureSubImage");
  if (hero) {
    hero.src = data.hero;
    hero.alt = data.title;
  }
  if (sub) {
    sub.src = data.subImage;
    sub.alt = `${data.title} サブ画像`;
  }

  const infoWrap = document.getElementById("featureInfoList");
  if (infoWrap) {
    infoWrap.innerHTML = data.infos.map(item => `
      <div class="info-item">
        <span>${item.label}</span>
        <strong>${item.value}</strong>
      </div>
    `).join("");
  }

  const highlightWrap = document.getElementById("featureHighlights");
  if (highlightWrap) {
    highlightWrap.innerHTML = data.highlights.map(item => `
      <article class="feature-highlight-card">
        <h3>${item.title}</h3>
        <p>${item.desc}</p>
      </article>
    `).join("");
  }

  const galleryWrap = document.getElementById("featureGallery");
  if (galleryWrap) {
    galleryWrap.innerHTML = data.gallery.map(src => `
      <button class="feature-gallery-item" type="button">
        <img src="${src}" alt="${data.title}">
      </button>
    `).join("");
  }

  const guideWrap = document.getElementById("featureGuide");
  if (guideWrap) {
    guideWrap.innerHTML = data.guide.map(item => `<li>${item}</li>`).join("");
  }

  const primaryBtn = document.getElementById("featurePrimaryBtn");
  const primaryBtnBottom = document.getElementById("featurePrimaryBtnBottom");
  if (primaryBtn) {
    primaryBtn.href = data.primaryHref;
    primaryBtn.textContent = data.primaryText;
  }
  if (primaryBtnBottom) {
    primaryBtnBottom.href = data.primaryHref;
    primaryBtnBottom.textContent = data.primaryText;
  }

  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightboxImg");

  if (galleryWrap && lightbox && lightboxImg) {
    galleryWrap.addEventListener("click", (e) => {
      const btn = e.target.closest(".feature-gallery-item");
      if (!btn) return;
      const img = btn.querySelector("img");
      if (!img) return;
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
      lightbox.classList.add("open");
    });

    lightbox.addEventListener("click", () => {
      lightbox.classList.remove("open");
    });
  }
});