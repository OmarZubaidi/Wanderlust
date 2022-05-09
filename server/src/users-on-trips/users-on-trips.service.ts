import {
  ForbiddenException,
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUsersOnTripDto } from './dto/create-users-on-trip.dto';
import { UpdateUsersOnTripDto } from './dto/update-users-on-trip.dto';
import { UsersOnTrips } from './interface/UsersOnTrips';

@Injectable()
export class UsersOnTripsService {
  constructor(private prisma: PrismaService) {}

  async create(
    createUsersOnTripDto: CreateUsersOnTripDto,
  ): Promise<UsersOnTrips> {
    const { userId, tripId } = createUsersOnTripDto;

    try {
      const created = await this.prisma.usersOnTrips.create({
        data: {
          userId,
          tripId,
        },
      });
      return created;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        // if hotel exists, error P2002
        if (error.code === 'P2002') {
          throw new ForbiddenException('Credentials taken');
        }
      } else {
        throw new HttpException(
          {
            status: HttpStatus.NOT_ACCEPTABLE,
            error: 'Missing properties + ' + error,
          },
          HttpStatus.NOT_ACCEPTABLE,
        );
      }
    }
  }

  async findAll(): Promise<UsersOnTrips[]> {
    try {
      const usersOnTrips = await this.prisma.usersOnTrips.findMany();
      // return 404 if no usersOnTrips were found
      if (!usersOnTrips) throw new NotFoundException();
      return usersOnTrips;
    } catch (error) {
      return error;
    }
  }

  async findById(id: string): Promise<UsersOnTrips> {
    try {
      const usersOnTrips = await this.prisma.usersOnTrips.findUnique({
        where: {
          id: +id,
        },
      });
      // return 404 if no usersOnTrips was found
      if (!usersOnTrips) throw new NotFoundException();
      return usersOnTrips;
    } catch (error) {
      return error;
    }
  }

  async update(id: string, updateUsersOnTripDto: UpdateUsersOnTripDto) {
    const { userId, tripId } = updateUsersOnTripDto;

    try {
      const updated = this.prisma.usersOnTrips.update({
        where: {
          id: +id,
        },
        data: {
          userId,
          tripId,
        },
      });
      return updated;
    } catch (error) {
      return error;
    }
  }

  async deleteById(id: string): Promise<UsersOnTrips> {
    try {
      const deleted = this.prisma.usersOnTrips.delete({
        where: {
          id: +id,
        },
      });
      return deleted;
    } catch (error) {
      return error;
    }
  }
}
