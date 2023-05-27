import { Document } from "mongoose";
import { Participante } from "src/participantes/interfaces/participante.interface";

export interface Pareja extends Document {
    nombre: string;
    participantes: Participante['_id'][];
}