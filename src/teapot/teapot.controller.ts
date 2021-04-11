import {
  Controller,
  Get,
  HttpCode,
} from "@nestjs/common";

@Controller("teapot")
export class TeapotController {
  @Get()
  @HttpCode(418)
  findAll(): any {
    return [" I'm a teapot"];
  }
}
