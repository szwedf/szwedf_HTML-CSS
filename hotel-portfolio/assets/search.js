HOTEL_UTIL.nightsBetween = function (checkin, checkout) {
  if (!checkin || !checkout) return 1;

  const inDate = new Date(checkin + "T00:00:00");
  const outDate = new Date(checkout + "T00:00:00");

  if (Number.isNaN(inDate.getTime()) || Number.isNaN(outDate.getTime())) return 1;

  const diff = Math.round((outDate - inDate) / 86400000);
  return diff > 0 ? diff : 1;
};

HOTEL_UTIL.formatYen = function (n) {
  return `¥${Number(n).toLocaleString()}`;
};

HOTEL_UTIL.roomAssets = {
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
    description: "コンパクトながら、上質な寝具とワークデスクを備えた機能的な客室。ビジネス利用にもおすすめです。",
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
    pricePerPerson: 36000,
    description: "落ち着いた色調の空間で、二名利用にもゆとりあるスタンダード客室。東京の夜景を望む客室です。",
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
    pricePerPerson: 34000,
    description: "友人同士や家族での滞在に適した2ベッドタイプ。ゆったりとした空間で快適にお過ごしいただけます。",
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
      "images/room-twin.png"
    ],
    size: "45㎡",
    capacity: "1〜3名",
    bed: "キングベッド",
    pricePerPerson: 62000,
    description: "大きな窓から東京の夜景を楽しめる、ホテルを代表する人気の客室。ゆとりある空間と上質なインテリアが魅力です。",
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
      "images/room-deluxe.png"
    ],
    size: "80㎡",
    capacity: "1〜3名",
    bed: "キングベッド",
    pricePerPerson: 120000,
    description: "リビングとベッドルームを備えた、特別な滞在にふさわしい上位客室。記念日や特別なご宿泊におすすめです。",
    badges: ["キングベッド", "80㎡", "Wi-Fi無料", "リビング", "独立バス", "ラウンジアクセス"],
    useCases: ["特別な記念日", "ラグジュアリーステイ", "長めのご滞在"]
  }
};

HOTEL_UTIL.pickApiImages = function (item) {
  const list = [];

  if (Array.isArray(item?.gallery)) item.gallery.forEach(v => v && list.push(v));
  if (Array.isArray(item?.images)) item.images.forEach(v => v && list.push(v));
  if (Array.isArray(item?.bath_images)) item.bath_images.forEach(v => v && list.push(v));

  if (typeof item?.images_csv === "string") {
    item.images_csv.split(",").map(v => v.trim()).filter(Boolean).forEach(v => list.push(v));
  }
  if (typeof item?.gallery_csv === "string") {
    item.gallery_csv.split(",").map(v => v.trim()).filter(Boolean).forEach(v => list.push(v));
  }

  [
    item?.hero_image,
    item?.image_url,
    item?.image,
    item?.image1,
    item?.image2,
    item?.image3,
    item?.main_image,
    item?.thumbnail,
    item?.bath_image
  ].forEach(v => {
    if (v) list.push(v);
  });

  return [...new Set(list)];
};

HOTEL_UTIL.mergeGallery = function (localAssets, apiItem) {
  const localList = [localAssets.hero, ...(localAssets.gallery || []), localAssets.bath].filter(Boolean);
  const apiList = HOTEL_UTIL.pickApiImages(apiItem || {});
  return [...new Set([...apiList, ...localList])];
};