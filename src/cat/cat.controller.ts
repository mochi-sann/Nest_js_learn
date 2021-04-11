import {
  Controller,
  Get,
  Post,
  HttpCode,
} from "@nestjs/common";

@Controller("cat")
export class CatController {
  @Post()
  create(): string {
    return "This action adds a new cat";
  }
  @Get("ab*cd")
  @HttpCode(504)
  findOne() {
    return "This route uses a wildcard";
  }
  @Get()
  findAll(): string {
    return "This action returns all cats";
  }
}
