import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import {DatabaseModule} from "./config/database/database.module";
import {DatabaseService} from "./config/database/database.service";
import {ConfigModule} from "@nestjs/config";
import {TypeOrmModule} from "@nestjs/typeorm";


@Module({
  imports: [
      ConfigModule.forRoot({isGlobal:true}),
      TypeOrmModule.forRootAsync({
        imports:[DatabaseModule],
        useClass: DatabaseService,
        inject: [DatabaseService]
      })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
