import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';

@Schema()
export class Participante {
    @Prop()
    nombre: string;

    @Prop()
    barrio: string;

    @Prop()
    imagen: string;

}

export const ParticipanteSchema = SchemaFactory.createForClass(Participante);