import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto, UpdateUserDto } from './dtos/user';
import { User } from './interface/user';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<User[]> {
    try {
      const users = await this.prisma.user.findMany();
      // return 404 if no user was found
      if (!users) throw new NotFoundException();
      return users;
    } catch (error) {
      return error;
    }
  }

  async findById(id: string): Promise<User> {
    try {
      const user = await this.prisma.user.findUnique({
        where: {
          id: +id,
        },
      });
      // return 404 if no user was found
      if (!user) throw new NotFoundException();
      return user;
    } catch (error) {
      return error;
    }
  }

  async findByEmail(email: string): Promise<User> {
    try {
      const user = await this.prisma.user.findUnique({
        where: {
          email,
        },
      });
      // return 404 if no user was found
      if (!user) throw new NotFoundException();
      return user;
    } catch (error) {
      return error;
    }
  }

  async create(createUserDto: CreateUserDto): Promise<User> {
    try {
      const user = await this.prisma.user.create({
        data: {
          email: createUserDto.email,
          username: createUserDto.username,
          sub: createUserDto.sub,
          emailVerified: createUserDto.emailVerified,
          pictureUrl: createUserDto.pictureUrl,
          origin: createUserDto.origin,
        },
      });
      return user;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        // if user exists, error P2002
        if (error.code === 'P2002') {
          throw new ForbiddenException('Credentials taken');
        }
      }
    }
  }

  async deleteById(id: string): Promise<User> {
    try {
      const deleted = this.prisma.user.delete({
        where: {
          id: +id,
        },
      });
      return deleted;
    } catch (error) {
      return error;
    }
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    try {
      const updated = this.prisma.user.update({
        where: {
          id: +id,
        },
        data: {
          email: updateUserDto.email,
          username: updateUserDto.username,
          sub: updateUserDto.sub,
          emailVerified: updateUserDto.emailVerified,
          pictureUrl: updateUserDto.pictureUrl,
          origin: updateUserDto.origin,
        },
      });
      return updated;
    } catch (error) {}
  }
}
