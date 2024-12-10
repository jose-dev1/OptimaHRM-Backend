import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Empresa } from '../empresa/empresa.entity';

@Entity({ name: 'Usuarios' })
export class Usuario {
    @PrimaryGeneratedColumn()
    id_usuario: number;

    @Column({ nullable: false })
    nombre: string;

    @Column({ nullable: false, unique: true })
    correo: string;

    @Column({ nullable: false })
    contraseña: string;

    @Column({ nullable: false })
    id_empresa: string;

    @Column({ type: 'enum', enum: ['dueño', 'recursos_humanos', 'operaciones', 'contabilidad', 'empleado'], nullable: false })
    rol: string;

    @Column({ type: 'enum', enum: ['activo', 'vacaciones', 'permiso', 'inactivo'], default: 'activo' })
    estado: string;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    fecha_registro: Date;

    @ManyToOne(() => Empresa, (empresa) => empresa.usuarios, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'id_empresa' })
    empresa: Empresa;
}
