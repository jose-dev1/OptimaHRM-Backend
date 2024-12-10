import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Empresa } from '../empresa/empresa.entity';
import { EmpresaService } from './empresa.service';
import { EmpresaController } from './empresa.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Empresa])],
    controllers: [EmpresaController],
    providers: [EmpresaService],
})
export class EmpresaModule { }
