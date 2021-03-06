import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { ServeStaticModule } from "@nestjs/serve-static";
import { FileModule } from "./file/file.module";
import { TrackModule } from "./track/track.module";
import * as path from 'path'

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: path.resolve(__dirname, 'static'),
    }),
    TrackModule,
    MongooseModule.forRoot('mongodb+srv://admin:admin@cluster0.muyqh.mongodb.net/music-platform?retryWrites=true&w=majority'),
    FileModule,
  ]
})

export class AppModule{}