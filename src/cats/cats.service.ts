import { Injectable } from "@nestjs/common";
import { Cat } from "./interface/cat.interface";

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  create(cat: Cat) {
    console.log(cat);

    this.cats.push(cat);
  }

  findAll(): Cat[] {
    console.log(this.cats);
    return this.cats;
  }
}
