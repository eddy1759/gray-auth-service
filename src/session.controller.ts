import { GetUser } from './get-user.decorator';

@Controller('session')
export class SessionController {
  @Get('profile')
  getProfile(@GetUser() user: User) {
    const permissions = user.profile.permissions; 

    return { 
      name: user.profile.name, 
      permissions: permissions 
    };
  }
}