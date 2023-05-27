import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, Types } from 'mongoose';


@Schema()
export class Pareja extends Document {
    @Prop()
    nombre: string;

    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Participante' }] })
    participantes: mongoose.Types.ObjectId[];
}

export const ParejaSchema = SchemaFactory.createForClass(Pareja);