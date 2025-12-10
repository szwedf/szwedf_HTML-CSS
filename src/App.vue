<script setup lang="ts">
  import { reactive, computed, ref } from "vue";
  import { fetchAvailability, createReservation } from "./api";
  import type { Room, RoomType } from "./types";
  
  const form = reactive({
    checkIn: "",
    checkOut: "",
    guests: 1,
    roomType: "any" as RoomType | "any",
  });
  
  const rooms = ref<Room[]>([]);
  const selectedRoom = ref<Room | null>(null);
  const loading = ref(false);
  const err = ref<string>("");
  
  const nights = computed(() => {
    if (!form.checkIn || !form.checkOut) return 0;
    const d1 = new Date(form.checkIn);
    const d2 = new Date(form.checkOut);
    const diff = (d2.getTime() - d1.getTime()) / (1000 * 60 * 60 * 24);
    return Math.max(0, Math.floor(diff));
  });
  const canSearch = computed(() =>
    !!form.checkIn && !!form.checkOut && nights.value > 0 && form.guests > 0
  );
  
  async function search() {
    err.value = "";
    selectedRoom.value = null;
    if (!canSearch.value) {
      err.value = "チェックイン/アウトと宿泊数を確認してください。";
      return;
    }
    loading.value = true;
    try {
      const res = await fetchAvailability({
        checkIn: form.checkIn,
        checkOut: form.checkOut,
        guests: form.guests,
        roomType: form.roomType,
      });
      rooms.value = res.rooms;
      if (rooms.value.length === 0) err.value = "条件に合う空室がありません。";
    } catch (e) {
      err.value = "空室検索に失敗しました。";
    } finally {
      loading.value = false;
    }
  }
  
  // 予約作成
  const guest = reactive({ name: "", email: "", note: "" });
  const reserveLoading = ref(false);
  const reserveMsg = ref("");
  
  const totalPrice = computed(() =>
    selectedRoom.value ? selectedRoom.value.price * Math.max(1, nights.value) : 0
  );
  
  async function reserve() {
    reserveMsg.value = "";
    if (!selectedRoom.value) { reserveMsg.value = "部屋を選択してください。"; return; }
    if (!guest.name || !guest.email) { reserveMsg.value = "氏名とメールを入力してください。"; return; }
    reserveLoading.value = true;
    try {
      const res = await createReservation({
        roomId: selectedRoom.value.id,
        checkIn: form.checkIn,
        checkOut: form.checkOut,
        guests: form.guests,
        guestName: guest.name,
        guestEmail: guest.email,
        note: guest.note || "",
      });
      reserveMsg.value = `予約を受け付けました（予約番号: ${res.id}）。確認メールを送信します。`;
    } catch {
      reserveMsg.value = "予約に失敗しました。時間をおいて再度お試しください。";
    } finally {
      reserveLoading.value = false;
    }
  }
  </script>
  
  <template>
    <div class="container grid" style="gap: 24px">
      <header class="row">
        <h1 style="margin:0">AURELIA HOTEL – 公式予約</h1>
        <span class="badge">HTML / CSS / TypeScript / Vue</span>
      </header>
  
      <!-- 検索 -->
      <section class="card grid grid-2" aria-labelledby="search_title">
        <h2 id="search_title" style="margin:0 0 12px 0">宿泊条件</h2>
        <div class="grid">
          <label>チェックイン
            <input type="date" v-model="form.checkIn" />
          </label>
          <label>チェックアウト
            <input type="date" v-model="form.checkOut" />
          </label>
        </div>
        <div class="grid">
          <label>人数
            <input type="number" min="1" max="6" v-model.number="form.guests" />
          </label>
          <label>部屋タイプ
            <select v-model="form.roomType">
              <option value="any">指定なし</option>
              <option value="single">シングル</option>
              <option value="double">ダブル</option>
              <option value="twin">ツイン</option>
              <option value="suite">スイート</option>
            </select>
          </label>
        </div>
        <div class="row">
          <p class="help">宿泊数：<strong>{{ nights }}</strong> 泊</p>
          <button class="primary" :disabled="!canSearch || loading" @click="search">
            {{ loading ? "検索中..." : "空室検索" }}
          </button>
        </div>
        <p v-if="err" class="error" role="alert">{{ err }}</p>
      </section>
  
      <!-- 空室結果 -->
      <section v-if="rooms.length" class="card grid" aria-labelledby="result_title">
        <h2 id="result_title" style="margin:0">空室</h2>
        <div class="grid" style="grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px;">
          <article v-for="r in rooms" :key="r.id" class="card" style="padding:16px">
            <header class="row">
              <strong>#{{ r.roomNo }}・{{ r.type.toUpperCase() }}</strong>
              <span class="price">¥{{ (r.price).toLocaleString() }}/泊</span>
            </header>
            <p class="help">定員: {{ r.capacity }}名</p>
            <p>{{ r.description }}</p>
            <hr class="sep" />
            <div class="row">
              <span class="help">合計（{{ nights }}泊）</span>
              <strong class="price">¥{{ (r.price * Math.max(1, nights)).toLocaleString() }}</strong>
            </div>
            <div style="margin-top:10px; text-align:right">
              <button :aria-pressed="selectedRoom?.id === r.id" @click="selectedRoom = r">
                {{ selectedRoom?.id === r.id ? "選択中" : "この部屋を選ぶ" }}
              </button>
            </div>
          </article>
        </div>
      </section>
  
      <!-- 申込フォーム -->
      <section v-if="selectedRoom" class="card grid" aria-labelledby="reserve_title">
        <h2 id="reserve_title" style="margin:0">お客様情報</h2>
        <div class="grid grid-2">
          <label>氏名
            <input placeholder="山田 太郎" v-model.trim="guest.name" />
          </label>
          <label>メール
            <input type="email" placeholder="taro@example.com" v-model.trim="guest.email" />
          </label>
        </div>
        <label>ご要望（任意）
          <input placeholder="高層階希望 など" v-model.trim="guest.note" />
        </label>
  
        <div class="card" style="background:#0d121b">
          <div class="row">
            <div>
              <div class="help">選択部屋</div>
              <div>#{{ selectedRoom.roomNo }}・{{ selectedRoom.type.toUpperCase() }}</div>
            </div>
            <div>
              <div class="help">合計</div>
              <div class="price">¥{{ totalPrice.toLocaleString() }}</div>
            </div>
          </div>
        </div>
  
        <div class="row">
          <span class="help">「予約する」を押すと予約内容が送信されます。</span>
          <button class="primary" :disabled="reserveLoading" @click="reserve">
            {{ reserveLoading ? "送信中..." : "予約する" }}
          </button>
        </div>
        <p v-if="reserveMsg" :class="reserveMsg.includes('失敗') ? 'error' : 'help'">{{ reserveMsg }}</p>
      </section>
    </div>
  </template>
  
  <style scoped>
  h1, h2 { letter-spacing: .02em }
  </style>
  