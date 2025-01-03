import {
    Entity,
    Column,
    PrimaryColumn,
    ManyToOne,
    JoinColumn,
    CreateDateColumn,
} from 'typeorm';
import { Empresa } from '../empresa/empresa.entity';
import { TipoUsuario } from '../../entidades/tipo-usuario/tipo-usuario.entity';
import { TipoDocumento } from 'src/entidades/tipo-documento/tipo-documento.entity';
import { Rol } from '../../entidades/roles/rol.entity';

@Entity({ name: 'Usuarios' })
export class Usuario {
    @PrimaryColumn({ unique: true })
    numero_doc: string;

    @Column({ nullable: false })
    nombre: string;

    @Column({ nullable: false, unique: true })
    correo: string;

    @Column({ nullable: false })
    contraseña: string;

    @Column({ nullable: false })
    direccion: string;

    @Column()
    id_empresa: string;

    @ManyToOne(() => Empresa, (empresa) => empresa.usuarios, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'id_empresa' })
    empresa: Empresa;

    @Column()
    id_tipo_usuario: number;

    @ManyToOne(() => TipoUsuario, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'id_tipo_usuario' })
    tipo_usuario: TipoUsuario;

    @Column()
    id_tipo_documento: number;

    @ManyToOne(() => TipoDocumento, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'id_tipo_documento' })
    tipoDocumento: TipoDocumento;

    @Column()
    id_rol: number;

    @ManyToOne(() => Rol, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'id_rol' })
    rol: Rol;

    @Column({ default: 'activo' })
    estado: string;

    @CreateDateColumn({ type: 'timestamp' })
    fecha_registro: Date;
}
