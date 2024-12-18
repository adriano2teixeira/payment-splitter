import {
  Inject,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './users.entity';
import { CreateUserDto } from './users.dto';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>,
  ) {}

  async createUser(createUserDto: CreateUserDto) {
    try {
      const usr = await this.userRepository.create({
        name: createUserDto.name,
        email: createUserDto.email,
      });
      return usr;
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  async deleteUser(userId: string) {
    const usr = await this.userRepository.exists({ where: { id: userId } });
    if (!usr) throw new NotFoundException('user not found');
    try {
      await this.userRepository.delete(userId);
      return { deleted: true };
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }
}
