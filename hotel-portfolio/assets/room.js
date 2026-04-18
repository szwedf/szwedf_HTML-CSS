/* global HOTEL_UTIL */
(async function () {
  if (!window.HOTEL_UTIL) {
    console.error("HOTEL_UTIL が読み込まれていません。common.js を room.js より前に読み込んでください。");
    return;
  }

  const U = window.HOTEL_UTIL;

  const type = U.qs("type") || "double";
  const API = `${U.apiBase}/room.php?${new URLSearchParams({ type }).toString()}`;

  const heroImg = document.getElementById("heroImg");
  const titleEl = document.getElementById("roomTitle");
  const descEl = document.getElementById("roomDesc");
  const priceEl = document.getElementById("priceFrom");
  const capEl = document.getElementById("cap");
  const badgesEl = document.getElementById("badges");
  const thumbsEl = document.getElementById("thumbs");
  const bookBtn = document.getElementById("bookBtn");
  const roomFacts = document.getElementById("roomFacts");
  const useCases = document.getElementById("useCases");
  const crumbRoom = document.getElementById("crumbRoom");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightboxImg");

  const q = U.qso();
  const room = U.roomAssets[type] || U.roomAssets.double;

  const nights = U.nightsBetween(q.checkin, q.checkout);
  const guests = Math.max(1, Number(q.guests || 1));

  function renderRoom(localRoom, apiItem) {
    const gallery = U.mergeGallery(localRoom, apiItem);
    const hero = gallery[0] || localRoom.hero;

    const apiPrice = Number(
      apiItem?.price_per_person ||
      apiItem?.price_from ||
      localRoom.pricePerPerson
    );

    const total = apiPrice * guests * nights;

    if (heroImg) {
      heroImg.src = hero;
      heroImg.alt = `${apiItem?.name_jp || localRoom.title} 客室イメージ`;
    }

    if (titleEl) titleEl.textContent = apiItem?.name_jp || localRoom.title;
    if (crumbRoom) crumbRoom.textContent = apiItem?.name_jp || localRoom.title;
    if (descEl) descEl.textContent = apiItem?.description || localRoom.description;

    if (priceEl) {
      priceEl.textContent = `${U.formatYen(apiPrice)} / 1名1泊`;
    }

    if (capEl) {
      capEl.textContent =
        `定員 ${apiItem?.max_capacity || localRoom.capacity} / ${nights}泊 ${guests}名 合計 ${U.formatYen(total)}`;
    }

    if (badgesEl) {
      const tags = [
        apiItem?.default_bed ? `ベッド: ${apiItem.default_bed}` : `ベッド: ${localRoom.bed}`,
        localRoom.size,
        "Wi-Fi無料",
        type === "deluxe" || type === "suite" ? "独立バス" : "バス・トイレ",
        "禁煙ルーム"
      ];

      badgesEl.innerHTML = tags
        .filter(Boolean)
        .map(t => `<span class="badge">${t}</span>`)
        .join("");
    }

    if (roomFacts) {
      roomFacts.innerHTML = `
        <span class="badge">広さ: ${localRoom.size}</span>
        <span class="badge">定員: ${apiItem?.max_capacity || localRoom.capacity}</span>
        <span class="badge">ベッド: ${apiItem?.default_bed || localRoom.bed}</span>
      `;
    }

    if (useCases) {
      useCases.innerHTML = localRoom.useCases
        .map(v => `<li>${v}</li>`)
        .join("");
    }

    if (thumbsEl) {
      thumbsEl.innerHTML = gallery
        .map(src => `<img src="${src}" alt="${localRoom.title}" loading="lazy">`)
        .join("");
    }

    if (bookBtn) {
      const nextQs = {
        ...q,
        type,
        nights,
        unit_price: apiPrice,
        total_price: total
      };

      bookBtn.href = `booking.html?${new URLSearchParams(nextQs).toString()}`;
    }
  }

  // まずローカル画像・ローカル情報で即表示
  renderRoom(room, null);

  // APIで部屋情報・API画像を補完
  try {
    const res = await fetch(API, { credentials: "include" });
    const data = await res.json();

    if (data.ok && data.item) {
      renderRoom(room, data.item);
    }
  } catch (e) {
    console.warn("room.php の取得に失敗:", e);
  }

  // サムネクリックでヒーロー差し替え
  if (thumbsEl && heroImg) {
    thumbsEl.addEventListener("click", (e) => {
      const img = e.target.closest("img");
      if (!img) return;
      heroImg.src = img.src;
    });
  }

  // Lightbox
  if (thumbsEl && lightbox && lightboxImg) {
    thumbsEl.addEventListener("dblclick", (e) => {
      const img = e.target.closest("img");
      if (!img) return;
      lightboxImg.src = img.src;
      lightbox.classList.add("open");
    });

    lightbox.addEventListener("click", () => {
      lightbox.classList.remove("open");
    });
  }
})();