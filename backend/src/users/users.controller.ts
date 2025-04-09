import {Body, Controller, Post, Get} from '@nestjs/common';
import { PrismaService} from "../prisma/prisma.service";
import {UsersService} from "./users.service";
import {CreateUserDto} from "./create-user.dto";
import { UserDto} from "./user.dto";

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {
    }

    @Post()
    create(@Body() createUserDto: CreateUserDto) {
        return this.usersService.createUser(createUserDto);
    }

    @Get()
    findAll(): Promise<UserDto[]> {
        return this.usersService.findAll();
    }
}
