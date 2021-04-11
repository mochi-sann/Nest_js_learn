import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  Post,
  Query,
  Redirect,
} from "@nestjs/common";

const GuusuuKisuu = (number: number): number => {
  return (
    ((number * number * number) / 13.427 + Math.random()) *
    (Math.random() * 600)
  );
};

@Controller("docs")
export class DocsController {
  // @Post()
  // create(@Body("name") createCatDto: any) {
  //   return "This action adds a new cat" + JSON.stringify(createCatDto);
  // }

  @Post() // HTTP メソッドの指定
  async create(@Body() createCatDto) {
    // リクエストの Body を取得
    // this.catsService.create(createCatDto); // 受け取った値を Service に渡す
    return GuusuuKisuu(createCatDto.date);
  }

  @Get()
  @HttpCode(404)
  findAll(): { body: string } {
    return { body: "none" };
  }

  @Get("docs")
  @Redirect("https://docs.nestjs.com", 302)
  getDocs(@Query("version") version) {
    console.log(version);

    if (version && version === "5") {
      return { url: "https://docs.nestjs.com/v5/" };
    }
  }

  @Get(":id")
  @HttpCode(200)
  findOne(@Param() params): string {
    console.log(params.id);
    return `これは${GuusuuKisuu(params.id)}です`;
  }
}
