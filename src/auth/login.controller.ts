import {Body, Controller, Post} from "@nestjs/common";
import AuthService from "./auth.service";
import {LoginDto} from "./dto/login.dto";

@Controller('login')
export class LoginController {

    constructor(private readonly authService: AuthService) {
    }

    @Post()
    login(@Body() body: LoginDto) {
        const {email, password} = body;
        return this.authService.signIn(email, password);
    }
}