import { IsEmail, IsOptional, IsString, IsNumber } from 'class-validator';

export class ActualizarUsuarioDto {
    @IsString()
    @IsOptional()
    readonly nombre?: string;

    @IsEmail()
    @IsOptional()
    readonly correo?: string;

    @IsString()
    @IsOptional()
    contraseña?: string;

    @IsString()
    @IsOptional()
    readonly direccion?: string;

    @IsString()
    @IsOptional()
    readonly id_empresa?: string;

    @IsNumber()
    @IsOptional()
    readonly id_rol?: number;

    @IsNumber()
    @IsOptional()
    readonly id_tipo_doc?: number;

    @IsNumber()
    @IsOptional()
    readonly id_tipo_usuario?: number;

    @IsString()
    @IsOptional()
    readonly estado?: string;
}
