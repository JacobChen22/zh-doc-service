import {Module} from '@nestjs/common';
import {UserModule} from "../user/user.module";
import {LoginController} from "./login.controller";
import AuthService from "./auth.service";

@Module({
    controllers: [LoginController],
    providers: [AuthService],
    imports: [UserModule]
})
export class AuthModule {
}
