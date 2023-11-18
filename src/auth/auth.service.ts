import {Injectable} from "@nestjs/common";
import {UserService} from "../user/user.service";
import {compareEncryptPwd} from "../utils";

@Injectable()
export default class AuthService {

    constructor(private readonly userService: UserService) {
    }

    async signIn(email: string, password: string) {
        const user = await this.userService.findOne(email)
        const isIdentical = compareEncryptPwd(password, user.encPwd);
        return isIdentical;
    }
}