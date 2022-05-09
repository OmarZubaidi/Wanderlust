export interface User {
  id: number;
  email: string;
  username: string;
  sub: string;
  emailVerified: boolean;
  pictureUrl: string;
  origin?: string;
  createdAt: Date;
  Hotels?: Hotel[];
  Flights?: Flight[];
  UsersOnTrips?: UsersOnTrips[];
}

export interface Hotel {
  id: number;
  name: string;
  location: string;
  coordinates: string;
  arrival: Date;
  departure: Date;
  nights: number;
  priceTotal: string;
  hotelApiId: number;
  userId: number;
  tripId: number;
  createdAt: Date;
}

export interface Flight {
  id: number;
  departure: Date;
  arrival: Date;
  gate: string;
  depAirport: string;
  arrAirport: string;
  lengthOfFlight: string;
  price: string;
  flightApiId: number;
  userId: number;
  tripId: number;
  createdAt: Date;
}

export interface UsersOnTrips {
  id: number;
  userId: number;
  tripId: number;
  createdAt: Date;
}
