import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UsersOnTripsService } from './users-on-trips.service';
import { CreateUsersOnTripDto } from './dto/create-users-on-trip.dto';
import { UpdateUsersOnTripDto } from './dto/update-users-on-trip.dto';

@Controller('users-on-trips')
export class UsersOnTripsController {
  constructor(private readonly usersOnTripsService: UsersOnTripsService) {}

  @Post()
  create(@Body() createUsersOnTripDto: CreateUsersOnTripDto) {
    return this.usersOnTripsService.create(createUsersOnTripDto);
  }

  @Get()
  findAll() {
    return this.usersOnTripsService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.usersOnTripsService.findById(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateUsersOnTripDto: UpdateUsersOnTripDto,
  ) {
    return this.usersOnTripsService.update(id, updateUsersOnTripDto);
  }

  @Delete(':id')
  deleteById(@Param('id') id: string) {
    return this.usersOnTripsService.deleteById(id);
  }
}
