import { IsNotEmpty } from 'class-validator'

export class CrearParticipanteDTO {
    @IsNotEmpty()
    readonly nombre: string;

    @IsNotEmpty()
    readonly barrio: string;

    @IsNotEmpty()
    readonly imagen: string;

}