import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import {PrismaService} from "../prisma/prisma.service";
import * as bcrypt from "bcrypt";

@Injectable()
export class AuthService {
    constructor(private jwtService: JwtService,
                private prisma: PrismaService
    ){}
    async validateUser(username: string, password: string): Promise<any>{
        // const user = await this.prisma.user.findUnique({where: {username}});
    }
}
