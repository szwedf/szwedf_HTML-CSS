document.addEventListener("DOMContentLoaded", () => {
  const wellnessData = {
    fitness: {
      category: "Fitness",
      title: "フィットネスジム",
      lead: "シティビューを望む開放的なフィットネスエリア。ランニングマシン、ウェイト、ストレッチスペースに加え、専用シャワールームを備えています。",
      concept: "ご宿泊のお客様が自由にご利用いただけるフィットネスジムです。朝のリフレッシュから夜の軽いワークアウトまで、滞在中のコンディションを整える空間としてご活用いただけます。専用シャワールームも併設しており、ご利用後も快適にお過ごしいただけます。",
      hours: "6:00 – 22:00",
      target: "ご宿泊者専用",
      access: "宿泊者は無料",
      floor: "28F",
      actionLink: "search.html",
      actionText: "宿泊予約を見る",
      hero: "images/fitness-gym.jpg",
      subImage: "images/bathroom.png",
      services: [
        {
          name: "テクノジム機器",
          desc: "ランニングマシン、バイク、クロストレーナー、ウェイト機器を完備。"
        },
        {
          name: "ストレッチスペース",
          desc: "軽い体操やヨガ、クールダウンに使えるゆとりあるエリア。"
        },
        {
          name: "専用シャワールーム",
          desc: "運動後にそのまま利用できる清潔感のある個室シャワールーム。"
        }
      ],
      gallery: [
        "images/fitness-gym.jpg",
        "images/bathroom.png",
        "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80"
      ],
      guide: [
        "ご宿泊のお客様は無料でご利用いただけます。",
        "ウェア・シューズはご持参ください。",
        "シャワールームにはタオルとアメニティをご用意しております。"
      ],
      ctaTitle: "滞在中も、心地よいコンディションを",
      ctaText: "ご宿泊とあわせて、無料のフィットネスジムとシャワールームをご利用いただけます。"
    },

    spa: {
      category: "Spa",
      title: "スパ＆トリートメント",
      lead: "マッサージ、アロマオイルトリートメント、ボディケア、フェイシャルまで幅広くご用意した都心の癒やし空間。",
      concept: "旅の疲れをほぐすベーシックなボディケアから、深いリラクゼーションへ導くオイルトリートメント、肌を整えるフェイシャルまで、多彩なメニューをご提供しています。静かな個室空間で、心身をやさしく整えるウェルネス体験をお楽しみください。",
      hours: "13:00 – 22:00",
      target: "宿泊者 / 外来利用可",
      access: "予約優先",
      floor: "27F",
      actionLink: "booking.html?service=spa",
      actionText: "スパを予約する",
      hero: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1400&q=80",
      subImage: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=80",
      services: [
        {
          name: "ディープティシューマッサージ",
          desc: "首・肩・背中を中心に、しっかり圧をかけてコリをほぐします。"
        },
        {
          name: "アロマオイルトリートメント",
          desc: "香りに包まれながら全身をやさしく整える人気メニュー。"
        },
        {
          name: "フェイシャルケア",
          desc: "乾燥やくすみが気になる方に向けた、ホテルスパならではのトリートメント。"
        }
      ],
      gallery: [
        "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1200&q=80"
      ],
      guide: [
        "トリートメントは事前予約をおすすめしております。",
        "妊娠中・通院中のお客様は事前にご相談ください。",
        "施術前後は十分な水分補給をおすすめします。"
      ],
      ctaTitle: "都心で味わう、上質なリラクゼーション",
      ctaText: "マッサージからオイルトリートメントまで、その日の気分やお疲れに合わせてお選びいただけます。"
    }
  };

  const type = new URLSearchParams(location.search).get("type") || "fitness";
  const data = wellnessData[type] || wellnessData.fitness;

  const setText = (id, value) => {
    const el = document.getElementById(id);
    if (el) el.textContent = value;
  };

  setText("crumbName", data.title);
  setText("wellnessCategory", data.category);
  setText("wellnessTitle", data.title);
  setText("wellnessLead", data.lead);
  setText("wellnessConcept", data.concept);
  setText("wellnessHours", data.hours);
  setText("wellnessTarget", data.target);
  setText("wellnessAccess", data.access);
  setText("wellnessFloor", data.floor);
  setText("wellnessCtaTitle", data.ctaTitle);
  setText("wellnessCtaText", data.ctaText);

  const hero = document.getElementById("wellnessHeroImage");
  const sub = document.getElementById("wellnessSubImage");
  if (hero) {
    hero.src = data.hero;
    hero.alt = data.title;
  }
  if (sub) {
    sub.src = data.subImage;
    sub.alt = `${data.title} サブ画像`;
  }

  const actionBtn = document.getElementById("wellnessActionBtn");
  const actionBtnBottom = document.getElementById("wellnessActionBtnBottom");
  if (actionBtn) {
    actionBtn.href = data.actionLink;
    actionBtn.textContent = data.actionText;
  }
  if (actionBtnBottom) {
    actionBtnBottom.href = data.actionLink;
    actionBtnBottom.textContent = data.actionText;
  }

  const servicesWrap = document.getElementById("wellnessServices");
  if (servicesWrap) {
    servicesWrap.innerHTML = data.services.map(item => `
      <article class="wellness-service-card">
        <h3>${item.name}</h3>
        <p>${item.desc}</p>
      </article>
    `).join("");
  }

  const galleryWrap = document.getElementById("wellnessGallery");
  if (galleryWrap) {
    galleryWrap.innerHTML = data.gallery.map(src => `
      <button class="wellness-gallery-item" type="button">
        <img src="${src}" alt="${data.title}">
      </button>
    `).join("");
  }

  const guideWrap = document.getElementById("wellnessGuide");
  if (guideWrap) {
    guideWrap.innerHTML = data.guide.map(item => `<li>${item}</li>`).join("");
  }

  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightboxImg");

  if (galleryWrap && lightbox && lightboxImg) {
    galleryWrap.addEventListener("click", (e) => {
      const btn = e.target.closest(".wellness-gallery-item");
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