import { Participante } from "src/participantes/interfaces/participante.interface";
import { ArrayNotEmpty, ArrayUnique, IsArray, IsNotEmpty } from 'class-validator'

export class ParejaDTO {
    @IsNotEmpty()
    readonly nombre: string;

    @IsArray()
    @ArrayUnique()
    readonly participantes: string[];
}