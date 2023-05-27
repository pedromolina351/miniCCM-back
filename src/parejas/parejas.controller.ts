import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ParejaDTO } from './dto/parejas.dto';
import { ParejasService } from './parejas.service';

@Controller('parejas')
export class ParejasController {

    constructor(private readonly parejasService: ParejasService) { }

    @Post()
    async crearPareja(@Body() crearParejaDTO: ParejaDTO) {
        const pareja = await this.parejasService.crearPareja(crearParejaDTO);
        return pareja;
    }

    @Get('/:idPareja')
    async listadoParejas(@Param('idPareja') id: string) {
        const parejas = await this.parejasService.datosPareja(id);
        return parejas;
    }



}
