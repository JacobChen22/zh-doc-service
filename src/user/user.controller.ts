import {Body, Controller, Post} from "@nestjs/common";
import {UserService} from "./user.service";
import {SignUpDto} from "./dto/sign-up.dto";

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {
    }

    @Post()
    signUp(@Body() signupDto: SignUpDto) {
        return this.userService.signUp(signupDto);
    }


}