import { NestFactory } from "@nestjs/core";
import * as helmet from "helmet";
import { AppModule } from "./app.module";

// somewhere in your initialization file
const PORT = Number(process.env.PORT) || 3000;
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(helmet());
  await app.listen(PORT);

  console.log(
    "start on http://localhost:" + PORT,
  );

  console.log(
    `Application is running on: ${await app.getUrl()}`,
  );
}
bootstrap();
