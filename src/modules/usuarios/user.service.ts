import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { Usuario } from './user.entity';
import { RegistrarUsuarioDto } from '../usuarios/dto/usuario.dto';
import { ActualizarUsuarioDto } from '../usuarios/dto/updateuser.dto';

@Injectable()
export class UsuariosService {
    constructor(
        @InjectRepository(Usuario)
        private readonly usuariosRepository: Repository<Usuario>,
    ) { }

    async listarUsuarios(): Promise<Usuario[]> {
        return await this.usuariosRepository.find({ relations: ['empresa'] });
    }

    async registrarUsuario(dto: RegistrarUsuarioDto): Promise<Usuario> {
        try {
            const { contraseña, ...resto } = dto;
            const hashedPassword = await bcrypt.hash(contraseña, 10);

            const usuario = this.usuariosRepository.create({
                ...resto,
                contraseña: hashedPassword,
            });

            return await this.usuariosRepository.save(usuario);
        } catch (error) {
            console.error('Error al registrar el usuario:', error);
            throw new Error('No se pudo registrar el usuario. Por favor, verifica los datos e inténtalo nuevamente.');
        }
    }



    async actualizarUsuario(numero_doc: string, dto: ActualizarUsuarioDto): Promise<Usuario> {
        const usuario = await this.usuariosRepository.findOne({ where: { numero_doc } });

        if (!usuario) {
            throw new NotFoundException('Usuario no encontrado');
        }

        if (dto.contraseña) {
            dto.contraseña = await bcrypt.hash(dto.contraseña, 10);
        }

        const usuarioActualizado = this.usuariosRepository.merge(usuario, dto);
        return await this.usuariosRepository.save(usuarioActualizado);
    }
}
