import { Injectable } from '@nestjs/common';
import { User } from './interface/user';

@Injectable()
export class UserService {
  public users: User[];

  getUser(email: string): User {
    return this.users.filter((user) => user.email === email)[0];
  }

  addUser(user: User): User {
    this.users.push(user);
    return user;
  }

  deleteUser(email: string): User[] {
    const remainingUsers = this.users.filter((user) => user.email !== email);
    this.users = remainingUsers;
    return remainingUsers;
  }
}
