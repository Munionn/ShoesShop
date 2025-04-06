import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PrismaService} from "../prisma/prisma.service";
import { AuthService } from './auth.service';
import * as process from "node:process";

@Module({
    imports: [
        JwtModule.register({
            secret: process.env.JWT_SECRET,
            signOptions: {expiresIn: '1h'},
        }),
    ],
    providers: [AuthService, PrismaService],
    controllers: [AuthService],
})

export class AuthModule {}
