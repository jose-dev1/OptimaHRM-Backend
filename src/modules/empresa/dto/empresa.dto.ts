import { IsNotEmpty, IsString, IsEmail, IsInt } from 'class-validator';

export class CrearEmpresaDto {
    @IsString()
    readonly id_empresa: string;

    @IsString()
    readonly nombre_empresa: string;

    @IsString()
    readonly nombre_representante: string;

    @IsString()
    readonly numdoc_representante: string;

    @IsString()
    readonly direccion: string;

    @IsEmail()
    readonly correo: string;

    @IsString()
    readonly contraseña: string;

    @IsInt()
    readonly id_tipo_documento: number;

    @IsInt()
    readonly id_tipo_usuario: number;

    @IsInt()
    readonly sector: number;
}
