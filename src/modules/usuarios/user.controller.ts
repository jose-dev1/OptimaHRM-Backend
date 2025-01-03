import { Controller, Get, Post, Put, Param, Body } from '@nestjs/common';
import { UsuariosService } from './user.service';
import { RegistrarUsuarioDto } from './dto/usuario.dto';
import { ActualizarUsuarioDto } from './dto/updateuser.dto';

@Controller('usuarios')
export class UsuariosController {
    constructor(private readonly usuariosService: UsuariosService) { }

    @Get()
    async listarUsuarios() {
        return await this.usuariosService.listarUsuarios();
    }

    @Post()
    async registrarUsuario(@Body() dto: RegistrarUsuarioDto) {
        return await this.usuariosService.registrarUsuario(dto);
    }

    @Put(':id')
    async actualizarUsuario(
        @Param('id') numero_doc: string,
        @Body() dto: ActualizarUsuarioDto,
    ) {
        return await this.usuariosService.actualizarUsuario(numero_doc, dto);
    }
}
