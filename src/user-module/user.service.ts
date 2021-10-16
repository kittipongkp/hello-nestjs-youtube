import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './interface/user';

@Injectable()
export class UserService {
  public users: User[] = [];

  getUsers(): User[] {
    return this.users
  }

  getUser(email: string): User[]{
    const userData = this.users.filter(user => user.email === email)
    if(userData && Array.isArray(userData) && userData.length > 0){
      return userData
    }
    throw new NotFoundException('Not found user')
  }

  addUser(user: User): User {
   // console.log(user);
    this.users.push(user);
    return user;
  }

  deleteUser(email: string): User[] {
    const remainingUsers = this.users.filter((user) => user.email !== email);
    this.users = remainingUsers;
    return remainingUsers;
  }
}
