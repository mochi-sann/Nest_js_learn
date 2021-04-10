import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TasksModule } from "./tasks/tasks.module";
import { CatsController } from "./cats/cats.controller";
import { DocsController } from "./docs/docs.controller";
import { CatsService } from "./cats/cats.service";

@Module({
  imports: [TasksModule],
  controllers: [AppController, CatsController, DocsController],
  providers: [AppService, CatsService],
})
export class AppModule {}
