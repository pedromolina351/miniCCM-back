import { Body, Controller, Get, Post } from '@nestjs/common';
import { ParticipantesService } from './participantes.service';
import { CrearParticipanteDTO } from './dto/participante.dto';

@Controller('participantes')
export class ParticipantesController {

    constructor(private readonly participanteService: ParticipantesService) { }

    //Crear un nuevo participante
    @Post()
    async crearParticipante(@Body() CrearParticipanteDTO: CrearParticipanteDTO) {
        const participante = await this.participanteService.guardar(CrearParticipanteDTO);
        return participante;
    }

    //Obtener el listado de todos los participantes
    @Get()
    async obtenerParticipantes() {
        const participantes = await this.participanteService.listado();
        return participantes;
    }


}
