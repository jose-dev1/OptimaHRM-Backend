import { IsEmail, IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class RegistrarUsuarioDto {
    @IsString()
    @IsNotEmpty()
    readonly numero_doc: string;

    @IsString()
    @IsNotEmpty()
    readonly nombre: string;

    @IsEmail()
    @IsNotEmpty()
    readonly correo: string;

    @IsString()
    @IsNotEmpty()
    readonly contraseña: string;

    @IsString()
    @IsNotEmpty()
    readonly direccion: string;

    @IsString()
    @IsNotEmpty()
    readonly id_empresa: string;

    @IsNumber()
    @IsNotEmpty()
    readonly id_rol: number;

    @IsNumber()
    @IsNotEmpty()
    readonly id_tipo_documento: number;

    @IsNumber()
    @IsNotEmpty()
    readonly id_tipo_usuario: number;
}
