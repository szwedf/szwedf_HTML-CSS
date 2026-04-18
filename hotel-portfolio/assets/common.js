// =========================================================
// HOTEL AURELIA TOKYO - common.js
// 共通ユーティリティ / 客室データ / メニュー / reveal
// =========================================================

window.HOTEL_UTIL = window.HOTEL_UTIL || {};

(function () {
  const U = window.HOTEL_UTIL;

  // APIの場所
  // room.html / search.html から見て ../hotel-admin/api にある想定
  U.apiBase = U.apiBase || "../hotel-admin/api";

  // クエリ取得: HOTEL_UTIL.qs("type")
  U.qs = function (name) {
    return new URLSearchParams(location.search).get(name);
  };

  // クエリ全体をオブジェクト化
  U.qso = function () {
    return Object.fromEntries(new URLSearchParams(location.search));
  };

  // 金額表示
  U.formatYen = function (n) {
    return `¥${Number(n || 0).toLocaleString()}`;
  };

  // 宿泊数計算
  U.nightsBetween = function (checkin, checkout) {
    if (!checkin || !checkout) return 1;

    const inDate = new Date(checkin + "T00:00:00");
    const outDate = new Date(checkout + "T00:00:00");

    if (Number.isNaN(inDate.getTime()) || Number.isNaN(outDate.getTime())) {
      return 1;
    }

    const diff = Math.round((outDate - inDate) / 86400000);
    return diff > 0 ? diff : 1;
  };

  // 客室タイプ日本語
  U.typeLabel = function (type) {
    const labels = {
      single: "シングル",
      double: "ダブル",
      twin: "ツイン",
      deluxe: "デラックス",
      suite: "スイート"
    };
    return labels[type] || "ダブル";
  };

  // =========================================================
  // 客室ローカル定義
  // API画像 + ローカル画像のハイブリッド用
  // =========================================================
  U.roomAssets = {
    single: {
      title: "シングル",
      hero: "images/room-single.png",
      bath: "images/bathroom.png",
      gallery: [
        "images/room-single.png",
        "images/bathroom.png"
      ],
      size: "25㎡",
      capacity: "1名",
      bed: "セミダブルベッド",
      pricePerPerson: 28000,
      description:
        "コンパクトながら、上質な寝具とワークデスクを備えた機能的な客室。ビジネス利用にもおすすめです。",
      badges: ["セミダブルベッド", "25㎡", "Wi-Fi無料", "ワークデスク", "禁煙ルーム"],
      useCases: ["ビジネス利用", "一人旅", "短期滞在"]
    },

    double: {
      title: "ダブル",
      hero: "images/room-tokyo-night.jpg",
      bath: "images/bathroom.png",
      gallery: [
        "images/room-tokyo-night.jpg",
        "images/bathroom.png"
      ],
      size: "32㎡",
      capacity: "1〜2名",
      bed: "キングベッド",
      pricePerPerson: 42000,
      description:
        "落ち着いた色調の空間で、二名利用にもゆとりあるスタンダード客室。東京の夜景を望む客室です。",
      badges: ["キングベッド", "32㎡", "Wi-Fi無料", "東京ビュー", "禁煙ルーム"],
      useCases: ["カップル", "記念日", "週末ステイ"]
    },

    twin: {
      title: "ツイン",
      hero: "images/room-twin.png",
      bath: "images/bathroom.png",
      gallery: [
        "images/room-twin.png",
        "images/bathroom.png"
      ],
      size: "36㎡",
      capacity: "2名",
      bed: "セミダブルベッド × 2",
      pricePerPerson: 39000,
      description:
        "友人同士や家族での滞在に適した2ベッドタイプ。ゆったりとした空間で快適にお過ごしいただけます。",
      badges: ["ツインベッド", "36㎡", "Wi-Fi無料", "ソファ", "禁煙ルーム"],
      useCases: ["友人同士", "家族旅行", "観光"]
    },

    deluxe: {
      title: "デラックス",
      hero: "images/room-deluxe.png",
      bath: "images/bathroom.png",
      gallery: [
        "images/room-deluxe.png",
        "images/bathroom.png",
      ],
      size: "45㎡",
      capacity: "1〜3名",
      bed: "キングベッド",
      pricePerPerson: 68000,
      description:
        "大きな窓から東京の夜景を楽しめる、ホテルを代表する人気の客室。ゆとりある空間と上質なインテリアが魅力です。",
      badges: ["キングベッド", "45㎡", "東京ビュー", "独立バス", "禁煙ルーム"],
      useCases: ["記念日", "上質な滞在", "東京観光"]
    },

    suite: {
      title: "スイート",
      hero: "images/room-corner-suite.png",
      bath: "images/bathroom.png",
      gallery: [
        "images/room-corner-suite.png",
        "images/bathroom.png",
      ],
      size: "80㎡",
      capacity: "1〜3名",
      bed: "キングベッド",
      pricePerPerson: 135000,
      description:
        "リビングとベッドルームを備えた、特別な滞在にふさわしい上位客室。記念日や特別なご宿泊におすすめです。",
      badges: ["キングベッド", "80㎡", "Wi-Fi無料", "リビング", "独立バス", "ラウンジアクセス"],
      useCases: ["特別な記念日", "ラグジュアリーステイ", "長めのご滞在"]
    }
  };

  // 旧コード互換
  U.assetFor = function (type) {
    return U.roomAssets[type] || U.roomAssets.double;
  };

  // APIレスポンスから画像を拾う
  U.pickApiImages = function (item) {
    const list = [];

    if (!item) return list;

    if (Array.isArray(item.gallery)) item.gallery.forEach(v => v && list.push(v));
    if (Array.isArray(item.images)) item.images.forEach(v => v && list.push(v));
    if (Array.isArray(item.bath_images)) item.bath_images.forEach(v => v && list.push(v));

    if (typeof item.images_csv === "string") {
      item.images_csv
        .split(",")
        .map(v => v.trim())
        .filter(Boolean)
        .forEach(v => list.push(v));
    }

    if (typeof item.gallery_csv === "string") {
      item.gallery_csv
        .split(",")
        .map(v => v.trim())
        .filter(Boolean)
        .forEach(v => list.push(v));
    }

    [
      item.hero_image,
      item.image_url,
      item.image,
      item.image1,
      item.image2,
      item.image3,
      item.main_image,
      item.thumbnail,
      item.bath_image
    ].forEach(v => {
      if (v) list.push(v);
    });

    return [...new Set(list)];
  };

  // API画像 + ローカル画像を統合
  // API画像を先頭優先、ローカル画像を保険で後ろに追加
  U.mergeGallery = function (localAssets, apiItem) {
    const apiList = U.pickApiImages(apiItem || {});
    const localList = [
      localAssets.hero,
      ...(localAssets.gallery || []),
      localAssets.bath
    ].filter(Boolean);

    return [...new Set([...apiList, ...localList])];
  };
})();


