import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Pareja } from './interfaces/parejas.interface';
import { Model } from 'mongoose';
import { ParejaDTO } from './dto/parejas.dto';
import { Participante } from 'src/participantes/interfaces/participante.interface';

@Injectable()
export class ParejasService {

    constructor(
        @InjectModel('Pareja') private readonly parejaModel: Model<Pareja>
        //@InjectModel('Participante') private readonly participanteModel: Model<Participante>
    ) { }

    //Crear una pareja
    async crearPareja(CrearParejaDTO: ParejaDTO): Promise<Pareja> {
        const pareja = new this.parejaModel(CrearParejaDTO);
        return pareja.save();
    }

    //Ver todas las parejas
    async listadoParejas(): Promise<Pareja[]> {
        const parejas = await this.parejaModel.find();
        return parejas;
    }

    //Ver datos parejas
    async datosPareja(idPareja: string): Promise<string[][]> {
        const pareja = await this.parejaModel.findById(idPareja).populate('participantes');
        return pareja.participantes;
    }
}
