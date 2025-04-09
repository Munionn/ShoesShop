export class UserDto {
    id?: string;
    email?: string;
    password?: string;

    constructor(partial: Partial<UserDto>) {
        Object.assign(this, partial);
    }
}