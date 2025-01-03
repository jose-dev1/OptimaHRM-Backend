import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { TipoDocumento } from '../../entidades/tipo-documento/tipo-documento.entity';
import { SectorTrabajo } from '../../entidades/sector/sector-trabajo.entity';
import { TipoUsuario } from '../../entidades/tipo-usuario/tipo-usuario.entity';
import { Usuario } from '../../modules/usuarios/user.entity';

@Entity('Empresas')
export class Empresa {
    @PrimaryColumn()
    id_empresa: string;

    @Column()
    nombre_empresa: string;

    @Column()
    nombre_representante: string;

    @Column()
    numdoc_representante: string;

    @Column()
    direccion: string;

    @Column({ unique: true })
    correo: string;

    @Column()
    contraseña: string;

    @Column()
    id_tipo_usuario: number;

    @Column()
    sector: number;

    @Column()
    id_tipo_documento: number;

    @ManyToOne(() => TipoDocumento)
    @JoinColumn({ name: 'id_tipo_documento' })
    tipoDocumento: TipoDocumento;

    @ManyToOne(() => SectorTrabajo)
    @JoinColumn({ name: 'sector' })
    sectorTrabajo: SectorTrabajo;

    @ManyToOne(() => TipoUsuario)
    @JoinColumn({ name: 'id_tipo_usuario' })
    tipoUsuario: TipoUsuario;

    @OneToMany(() => Usuario, usuario => usuario.empresa, { onDelete: 'CASCADE' })
    usuarios: Usuario[];
}
