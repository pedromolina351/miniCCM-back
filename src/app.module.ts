import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ParticipantesModule } from './participantes/participantes.module';
import { ParejasModule } from './parejas/parejas.module';

@Module({
  imports: [ParticipantesModule, ParejasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
