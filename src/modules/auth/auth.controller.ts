import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginUsuarioDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Post('login')
    async login(@Body() loginDto: LoginUsuarioDto) {
        try {
            return await this.authService.autenticar(loginDto);
        } catch (error) {
            return { mensaje: error.message };
        }
    }
}
