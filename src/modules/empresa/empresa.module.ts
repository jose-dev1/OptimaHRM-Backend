import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Empresa } from './empresa.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Empresa])],
    exports: [TypeOrmModule],
})
export class EmpresasModule { }
