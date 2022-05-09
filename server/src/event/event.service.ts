import {
  ForbiddenException,
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { Event } from './interface/Event';

@Injectable()
export class EventService {
  constructor(private prisma: PrismaService) {}

  async create(createEventDto: CreateEventDto): Promise<Event> {
    try {
      const {
        title,
        start,
        end,
        allDay,
        description,
        location,
        coordinates,
        price,
        eventApiId,
        bookingLink,
        type,
        pictures,
        rating,
        tripId,
      } = createEventDto;
      const event = await this.prisma.event.create({
        data: {
          title,
          start,
          end,
          allDay,
          description,
          location,
          coordinates,
          price,
          eventApiId,
          bookingLink,
          type,
          pictures,
          rating,
          tripId,
        },
      });
      return event;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        // if event exists, error P2002
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

  async findAll(): Promise<Event[]> {
    try {
      const events = await this.prisma.event.findMany();
      // return 404 if no events were found
      if (!events) throw new NotFoundException();
      return events;
    } catch (error) {
      return error;
    }
  }

  async findById(id: string): Promise<Event> {
    try {
      const event = await this.prisma.event.findUnique({
        where: {
          id: +id,
        },
      });
      // return 404 if no event was found
      if (!event) throw new NotFoundException();
      return event;
    } catch (error) {
      return error;
    }
  }

  async update(id: string, updateEventDto: UpdateEventDto): Promise<Event> {
    const {
      title,
      start,
      end,
      allDay,
      description,
      location,
      coordinates,
      price,
      eventApiId,
      bookingLink,
      type,
      pictures,
      rating,
      tripId,
    } = updateEventDto;

    try {
      const updated = this.prisma.event.update({
        where: {
          id: +id,
        },
        data: {
          title,
          start,
          end,
          allDay,
          description,
          location,
          coordinates,
          price,
          eventApiId,
          bookingLink,
          type,
          pictures,
          rating,
          tripId,
        },
      });
      return updated;
    } catch (error) {
      return error;
    }
  }

  async deleteById(id: string): Promise<Event> {
    try {
      const deleted = this.prisma.event.delete({
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