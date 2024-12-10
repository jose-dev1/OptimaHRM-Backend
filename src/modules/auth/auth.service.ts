import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { Usuario } from '../../modules/usuarios/user.entity';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(Usuario)
        private readonly usuarioRepository: Repository<Usuario>,
        private readonly jwtService: JwtService,
    ) { }

    async validateUser(correo: string, contraseña: string): Promise<Usuario> {
        const usuario = await this.usuarioRepository.findOne({ where: { correo } });

        if (usuario && (await bcrypt.compare(contraseña, usuario.contraseña))) {
            return usuario;
        }

        throw new UnauthorizedException('Credenciales inválidas');
    }

    async login(loginDto: LoginDto) {
        const usuario = await this.validateUser(loginDto.correo, loginDto.contraseña);
        const payload = { id: usuario.id_usuario, correo: usuario.correo, rol: usuario.rol };
        const token = this.jwtService.sign(payload);
        return {
            token,
            usuario,
        };
    }
}
