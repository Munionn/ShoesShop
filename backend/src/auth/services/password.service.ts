import {Injectable} from "@nestjs/common";
import * as bcrypt from "bcrypt";

export class PasswordService {
    async hashPassword(password: string): Promise<string> {
        const hashPassword = await bcrypt.hash(password, 10);
        return hashPassword;
    }
    async comparePassword(password: string, hashPassword: string): Promise<boolean> {
        return bcrypt.compare(password, hashPassword);
    }
}