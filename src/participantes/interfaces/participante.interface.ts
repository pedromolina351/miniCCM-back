import { Document } from "mongoose";
export interface Participante extends Document {
    readonly nombre: string;
    readonly barrio: string;
    readonly imagen: string; //Ruta de la imagen
}