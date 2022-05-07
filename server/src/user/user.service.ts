import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from './interface/user';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<User[]> {
    try {
      const users = await this.prisma.user.findMany();
      return users;
    } catch (error) {
      // Todo: move this to creation
      if (error instanceof PrismaClientKnownRequestError) {
        // if user exists, error P2002
        if (error.code === 'P2002') {
          throw new ForbiddenException('Credentials taken');
        }
      }
      return error;
    }
  }
}
