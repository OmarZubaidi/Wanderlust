import { IsString, IsDate, IsNumber, IsBoolean } from 'class-validator';

export class CreateEventDto {
  @IsString()
  title: string;
  @IsDate()
  start: Date;
  @IsDate()
  end: Date;
  @IsBoolean()
  allDay: boolean;
  @IsString()
  description: string;
  @IsString()
  location: string;
  @IsString()
  coordinates: string;
  @IsString()
  price: string;
  @IsNumber()
  eventApiId: number;
  @IsString()
  bookingLink: string;
  @IsString()
  type: string;
  @IsString()
  pictures: string;
  @IsNumber()
  rating: number;
  @IsNumber()
  tripId: number;
}