import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { Usuario } from '../usuarios/user.entity';
import { Empresa } from '../empresa/empresa.entity';
import { LoginUsuarioDto } from './dto/login.dto';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(Usuario)
        private readonly usuariosRepository: Repository<Usuario>,

        @InjectRepository(Empresa)
        private readonly empresasRepository: Repository<Empresa>,

        private readonly jwtService: JwtService,
    ) { }

    async autenticar(loginDto: LoginUsuarioDto) {
        const { correo, contraseña } = loginDto;

        const usuario = await this.usuariosRepository.findOne({
            where: { correo },
            relations: ['tipo_usuario'],
        });

        if (usuario) {
            const validPassword = await bcrypt.compare(contraseña, usuario.contraseña);
            if (validPassword) {
                const payload = {
                    id: usuario.numero_doc,
                    rol: usuario.rol,
                    tipo_usuario: usuario.tipo_usuario.nombre_tipo_usuario,
                };
                const token = this.jwtService.sign(payload);
                return { token, tipo: 'usuario', data: usuario };
            }
        }

        const empresa = await this.empresasRepository.findOne({
            where: { correo },
            relations: ['tipoUsuario'],
        });

        if (empresa) {
            const validPassword = await bcrypt.compare(contraseña, empresa.contraseña);
            if (validPassword) {
                const payload = {
                    id: empresa.id_empresa,
                    tipo_usuario: empresa.tipoUsuario.nombre_tipo_usuario,
                };
                const token = this.jwtService.sign(payload);
                return { token, tipo: 'empresa', data: empresa };
            }
        }

        throw new UnauthorizedException('Credenciales incorrectas');
    }

}
