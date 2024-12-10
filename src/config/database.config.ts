import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as dontenv from 'dotenv';

dontenv.config();

export const databaseConfig: TypeOrmModuleOptions = {
    type: 'mysql',
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT || '3306'),
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    entities: [__dirname + '/../modules/**/*.entity.ts'],
    synchronize: true,
    extra: {
        authPlugins: {
            defaultAuth: 'mysql_native_password',
        },
    },
};