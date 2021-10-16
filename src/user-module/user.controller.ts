import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { User } from './interface/user';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  //HTTP GET/users
  @Get()
  getUsers(): User[] {
    return this.userService.getUsers();
  }

  @Get('/:email')
  getUser(@Param('email') email: string):  User[] {
    //console.log("Email:", email);
    return this.userService.getUser(email);
  }

  //HTTP POST/users
  @Post()
  postUser(@Body() user:User): User {
    //console.log("User Body: ",user);
    return this.userService.addUser(user);
  }

  //HTTP DELETE/users
  @Delete('/:email')
  deleteUser(@Param('email') email:string): User[] {
    return this.userService.deleteUser(email);
  }
}
