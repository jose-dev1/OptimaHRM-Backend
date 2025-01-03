import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Empresa } from '../modules/empresa/empresa.entity';
import { Usuario } from '../modules/usuarios/user.entity';
import { Rol } from '../entidades/roles/rol.entity';
import { TipoUsuario } from '../entidades/tipo-usuario/tipo-usuario.entity';
import { SectorTrabajo } from '../entidades/sector/sector-trabajo.entity';
import { TipoDocumento } from '../entidades/tipo-documento/tipo-documento.entity';
import * as dotenv from 'dotenv';

dotenv.config();

export const databaseConfig: TypeOrmModuleOptions = {
    type: 'mysql',
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT || '3306'),
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    entities: [Usuario, Empresa, Rol, TipoUsuario, SectorTrabajo, TipoDocumento],
    synchronize: false,
    extra: {
        authPlugins: {
            defaultAuth: 'mysql_native_password',
        },
    },
};
