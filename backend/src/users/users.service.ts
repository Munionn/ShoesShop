import {forwardRef, Inject, Injectable} from '@nestjs/common';
import { PrismaService} from "../prisma/prisma.service";
import { UserDto} from "./user.dto";
import { CreateUserDto } from "./create-user.dto";
import { NotFoundException} from "@nestjs/common";
import {PasswordService} from "../auth/services/password.service";

@Injectable()
export class UsersService {
    constructor(
        private prisma: PrismaService,
        @Inject(forwardRef(() =>  PasswordService))
        private passwordService: PasswordService,
    ) {}

    async createUser(data: CreateUserDto) {

        const encryptedPassword = await this.passwordService.hashPassword(data.password);


        const {password, ...user} = await this.prisma.user.create({
            data:{
                ...data,
                password: encryptedPassword,
            }
        });
        return user;
    }

    async findUserByEmail(email: string){
        const user =  this.prisma.user.findUnique({where: {email}});

        if(!user){
            throw new NotFoundException("User not found");
        }
        return user;
    }

    async findUserById(id: string){
        const user = await this.prisma.user.findUnique({where: {id}});
        if(!user){
            throw new NotFoundException("User not found");
        }
        return user;
    }
    async findAll(): Promise<UserDto[]> {
        return this.prisma.user.findMany();
    }
}
