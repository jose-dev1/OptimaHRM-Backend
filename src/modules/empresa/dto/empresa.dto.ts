export class CrearEmpresaDto {
    readonly id_empresa: string;
    readonly nombre: string;
    readonly direccion: string;
    readonly correo: string;
    readonly contraseña: string;
    readonly sector: 'tecnología' | 'salud' | 'educación' | 'otros';
    readonly estado: 'activo' | 'desactivado';
}

export class LoginEmpresaDto {
    correo: string;
    contraseña: string;
}

