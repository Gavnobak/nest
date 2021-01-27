import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { UsersModule } from './users/users.module';
import { GroupModule } from './group/group.module';
import { ProdgroupModule } from './prodgroup/prodgroup.module';
import {GraphQLModule} from "@nestjs/graphql";
import {APP_FILTER, APP_INTERCEPTOR} from "@nestjs/core";
import {HttpErrorFilter} from "./shared/http-error.filter";
import {LoggingInterceptor} from "./shared/logging.interceptor";

@Module({
  imports: [
      ProductsModule,
      MongooseModule.forRoot(`mongodb+srv://admin:admin@cluster0.ceza6.mongodb.net/<dbname>?retryWrites=true&w=majority`),
      TypeOrmModule.forRoot({
          type: 'postgres',
          host: 'ziggy.db.elephantsql.com',
          port: 5432,
          username: 'qfbtfdjr',
          password: '6UFjlKadBMN17ZXSmB5fwsFqa143prCk',
          database: 'qfbtfdjr',
          entities: ["dist/**/*.entity{.ts,.js}"],
          synchronize: true,
      }),
      UsersModule,
      GroupModule,
      ProdgroupModule,
      GraphQLModule.forRoot({
          autoSchemaFile:'schema.gql'
      }),
  ],
  controllers: [AppController],
  providers: [
      AppService,
      {
              provide:  APP_FILTER,
              useClass: HttpErrorFilter,
      },
      {
            provide:  APP_INTERCEPTOR,
            useClass: LoggingInterceptor,
      }
  ],
})
export class AppModule {}
