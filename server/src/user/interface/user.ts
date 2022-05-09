import { Hotel } from '../../hotel/interface/Hotel';
import { Flight } from '../../flight/interface/Flight';

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

export interface UsersOnTrips {
  id: number;
  userId: number;
  tripId: number;
  createdAt: Date;
}
