import { Controller, Get, Post, Request } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';
import { AuthService} from "./auth/services/auth.service";

@Controller()
export class AppController {
  constructor(private readonly authService: AuthService) {}

}
