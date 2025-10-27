import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './users.model';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private usersRepository: typeof User) {}

  async getAllUsers() {
    const users = await this.usersRepository.findAll();
    return users;
  }

  async createUser(dto: CreateUserDto) {
    const user = await this.usersRepository.create(dto);

    return user;
  }
}
