import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Empresa } from '../modules/empresa/empresa.entity';
import { Usuario } from '../modules/usuarios/user.entity';
import * as dotenv from 'dotenv';

dotenv.config();

export const databaseConfig: TypeOrmModuleOptions = {
    type: 'mysql',
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT || '3306'),
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    entities: [Usuario, Empresa],
    synchronize: false,
    extra: {
        authPlugins: {
            defaultAuth: 'mysql_native_password',
        },
    },
};
