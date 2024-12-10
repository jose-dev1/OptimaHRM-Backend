import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Usuario } from '../usuarios/user.entity';

@Entity({ name: 'Empresas' })
export class Empresa {
    @PrimaryGeneratedColumn()
    id_empresa: string;

    @Column({ nullable: false })
    nombre: string;

    @Column({ nullable: false })
    direccion: string;

    @Column({ nullable: false })
    telefono: string;

    @Column({ nullable: false })
    correo_contacto: string;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    fecha_registro: Date;

    @OneToMany(() => Usuario, (usuario) => usuario.empresa)
    usuarios: Usuario[];
}
