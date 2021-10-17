import { Body, Controller, Delete, Get, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { UserDto, UserParamsDto } from './dto/user.dto';
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
  @UsePipes(new ValidationPipe)
  getUser(@Param() params: UserParamsDto):  User[] {
    //console.log("Email:", email);
    return this.userService.getUser(params.email);
  }

  //HTTP POST/users
  @Post()
  @UsePipes(new ValidationPipe)
  postUser(@Body() user:UserDto): User {
    //console.log("User Body: ",user);
    return this.userService.addUser(user);
  }

  //HTTP DELETE/users
  @Delete('/:email')
  @UsePipes(new ValidationPipe)
  deleteUser(@Param() params:UserParamsDto): User[] {
    return this.userService.deleteUser(params.email);
  }
}
