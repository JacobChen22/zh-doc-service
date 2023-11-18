import {Injectable, NestMiddleware} from "@nestjs/common";
import {NextFunction, Request, Response} from "express";

@Injectable()
export class AuthInterceptor implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        if (!req.headers.authorization) {
            res.status(401).json({message: 'Unauthorized'});
            return;
        }

        next();
    }
}