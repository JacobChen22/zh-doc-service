import {SignUpDto} from "./dto/sign-up.dto";
import {PrismaService} from "../prisma/prisma.service";
import {Injectable} from "@nestjs/common";
import {encrypt} from "../utils";

@Injectable()
export class UserService {

    constructor(private prisma: PrismaService) {
    }

    signUp(signupDto: SignUpDto) {
        const {password, ...rest} = signupDto;
        const encPwd = encrypt(password);
        return this.prisma.user.create({
            data: {
                encPwd,
                ...rest
            }
        })
    }

    findOneByEmail(email: string) {
        return this.prisma.user.findUnique({
            where: {email: email}
        });
    }

    findOneById(id: number) {
        return this.prisma.user.findUnique({
            where: {id: id}
        });
    }

}