import { Controller, Get, Post } from '@nestjs/common';


@Controller('user')
export class UserController {
  constructor() {}
//Hello HTTP GET
  @Get()
  getUser(): string {
    return 'hello'
  }

  @Post()
  postUser(): string {
    return "hello worid";
  }
}
