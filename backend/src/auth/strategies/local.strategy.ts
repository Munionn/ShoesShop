import { Injectable , UnauthorizedException} from '@nestjs/common';
import { AuthService} from "../services/auth.service";
import { Strategy} from "passport-local";
import { PassportStrategy } from '@nestjs/passport';
@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly authService: AuthService) {
        super({
            usernameField: "email",
        })
    }

    async validate(email: string, password: string){
        const user = this.authService.validateUser(email, password);
        if(!user){
            throw new UnauthorizedException();
        }
        return user;
    }
}