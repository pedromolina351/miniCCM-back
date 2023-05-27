import { Module, OnModuleInit } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ParticipantesModule } from './participantes/participantes.module';
import { ParejasModule } from './parejas/parejas.module';
import { ConfigModule } from '@nestjs/config'
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot(
      {
        envFilePath: '.env',
        isGlobal: true
      }),
    MongooseModule.forRoot(process.env.DB_URI),
    ParticipantesModule,
    ParejasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements OnModuleInit {
  onModuleInit() {
    console.log('SE CONECTÓ A LA BASE DE DATOS')
  }
}
