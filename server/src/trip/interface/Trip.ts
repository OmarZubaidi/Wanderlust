import { Flight } from 'src/flight/interface/Flight';
import { Hotel } from 'src/hotel/interface/Hotel';
import { UsersOnTrips } from 'src/users-on-trips/interface/UsersOnTrips';

export interface Trip {
  id: number;
  start: Date;
  end: Date;
  destination: string;
  Hotels?: Hotel[];
  Flights?: Flight[];
  Events?: Event[];
  UsersOnTrips?: UsersOnTrips[];
  createdAt: Date;
}
