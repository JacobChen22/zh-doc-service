import {Module} from '@nestjs/common';
import {UserModule} from "../user/user.module";
import {LoginController} from "./login.controller";
import AuthService from "./auth.service";
import JwtAuthStrategy from "./jwt-auth-strategy.config";
import {PassportModule} from "@nestjs/passport";
import {JwtModule} from "@nestjs/jwt";
import * as process from "process";

@Module({
    imports: [
        UserModule,
        PassportModule,
        JwtModule.register({
            secret: process.env.AUTH_JWT_SECRET,
            signOptions: {expiresIn: '60s'}
        })
    ],
    controllers: [LoginController],
    providers: [AuthService, JwtAuthStrategy],
})
export class AuthModule {
}
