new Vue({
    el: '#app',
    data: {
      lang: 'jp',
      navOpen: false,
      categories: [
        { jp: '朝食', en: 'Breakfast' },
        { jp: 'ランチ', en: 'Lunch' },
        { jp: 'ディナー', en: 'Dinner' },
        { jp: 'デザート', en: 'Dessert' },
        { jp: 'ドリンク', en: 'Drinks' },
        { jp: 'サイドメニュー', en: 'Side Menu' }
      ],
      currentCategory: '朝食',
      menu: [
        { category: '朝食', name: { jp: 'アボカドトースト', en: 'Avocado Toast' }, description: { jp: 'ライ麦パンにアボカドとポーチドエッグを添えて', en: 'Rye toast with avocado and poached egg' }, price: 780 },
        { category: '朝食', name: { jp: 'たまごサンドウィッチ', en: 'Egg Sandwich' }, description: { jp: 'ふわふわたまごの優しい味わい', en: 'Fluffy egg with gentle taste' }, price: 750 },
        { category: '朝食', name: { jp: 'ハムサンド', en: 'Ham Sandwich' }, description: { jp: 'ハムとチーズの定番サンド', en: 'Classic ham and cheese sandwich' }, price: 780 },
        { category: '朝食', name: { jp: 'オムレツ', en: 'Omelette' }, description: { jp: 'ふんわりと仕上げたオムレツ', en: 'Fluffy and soft omelette' }, price: 800 },
        { category: '朝食', name: { jp: 'シナモンロール', en: 'Cinnamon Roll' }, description: { jp: '香り豊かなシナモンの朝の定番', en: 'Fragrant cinnamon morning classic' }, price: 700 },
  
        { category: 'ランチ', name: { jp: 'グリルチーズサンド', en: 'Grilled Cheese Sandwich' }, description: { jp: '濃厚チーズとキャラメルオニオンを全粒粉パンで', en: 'Rich cheese and caramelized onion on whole grain bread' }, price: 880 },
        { category: 'ランチ', name: { jp: 'マカロニ＆チーズ', en: 'Mac & Cheese' }, description: { jp: 'チーズたっぷりの定番コンフォートフード', en: 'Classic comfort food with creamy cheese sauce' }, price: 950 },
        { category: 'ランチ', name: { jp: 'シーザーサラダ', en: 'Caesar Salad' }, description: { jp: 'ロメインレタスにパルメザンチーズとクルトン', en: 'Romaine lettuce with parmesan and croutons' }, price: 900 },
        { category: 'ランチ', name: { jp: 'ボロネーゼ', en: 'Bolognese' }, description: { jp: '牛ひき肉たっぷりの濃厚ミートソースパスタ', en: 'Rich meat sauce pasta with minced beef' }, price: 1080 },
        { category: 'ランチ', name: { jp: 'カルボナーラ', en: 'Carbonara' }, description: { jp: 'クリーミーな卵とベーコンのパスタ', en: 'Creamy egg and bacon pasta' }, price: 1100 },
        { category: 'ランチ', name: { jp: 'ペペロンチーノ', en: 'Peperoncino' }, description: { jp: 'ガーリックと唐辛子のシンプルパスタ', en: 'Simple pasta with garlic and chili' }, price: 980 },
        { category: 'ランチ', name: { jp: 'トマトとモッツァレラパスタ', en: 'Tomato & Mozzarella Pasta' }, description: { jp: 'トマトの酸味とモッツァレラのコクが絶妙', en: 'Tomato acidity and mozzarella richness' }, price: 1050 },
        { category: 'ランチ', name: { jp: 'ハンバーグ', en: 'Hamburger Steak' }, description: { jp: '松坂牛100%使用のジューシーなハンバーグ', en: 'Juicy hamburger steak made with 100% Matsusaka beef' }, price: 1280 },
  
        { category: 'ディナー', name: { jp: 'ハンバーグ', en: 'Hamburger Steak' }, description: { jp: '松坂牛100%使用のジューシーなハンバーグ', en: 'Juicy hamburger steak made with 100% Matsusaka beef' }, price: 1480 },
        { category: 'ディナー', name: { jp: 'ボロネーゼ', en: 'Bolognese' }, description: { jp: '牛ひき肉たっぷりの濃厚ミートソースパスタ', en: 'Rich meat sauce pasta with minced beef' }, price: 1200 },
        { category: 'ディナー', name: { jp: 'カルボナーラ', en: 'Carbonara' }, description: { jp: 'クリーミーな卵とベーコンのパスタ', en: 'Creamy egg and bacon pasta' }, price: 1200 },
        { category: 'ディナー', name: { jp: 'ペペロンチーノ', en: 'Peperoncino' }, description: { jp: 'ガーリックと唐辛子のシンプルパスタ', en: 'Simple pasta with garlic and chili' }, price: 1050 },
        { category: 'ディナー', name: { jp: 'トマトとモッツァレラパスタ', en: 'Tomato & Mozzarella Pasta' }, description: { jp: 'トマトの酸味とモッツァレラのコクが絶妙', en: 'Tomato acidity and mozzarella richness' }, price: 1150 },
  
        { category: 'デザート', name: { jp: 'バターミルクパンケーキ', en: 'Buttermilk Pancakes' }, description: { jp: 'ふわふわで優しい甘さ', en: 'Fluffy and gently sweet' }, price: 880 },
        { category: 'デザート', name: { jp: 'NYチーズケーキ', en: 'NY Cheesecake' }, description: { jp: '濃厚でなめらかな味わい', en: 'Rich and smooth flavor' }, price: 920 },
        { category: 'デザート', name: { jp: 'チョコレートスフレケーキ', en: 'Chocolate Soufflé Cake' }, description: { jp: '口溶けの良いチョコレートケーキ', en: 'Melt-in-your-mouth chocolate cake' }, price: 890 },
        { category: 'デザート', name: { jp: 'クレームブリュレ', en: 'Crème Brûlée' }, description: { jp: 'パリッとした表面と滑らかな中身', en: 'Crispy top and smooth inside' }, price: 850 },
        { category: 'デザート', name: { jp: 'アイスバニラ', en: 'Vanilla Ice Cream' }, description: { jp: '定番のバニラ風味', en: 'Classic vanilla flavor' }, price: 500 },
        { category: 'デザート', name: { jp: 'チョコアイス', en: 'Chocolate Ice Cream' }, description: { jp: '濃厚なチョコレートアイス', en: 'Rich chocolate ice cream' }, price: 500 },
        { category: 'デザート', name: { jp: 'パフェ', en: 'Parfait' }, description: { jp: 'フルーツたっぷりの華やかなパフェ', en: 'Colorful parfait with lots of fruit' }, price: 980 },
        { category: 'デザート', name: { jp: 'プリン', en: 'Pudding' }, description: { jp: '優しい甘さの自家製プリン', en: 'Homemade pudding with gentle sweetness' }, price: 600 },
  
        { category: 'サイドメニュー', name: { jp: 'フレンチフライ', en: 'French Fries' }, description: { jp: 'カリッと揚げたサイドの定番', en: 'Crispy classic side dish' }, price: 450 },
        { category: 'サイドメニュー', name: { jp: 'スモークベーコン', en: 'Smoked Bacon' }, description: { jp: '香ばしい香りが食欲をそそる', en: 'Savory and aromatic bacon' }, price: 500 },
        { category: 'サイドメニュー', name: { jp: 'ウインナー', en: 'Sausage' }, description: { jp: 'ジューシーなウインナー', en: 'Juicy sausage' }, price: 480 },
        { category: 'サイドメニュー', name: { jp: 'ホイップクリーム', en: 'Whipped Cream' }, description: { jp: 'デザートにぴったりのトッピング', en: 'Perfect topping for desserts' }, price: 200 },
         // ドリンク
         
            {category: 'ドリンク',
            name: { jp: 'カフェラテ', en: 'Cafe Latte' },
            description: { jp: 'ホットまたはアイスのミルク入りコーヒー', en: 'Hot or iced coffee with milk' },
            price: 800
          },
          {
            category: 'ドリンク',
            name: { jp: 'アールグレイティー', en: 'Earl Grey Tea' },
            description: { jp: '香り高いベルガモットのフレーバーティー', en: 'Aromatic black tea with bergamot flavor' },
            price: 880
          },
          {
            category: 'ドリンク',
            name: { jp: 'ダージリンティー', en: 'Darjeeling Tea' },
            description: { jp: '芳醇な香りの紅茶の女王', en: 'The queen of teas with rich aroma' },
            price: 880
          },
          {
            category: 'ドリンク',
            name: { jp: 'アイスティー（アールグレイ）', en: 'Iced Earl Grey Tea' },
            description: { jp: '冷たく爽やかなベルガモットの香り', en: 'Chilled tea with refreshing bergamot flavor' },
            price: 800
          },
          {
            category: 'ドリンク',
            name: { jp: 'ジンジャーエール', en: 'Ginger Ale' },
            description: { jp: '炭酸の効いた爽快ドリンク', en: 'Crisp and refreshing ginger soda' },
            price: 740
          },
          {
            category: 'ドリンク',
            name: { jp: 'コーラ', en: 'Cola' },
            description: { jp: 'おなじみの炭酸飲料', en: 'Classic carbonated drink' },
            price: 740
          },
          {
            category: 'ドリンク',
            name: { jp: 'ミルク（ホット／アイス）', en: 'Milk (Hot / Iced)' },
            description: { jp: 'あたたかくても冷たくても楽しめるミルク', en: 'Milk served hot or iced' },
            price: 740
          },
          {
            category: 'ドリンク',
            name: { jp: 'オレンジジュース', en: 'Orange Juice' },
            description: { jp: '100%フレッシュオレンジジュース', en: '100% fresh orange juice' },
            price: 740
          },
          {
            category: 'ドリンク',
            name: { jp: 'KIRIN プレミアム（ドラフト）', en: 'KIRIN Premium (Draft)' },
            description: { jp: 'キリンの上質なドラフトビール', en: 'High-quality draft beer by KIRIN' },
            price: 950
          },
          {
            category: 'ドリンク',
            name: { jp: 'ノンアルコールビール', en: 'Non-Alcohol Beer' },
            description: { jp: 'アルコールゼロでも満足の味わい', en: 'Satisfying taste without alcohol' },
            price: 810
          },
          {
            category: 'ドリンク',
            name: { jp: 'クラシックハイボール', en: 'Classic Highball' },
            description: { jp: 'ウイスキーとソーダの爽快な一杯', en: 'Refreshing whisky and soda' },
            price: 950
          },
          {
            category: 'ドリンク',
            name: { jp: 'ジントニック', en: 'Gin & Tonic' },
            description: { jp: 'ジンとトニックの定番カクテル', en: 'Classic gin and tonic cocktail' },
            price: 950
          },
          {
            category: 'ドリンク',
            name: { jp: 'アペロールスプリッツ', en: 'Aperol Spritz' },
            description: { jp: 'アペロール、白ワイン、ソーダの爽やかカクテル', en: 'Aperol, white wine, and soda' },
            price: 950
          },
          {
            category: 'ドリンク',
            name: { jp: 'グレープフルーツパロマ', en: 'Grapefruit Paloma' },
            description: { jp: 'グレープフルーツ、テキーラ、ライムのカクテル', en: 'Grapefruit juice, tequila, and lime' },
            price: 1100
          },
          {
            category: 'ドリンク',
            name: { jp: 'ペアーコリンズ', en: 'Pear Collins' },
            description: { jp: '洋梨ピューレ、ジン、レモンの爽やかカクテル', en: 'Pear puree, gin, tonic, and lemon juice' },
            price: 1100
          },
          {
            category: 'ドリンク',
            name: { jp: 'サングリア', en: 'Sangria' },
            description: { jp: '果実とワインのマリアージュ', en: 'Blend of fruit and wine' },
            price: 990
          }
        ]
    },
    computed: {
      filteredMenu() {
        return this.menu.filter(item => item.category === this.currentCategory);
      }
    },
    mounted() {
      ScrollReveal().reveal('.reveal', {
        distance: '50px',
        duration: 800,
        easing: 'ease-in-out',
        origin: 'bottom',
        interval: 200
      });
    }
  });
  