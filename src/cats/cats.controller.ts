import { Body, Controller, Get, Post } from "@nestjs/common";
import { CreateCatDto } from "src/cats/dto/create-cat.dto";
import { Cat } from "src/cats/interface/cat.interface";
import { CatsService } from "./cats.service";

@Controller("cats")
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  async create(@Body("createCatDto") createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }
}
