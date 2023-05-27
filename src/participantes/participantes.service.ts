import { Injectable } from '@nestjs/common';
import { Participante } from './interfaces/participante.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CrearParticipanteDTO } from './dto/participante.dto';

@Injectable()
export class ParticipantesService {

    constructor(
        @InjectModel('Participante') private readonly participanteModel: Model<Participante>
    ) { }

    //Agregar participante
    async guardar(nuevoParticipanteDTO: CrearParticipanteDTO): Promise<Participante> {
        const participante = new this.participanteModel(nuevoParticipanteDTO);
        return participante.save();
    }

    //Listado de participantes
    async listado(): Promise<Participante[]> {
        const participantes = await this.participanteModel.find();
        return participantes;
    }
}
