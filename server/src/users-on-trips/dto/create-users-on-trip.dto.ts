import { IsNumber } from 'class-validator';

export class CreateUsersOnTripDto {
  @IsNumber()
  userId: number;
  @IsNumber()
  tripId: number;
}
