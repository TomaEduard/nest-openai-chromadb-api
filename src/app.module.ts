import { Module } from "@nestjs/common";
import { TodoModule } from "./todo/todo.module";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserModule } from './user/user.module';
import { ChatCompletionApiModule } from './chat-completion-api/chat-completion-api.module';
import { ImageApiController } from './image-api/image-api.controller';
import { ImageApiModule } from './image-api/image-api.module';

@Module(
{
  imports: [
    ConfigModule.forRoot(
      { isGlobal: true, envFilePath: ".env" }
    ),
    TypeOrmModule.forRoot({
      type: "postgres",
      // host: process.env.DB_HOST,
      // port: parseInt(process.env.DB_PORT),
      // username: process.env.DB_USERNAME,
      // password: process.env.DB_PASSWORD,
      // database: process.env.DB_NAME,
      port: 5432,
      username: 'postgres',
      password: 'password',
      database: 'postgres',
      autoLoadEntities: true,
      synchronize: true
    }),
    TodoModule,
    UserModule,
    ChatCompletionApiModule,
    ImageApiModule],
  providers: []
})
export class AppModule {
}
