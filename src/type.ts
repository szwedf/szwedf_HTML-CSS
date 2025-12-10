export type RoomType = "single" | "double" | "twin" | "suite";

export interface Room {
  id: number;
  roomNo: string;
  type: RoomType;
  capacity: number;
  price: number; // 1泊料金
  description?: string;
}

export interface AvailabilityParams {
  checkIn: string;   // YYYY-MM-DD
  checkOut: string;  // YYYY-MM-DD
  guests: number;
  roomType?: RoomType | "any";
}

export interface AvailabilityResponse {
  rooms: Room[];
}

export interface ReservationPayload {
  roomId: number;
  checkIn: string;
  checkOut: string;
  guestName: string;
  guestEmail: string;
  guests: number;
  note?: string;
}
