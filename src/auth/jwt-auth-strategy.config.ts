import {PassportStrategy} from "@nestjs/passport";
import {ExtractJwt, Strategy} from "passport-jwt";
import * as process from "process";
import {Injectable} from "@nestjs/common";

@Injectable()
export default class JwtAuthStrategy extends PassportStrategy(Strategy, 'jwtAuthStrategy') {

    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: process.env.AUTH_JWT_SECRET
        });
    }

    async validate(payload: any) {
        return {id: payload.sub, email: payload.email};
    }
}