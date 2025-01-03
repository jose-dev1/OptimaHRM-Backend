import { Injectable, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Empresa } from '../empresa/empresa.entity';
import { CrearEmpresaDto } from '../empresa/dto/empresa.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class EmpresaService {
    constructor(
        @InjectRepository(Empresa)
        private readonly empresaRepository: Repository<Empresa>,
    ) { }

    async create(createEmpresaDto: CrearEmpresaDto): Promise<Empresa> {
        try {
            const existingEmpresa = await this.empresaRepository.findOne({
                where: { id_empresa: createEmpresaDto.id_empresa },
            });

            if (existingEmpresa) {
                throw new ConflictException('La empresa ya se encuentra registrada');
            }

            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(createEmpresaDto.contraseña, salt);

            const empresa = this.empresaRepository.create({
                id_empresa: createEmpresaDto.nombre_empresa,
                ...createEmpresaDto,
                contraseña: hashedPassword,
            });

            return await this.empresaRepository.save(empresa);
        } catch (error) {
            console.error('Error al crear una empresa:', error);
            throw error;
        }
    }

    async findAll(): Promise<Empresa[]> {
        try {
            return await this.empresaRepository.find();
        } catch (error) {
            console.error('Error al listar empresas:', error);
            throw new Error('No se pudo listar las empresas');
        }
    }

}
