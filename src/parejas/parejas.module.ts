import { Module } from '@nestjs/common';
import { ParejasService } from './parejas.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ParejaSchema } from './schemas/parejas.schema';
import { ParejasController } from './parejas.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Pareja', schema: ParejaSchema }
    ])
  ],
  providers: [ParejasService],
  controllers: [ParejasController]
})
export class ParejasModule { }