// =========================================================
// Header / Drawer / Reveal
// =========================================================
document.addEventListener("DOMContentLoaded", () => {
  const y = document.getElementById("y");
  if (y) y.textContent = new Date().getFullYear();

  const openMenu = document.getElementById("openMenu");
  const overlay = document.getElementById("overlay");

  if (openMenu && overlay) {
    openMenu.addEventListener("click", () => {
      overlay.classList.add("open");
      overlay.setAttribute("aria-hidden", "false");
    });

    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) {
        overlay.classList.remove("open");
        overlay.setAttribute("aria-hidden", "true");
      }
    });
  }

  const revealEls = document.querySelectorAll(".reveal");

  if (!revealEls.length) return;

  if (!("IntersectionObserver" in window)) {
    revealEls.forEach(el => el.classList.add("in"));
    return;
  }

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");
        io.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.08,
    rootMargin: "0px 0px -40px 0px"
  });

  revealEls.forEach(el => io.observe(el));

  // 保険：JSやIntersectionObserverの都合で透明のままになるのを防ぐ
  setTimeout(() => {
    revealEls.forEach(el => el.classList.add("in"));
  }, 1000);
});
document.addEventListener("DOMContentLoaded", function () {
  const restaurants = [
    {
      category: "Fine Dining",
      name: "メインダイニング「AURORA」",
      description:
        "旬の食材を活かしたコンテンポラリー・キュイジーヌ。東京の夜景を望む落ち着いた空間で、シェフ渾身のコース料理をお楽しみいただけます。",
      image:
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80",
      alt: "メインダイニング",
      hours: "17:30–22:00",
      seats: "60席",
      dress: "スマートカジュアル",
      detailLink: "restaurant.html?type=aurora",
      reserveLink: "booking.html?restaurant=aurora"
    },
    {
      category: "Teppanyaki",
      name: "鉄板焼「響」",
      description:
        "厳選和牛や新鮮な魚介を目の前で焼き上げる臨場感あふれる鉄板焼。シェフとの会話とともに、贅沢な時間をご堪能ください。",
      image:
        "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80",
      alt: "鉄板焼",
      hours: "17:30–21:30",
      seats: "20席",
      dress: "スマートカジュアル",
      detailLink: "restaurant.html?type=hibiki",
      reserveLink: "booking.html?restaurant=hibiki"
    },
    {
      category: "Sushi",
      name: "鮨「瑞穂」",
      description:
        "豊洲直送の鮮魚を使用した江戸前鮨。檜のカウンターで、職人が一貫ずつ丁寧に握る本格的な味わいをお届けします。",
      image:
        "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=1200&q=80",
      alt: "鮨",
      hours: "18:00–22:00",
      seats: "12席",
      dress: "スマートカジュアル",
      detailLink: "restaurant.html?type=mizuho",
      reserveLink: "booking.html?restaurant=mizuho"
    },
    {
      category: "Bar",
      name: "バー「SKY LOUNGE」",
      description:
        "都心の夜景を一望できるシックなバー。シグネチャーカクテルやジャパニーズウイスキーとともに、静かな大人の時間を。",
      image:
        "https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=1200&q=80",
      alt: "バー",
      hours: "18:00–24:00",
      seats: "40席",
      dress: "スマートカジュアル",
      detailLink: "restaurant.html?type=sky",
      reserveLink: "booking.html?restaurant=sky"
    },
    {
      category: "Lounge",
      name: "ラウンジ「Camellia」",
      description:
        "季節のアフタヌーンティーや軽食、上質な紅茶を楽しめるラウンジ。チェックイン後のひとときや待ち合わせにも最適です。",
      image:
        "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1200&q=80",
      alt: "ラウンジ",
      hours: "10:00–20:00",
      seats: "50席",
      dress: "カジュアル",
      detailLink: "restaurant.html?type=camellia",
      reserveLink: "booking.html?restaurant=camellia"
    }
  ];

  const image = document.getElementById("restaurantImage");
  const category = document.getElementById("restaurantCategory");
  const name = document.getElementById("restaurantName");
  const description = document.getElementById("restaurantDescription");
  const meta = document.getElementById("restaurantMeta");
  const tabs = document.querySelectorAll(".restaurant-tab");
  const detailBtn = document.querySelector(".restaurant-actions .btn");
  const reserveBtn = document.querySelector(".restaurant-actions .btn.gold");

  let current = 0;
  let timer;

  function renderRestaurant(index) {
    const item = restaurants[index];

    image.src = item.image;
    image.alt = item.alt;
    category.textContent = item.category;
    name.textContent = item.name;
    description.textContent = item.description;

    meta.innerHTML = `
      <li><span>営業時間</span><strong>${item.hours}</strong></li>
      <li><span>席数</span><strong>${item.seats}</strong></li>
      <li><span>ドレスコード</span><strong>${item.dress}</strong></li>
    `;

    detailBtn.href = item.detailLink;
    reserveBtn.href = item.reserveLink;

    tabs.forEach((tab) => tab.classList.remove("active"));
    tabs[index].classList.add("active");

    current = index;
  }

  function startAutoSlide() {
    timer = setInterval(() => {
      let next = current + 1;
      if (next >= restaurants.length) next = 0;
      renderRestaurant(next);
    }, 5000);
  }

  function resetAutoSlide() {
    clearInterval(timer);
    startAutoSlide();
  }

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const index = Number(tab.dataset.index);
      renderRestaurant(index);
      resetAutoSlide();
    });
  });

  renderRestaurant(0);
  startAutoSlide();
});