import {Injectable, NotFoundException, UnauthorizedException} from "@nestjs/common";
import {UserService} from "../user/user.service";
import {compareEncryptPwd} from "../utils";
import {JwtService} from "@nestjs/jwt";
import {LoginDto} from "./dto/login.dto";

@Injectable()
export default class AuthService {

    constructor(private readonly userService: UserService,
                private readonly jwtService: JwtService) {
    }

    async validateUser(email: string, password: string) {
        const user = await this.userService.findOne(email)
        if (!user) {
            throw new NotFoundException('User email not found');
        }
        const isIdentical = compareEncryptPwd(password, user.encPwd);
        if (isIdentical) {
            return user;
        } else {
            throw new UnauthorizedException('User email or password incorrect');
        }
    }

    async login(input: LoginDto) {
        const user = await this.validateUser(input.email, input.password);
        const payload = {sub: user.id, email: user.email};
        return {
            access_token: this.jwtService.sign(payload)
        }
    }
}