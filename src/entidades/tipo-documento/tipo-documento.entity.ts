import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Empresa } from '../../modules/empresa/empresa.entity';

@Entity({ name: 'Tipo_Documento' })
export class TipoDocumento {
    @PrimaryGeneratedColumn()
    id_tipo_documento: number;

    @Column({ nullable: false, unique: true })
    nombre: string;

    @OneToMany(() => Empresa, (empresa) => empresa.id_tipo_documento)
    empresas: Empresa[];
}
