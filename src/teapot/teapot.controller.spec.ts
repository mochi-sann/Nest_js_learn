import {
  Test,
  TestingModule,
} from "@nestjs/testing";
import { TeapotController } from "./teapot.controller";

describe("TeapotController", () => {
  let controller: TeapotController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule(
      {
        controllers: [TeapotController],
      },
    ).compile();

    controller = module.get<TeapotController>(
      TeapotController,
    );
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
