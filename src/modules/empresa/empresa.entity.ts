import { Entity, Column, PrimaryColumn, OneToMany } from 'typeorm';
import { Usuario } from '../usuarios/user.entity';

@Entity({ name: 'Empresas' })
export class Empresa {
    @PrimaryColumn()
    id_empresa: string;

    @Column({ nullable: false })
    nombre: string;

    @Column({ nullable: false })
    direccion: string;

    @Column({ nullable: false })
    correo: string;

    @Column({ nullable: false })
    contraseña: string;

    @Column({ nullable: false })
    tipo_usuario: 'usuario' | 'empresa';

    @Column({ nullable: false })
    sector: 'tecnología' | 'salud' | 'educación' | 'otros';

    @Column({ type: 'enum', enum: ['activo', 'desactivado'], default: 'activo' })
    estado: string;

    @OneToMany(() => Usuario, (usuario) => usuario.empresa)
    usuarios: Usuario[];
}
