import { Module } from '@nestjs/common';
import { ParticipantesService } from './participantes.service';
import { ParticipantesController } from './participantes.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ParticipanteSchema } from './schemas/participante.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Participante', schema: ParticipanteSchema }
    ])
  ],
  providers: [ParticipantesService],
  controllers: [ParticipantesController]
})
export class ParticipantesModule { }
