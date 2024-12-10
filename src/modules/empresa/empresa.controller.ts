import { Body, Controller, Get, Post } from '@nestjs/common';
import { EmpresaService } from './empresa.service';
import { CrearEmpresaDto } from '../empresa/dto/empresa.dto';
import { Empresa } from '../empresa/empresa.entity';


@Controller('empresa')
export class EmpresaController {
    constructor(private readonly empresaService: EmpresaService) { }

    @Get('listar')
    async listAll(): Promise<Empresa[]> {
        return await this.empresaService.findAll();
    }

    @Post('registro')
    async register(@Body() crearEmpresaDto: CrearEmpresaDto): Promise<Empresa> {
        return await this.empresaService.create(crearEmpresaDto);
    }
}
