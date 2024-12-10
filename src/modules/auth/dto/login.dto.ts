import { IsNotEmpty, IsString, IsEmail } from 'class-validator';

export class LoginUsuarioDto {
    @IsNotEmpty()
    @IsEmail()
    correo: string;

    @IsNotEmpty()
    @IsString()
    contraseña: string;
}
