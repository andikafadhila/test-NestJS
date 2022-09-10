import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { AuthDto } from './dto/authentication.dto';

@Injectable()
export class AuthenticationService {
  user = [];

  signup(dto: AuthDto) {
    try {
      for (let i = 0; i < this.user.length; i++) {
        if (this.user[i].userId == dto.userId) {
          throw new ForbiddenException(`${dto.userId} already signUp!`);
        }
      }
      this.user.push(dto);

      return {
        data: dto.userId,
        message: 'Success SignUp!',
        dataUser: this.user,
      };
    } catch (error) {
      throw error;
    }
  }

  getUser(userId) {
    try {
      console.log(userId);

      for (let i = 0; i < this.user.length; i++) {
        if (this.user[i].userId == userId.userid) {
          return { data: this.user[i], message: 'Success!' };
        }
      }
      throw new NotFoundException(`${userId.userid} Not Found!`);
    } catch (error) {
      throw error;
    }
  }
}
