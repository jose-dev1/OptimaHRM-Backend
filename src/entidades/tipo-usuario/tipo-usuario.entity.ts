import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Empresa } from '../../modules/empresa/empresa.entity';

@Entity({ name: 'TiposUsuario' })
export class TipoUsuario {
    @PrimaryGeneratedColumn()
    id_tipo_usuario: number;

    @Column()
    nombre_tipo_usuario: string;

    @OneToMany(() => Empresa, (empresa) => empresa.id_tipo_usuario)
    empresas: Empresa[];
}
