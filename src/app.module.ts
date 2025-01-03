import { Module } from '@nestjs/common';
import { DatabaseModule } from './modules/database/database.module';
import { AuthModule } from './modules/auth/auth.module';
import { EmpresaModule } from './modules/empresa/empresa.module';
import { UserModule } from './modules/usuarios/user.module';


@Module({
    imports: [
        DatabaseModule,
        AuthModule,
        EmpresaModule,
        UserModule
    ],
    controllers: [],
    providers: [],
})

export class AppModule { }