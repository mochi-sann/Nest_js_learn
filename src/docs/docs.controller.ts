import { Controller, Get, HttpCode, Param } from "@nestjs/common";

const GuusuuKisuu = (number: number): string => {
  if (number % 2 === 0) {
    return "偶数";
  } else if (number % 2 === 1) {
    return "奇数";
  } else {
    return "偶数でも奇数でもありません";
  }
};

@Controller("docs")
export class DocsController {
  @Get()
  @HttpCode(404)
  findAll(): { body: string } {
    return { body: "none" };
  }
  @Get(":id")
  @HttpCode(200)
  findOne(@Param() params): string {
    console.log(params.id);
    return `これは${GuusuuKisuu(params.id)}です`;
  }
}
