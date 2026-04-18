document.addEventListener("DOMContentLoaded", () => {
  const restaurants = {
    aurora: {
      category: "Fine Dining",
      title: "メインダイニング「AURORA」",
      lead: "旬の食材を活かしたコンテンポラリー・キュイジーヌ。東京の夜景とともに、コース料理をゆったりとお楽しみいただけます。",
      concept: "AURORAでは、四季折々の食材を用いながら、クラシックとモダンを融合した一皿をご提供します。大切な記念日にも、洗練されたディナーにもふさわしい空間です。",
      hours: "17:30 – 22:00",
      seats: "60席",
      dress: "スマートカジュアル",
      floor: "32F",
      reserve: "booking.html?restaurant=aurora",
      hero: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1400&q=80",
      subImage: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=80",
      menus: [
        { name: "シェフズディナー", price: "¥18,000", desc: "季節の前菜からメイン、デザートまでのフルコース。" },
        { name: "シグネチャーコース", price: "¥24,000", desc: "和牛と魚介を組み合わせた特別コース。" },
        { name: "ワインペアリング", price: "¥9,000", desc: "料理に合わせたソムリエ厳選のペアリング。" }
      ],
      gallery: [
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80"
      ],
      guide: [
        "ディナータイムはご予約をおすすめしております。",
        "アレルギー食材は事前にご相談ください。",
        "窓側席は席数に限りがございます。"
      ]
    },

    hibiki: {
      category: "Teppanyaki",
      title: "鉄板焼「響」",
      lead: "厳選和牛や魚介を目の前で焼き上げるライブ感あふれる鉄板焼レストラン。",
      concept: "響では、素材の香りや焼きの音までも味わいの一部として演出します。シェフとの会話とともに、臨場感のある美食体験をお楽しみください。",
      hours: "17:30 – 21:30",
      seats: "20席",
      dress: "スマートカジュアル",
      floor: "31F",
      reserve: "booking.html?restaurant=hibiki",
      hero: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1400&q=80",
      subImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
      menus: [
        { name: "黒毛和牛コース", price: "¥22,000", desc: "厳選黒毛和牛を中心に構成した人気コース。" },
        { name: "海鮮鉄板焼コース", price: "¥19,000", desc: "活オマールや帆立を使用した魚介メインのコース。" },
        { name: "ペアリングセット", price: "¥7,500", desc: "日本酒またはワインとのマリアージュ。" }
      ],
      gallery: [
        "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1200&q=80"
      ],
      guide: [
        "カウンター席中心のため、香りが気になる場合は事前にご相談ください。",
        "記念日プレートのご用意が可能です。",
        "お子様のご利用はディナー時間帯に制限がございます。"
      ]
    },

    mizuho: {
      category: "Sushi",
      title: "鮨「瑞穂」",
      lead: "檜のカウンターで楽しむ江戸前鮨。職人が一貫ずつ丁寧に握る本格鮨をご提供します。",
      concept: "瑞穂では、豊洲市場から届く鮮魚を中心に、その日の最良のネタをお出しします。静かな空間で、凛とした鮨の時間をお楽しみください。",
      hours: "18:00 – 22:00",
      seats: "12席",
      dress: "スマートカジュアル",
      floor: "30F",
      reserve: "booking.html?restaurant=mizuho",
      hero: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=1400&q=80",
      subImage: "https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=1200&q=80",
      menus: [
        { name: "おまかせ握り", price: "¥16,000", desc: "その日のおすすめを中心にした握り。" },
        { name: "特選おまかせ", price: "¥24,000", desc: "旬の高級食材を使用した上位コース。" },
        { name: "日本酒ペアリング", price: "¥6,500", desc: "鮨に合う銘酒を少量ずつ楽しめます。" }
      ],
      gallery: [
        "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=80"
      ],
      guide: [
        "香水の強いご利用はお控えください。",
        "ネタの内容は仕入れにより変更となります。",
        "カウンター席のみのご案内です。"
      ]
    },

    sky: {
      category: "Bar",
      title: "バー「SKY LOUNGE」",
      lead: "夜景を一望するシックなバー。シグネチャーカクテルやジャパニーズウイスキーをお楽しみいただけます。",
      concept: "SKY LOUNGEは、都会の光を見下ろしながら静かにグラスを傾ける大人のための空間です。食後の一杯にも、特別な待ち合わせにもおすすめです。",
      hours: "18:00 – 24:00",
      seats: "40席",
      dress: "スマートカジュアル",
      floor: "33F",
      reserve: "booking.html?restaurant=sky",
      hero: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=1400&q=80",
      subImage: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1200&q=80",
      menus: [
        { name: "シグネチャーカクテル", price: "¥2,400", desc: "季節のフルーツを使ったオリジナルカクテル。" },
        { name: "ジャパニーズウイスキーセット", price: "¥3,600", desc: "銘柄を飲み比べできるセット。" },
        { name: "ナイトプレート", price: "¥4,200", desc: "チーズやハムを中心とした軽食プレート。" }
      ],
      gallery: [
        "https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?auto=format&fit=crop&w=1200&q=80"
      ],
      guide: [
        "20歳未満のお客様のご利用はご遠慮いただいております。",
        "窓側席は混雑状況によりご案内できない場合があります。",
        "ライブ演奏日は別途カバーチャージを頂戴します。"
      ]
    },

camellia: {
  category: "Tea Lounge",
  title: "ティーラウンジ「Camellia」",
  lead: "都心の景色を感じながら、季節のアフタヌーンティーや上質な紅茶、シグネチャードリンクを楽しめるホテルラウンジ。",
  concept: "Camelliaは、落ち着いたインテリアと柔らかな光に包まれた上品なティーラウンジです。チェックイン後のひと休みから、ご友人との語らい、軽いビジネスミーティングまで幅広くご利用いただけます。",
  hours: "10:00 – 20:00",
  seats: "50席",
  dress: "スマートカジュアル",
  floor: "1F Lobby",
  reserve: "booking.html?restaurant=camellia",
  hero: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1400&q=80",
  subImage: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1200&q=80",
  menus: [
    { name: "季節のアフタヌーンティー", price: "¥6,800", desc: "セイボリーとスイーツをバランスよく楽しめる人気セット。" },
    { name: "シグネチャーパフェ", price: "¥2,800", desc: "旬の果実を使ったホテルメイドのデザート。" },
    { name: "プレミアムティーセレクション", price: "¥2,200", desc: "厳選紅茶・ハーブティー・中国茶を豊富にご用意。" }
  ],
  gallery: [
    "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=1200&q=80"
  ],
  guide: [
    "アフタヌーンティーは前日までのご予約をおすすめしております。",
    "お席のご利用は混雑状況により時間制となる場合があります。",
    "テイクアウトスイーツのご用意もございます。"
  ]
}
  };

  const type = new URLSearchParams(location.search).get("type") || "aurora";
  const data = restaurants[type] || restaurants.aurora;

  const setText = (id, value) => {
    const el = document.getElementById(id);
    if (el) el.textContent = value;
  };

  setText("crumbName", data.title);
  setText("restaurantCategory", data.category);
  setText("restaurantTitle", data.title);
  setText("restaurantLead", data.lead);
  setText("restaurantConcept", data.concept);
  setText("restaurantHours", data.hours);
  setText("restaurantSeats", data.seats);
  setText("restaurantDress", data.dress);
  setText("restaurantFloor", data.floor);
  setText("ctaTitle", `${data.title} のご予約`);
  setText("ctaText", `${data.title} のお席をオンラインで承ります。記念日や会食利用にもご活用ください。`);

  const hero = document.getElementById("restaurantHeroImage");
  const sub = document.getElementById("restaurantSubImage");
  if (hero) {
    hero.src = data.hero;
    hero.alt = data.title;
  }
  if (sub) {
    sub.src = data.subImage;
    sub.alt = `${data.title} サブ画像`;
  }

  const reserveBtn = document.getElementById("restaurantReserveBtn");
  const reserveBtnBottom = document.getElementById("restaurantReserveBtnBottom");
  if (reserveBtn) reserveBtn.href = data.reserve;
  if (reserveBtnBottom) reserveBtnBottom.href = data.reserve;

  const menuWrap = document.getElementById("restaurantMenus");
  if (menuWrap) {
    menuWrap.innerHTML = data.menus.map(item => `
      <article class="restaurant-menu-card">
        <h3>${item.name}</h3>
        <p>${item.desc}</p>
        <div class="restaurant-menu-price">${item.price}</div>
      </article>
    `).join("");
  }

  const galleryWrap = document.getElementById("restaurantGallery");
  if (galleryWrap) {
    galleryWrap.innerHTML = data.gallery.map(src => `
      <button class="restaurant-gallery-item" type="button">
        <img src="${src}" alt="${data.title}">
      </button>
    `).join("");
  }

  const guideWrap = document.getElementById("restaurantGuide");
  if (guideWrap) {
    guideWrap.innerHTML = data.guide.map(item => `<li>${item}</li>`).join("");
  }

  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightboxImg");

  if (galleryWrap && lightbox && lightboxImg) {
    galleryWrap.addEventListener("click", (e) => {
      const btn = e.target.closest(".restaurant-gallery-item");
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