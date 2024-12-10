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

        const usuario = await this.usuariosRepository.findOne({ where: { correo } });
        if (usuario) {
            const validPassword = await bcrypt.compare(contraseña, usuario.contraseña);
            if (validPassword) {
                const payload = {
                    id: usuario.id_usuario,
                    rol: usuario.rol,
                    tipo: 'usuario',
                };
                const token = this.jwtService.sign(payload);
                return { token, tipo: 'usuario', data: usuario };
            }
        }

        const empresa = await this.empresasRepository.findOne({ where: { correo } });
        if (empresa) {
            const validPassword = await bcrypt.compare(contraseña, empresa.contraseña);
            if (validPassword) {
                const payload = {
                    id: empresa.id_empresa,
                    rol: 'empresa',
                    tipo: 'empresa',
                };
                const token = this.jwtService.sign(payload);
                return { token, tipo: 'empresa', data: empresa };
            }
        }

        throw new UnauthorizedException('Credenciales incorrectas');
    }
}
