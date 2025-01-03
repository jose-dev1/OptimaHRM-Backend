import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Empresa } from '../../modules/empresa/empresa.entity';

@Entity({ name: 'SectoresTrabajo' })
export class SectorTrabajo {
    @PrimaryGeneratedColumn()
    id_sector: number;

    @Column({ nullable: false, unique: true })
    nombre_sector: string;

    @OneToMany(() => Empresa, (empresa) => empresa.sector)
    empresas: Empresa[];
}
