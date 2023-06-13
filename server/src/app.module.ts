import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BoardsModule } from './boards/boards.module';
import { typeORMConfig } from './config/typeorm.config';
import { AuthModule } from './auth/auth.module';
import { CommentModule } from './comment/comment.module';
import { BoardImageModule } from './board-image/board-image.module';
import { HeartModule } from './heart/heart.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeORMConfig),
    BoardsModule,
    CommentModule,
    AuthModule,
    BoardImageModule,
    HeartModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
