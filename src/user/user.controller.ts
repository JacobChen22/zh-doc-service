import {Body, Controller, Get, Param, ParseIntPipe, Post} from "@nestjs/common";
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

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.userService.findOneById(id);
    }

}