import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { databaseConfig } from './config/database.config';

@Module({
  imports: [
    SequelizeModule.forRoot(databaseConfig)
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
