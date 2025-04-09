import { Module, forwardRef } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PrismaService} from "../prisma/prisma.service";
import { AuthService } from './services/auth.service';
import * as process from "node:process";
import {UsersModule} from "../users/users.module";
import { PassportModule } from '@nestjs/passport';

@Module({
    imports: [
        forwardRef(() => UsersModule),
        JwtModule.register({
            secret: process.env.JWT_SECRET,
            signOptions: {expiresIn: '1h'},
        }),
        PassportModule
    ],
    providers: [AuthService, PrismaService, ],
    controllers: [AuthService],
})

export class AuthModule {}
