import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService} from "../../users/users.service";
import { PasswordService} from "./password.service";
import { IPayload} from "../types";

@Injectable()
export class AuthService {
    constructor(private jwtService: JwtService,
                private usersService: UsersService,
                private passwordService: PasswordService
    ){}
    async validateUser(email: string, password: string): Promise<any>{
        const user = await this.usersService.findUserByEmail(email);
        const comparePassword = await this.passwordService.comparePassword(user!.password, password);
        if(comparePassword && user){
            const {password, ...rest} = user;
            return rest;
        }

        return null;
    }

    async login(user){
        const payload: IPayload = {
            sub: user.id,
            email: user.email,
        }
        return {
            accessToken: this.jwtService.sign(payload),
        }


    }
}
