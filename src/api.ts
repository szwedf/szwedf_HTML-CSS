import type { AvailabilityParams, AvailabilityResponse, ReservationPayload, Room } from "./types";

/** 簡易モード切替：本番では .env で VITE_API_BASE を設定 */
const API_BASE = import.meta.env.VITE_API_BASE as string | undefined;
const USE_MOCK = !API_BASE;

const mockRooms: Room[] = [
  { id: 1, roomNo: "501", type: "single", capacity: 1, price: 9800, description: "静かなシングル" },
  { id: 2, roomNo: "502", type: "double", capacity: 2, price: 14800, description: "スタンダードダブル" },
  { id: 3, roomNo: "601", type: "twin", capacity: 3, price: 17800, description: "コーナーツイン" },
  { id: 4, roomNo: "701", type: "suite", capacity: 4, price: 39800, description: "スイート" },
];

export async function fetchAvailability(q: AvailabilityParams): Promise<AvailabilityResponse> {
  if (USE_MOCK) {
    // フィルタっぽいことだけ
    const byType = q.roomType && q.roomType !== "any"
      ? mockRooms.filter(r => r.type === q.roomType)
      : mockRooms;
    const byCap = byType.filter(r => r.capacity >= q.guests);
    await new Promise(r => setTimeout(r, 300));
    return { rooms: byCap };
  }
  const u = new URL(`${API_BASE}/availability.php`);
  u.searchParams.set("check_in", q.checkIn);
  u.searchParams.set("check_out", q.checkOut);
  u.searchParams.set("guests", String(q.guests));
  if (q.roomType && q.roomType !== "any") u.searchParams.set("type", q.roomType);
  const res = await fetch(u, { credentials: "include" });
  if (!res.ok) throw new Error("availability failed");
  return await res.json();
}

export async function createReservation(payload: ReservationPayload): Promise<{ id: number }> {
  if (USE_MOCK) {
    await new Promise(r => setTimeout(r, 500));
    return { id: Math.floor(Math.random() * 100000) };
  }
  const res = await fetch(`${API_BASE}/reservations_create.php`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error("reservation failed");
  return await res.json();
}
