const { createApp } = Vue;

createApp({
  data() {
    return {
      showScrollTop: false, // ← 追加
      posts: [
        {
          title: 'Vue × フリップカード！',
          image: 'https://source.unsplash.com/random/400x300?vue',
          summary: 'マウスオーバーで裏面に詳細を表示するカードUIをVueで。',
          details: 'Vue.jsのリアクティブなデータバインディングとCSSの3Dアニメーションを組み合わせると、柔軟で美しいUIが実現できます。'
        },
        {
          title: 'CSSだけで3Dアニメーション',
          image: 'https://source.unsplash.com/random/400x300?css',
          summary: 'CSS3のtransformを活用したカード回転。',
          details: 'backface-visibilityやtransform-style: preserve-3dなどのプロパティを理解すれば、JavaScriptなしでもインタラクティブな動きを実装可能です。'
        },
        {
          title: 'UX強化の極意',
          image: 'https://source.unsplash.com/random/400x300?ux',
          summary: '情報を階層的に見せるテクニック。',
          details: 'ユーザーの注目度に応じて詳細表示を裏面に置くことで、第一印象と情報量のバランスを両立します。'
        }
      ]
    };
  },
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    onScroll() {
      this.showScrollTop = window.scrollY > 200;
    }
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll);
  },
  template: `
    <div>
      <header>
        <h1>フリップカードブログ</h1>
        <p>マウスオーバーで魅せる、美しいブログUI</p>
      </header>

      <button v-show="showScrollTop" class="scroll-top" @click="scrollToTop">⬆</button>

      <section class="card-grid">
        <div v-for="post in posts" class="card">
          <div class="card-inner">
            <div class="card-front">
              <img :src="post.image" :alt="post.title" />
              <div class="card-content">
                <h2>{{ post.title }}</h2>
                <p>{{ post.summary }}</p>
              </div>
            </div>
            <div class="card-back">
              <div class="card-content">
                <h2>{{ post.title }}</h2>
                <p>{{ post.details }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  `
}).mount('#app');





