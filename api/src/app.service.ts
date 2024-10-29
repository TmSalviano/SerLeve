import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'I came to Rome as a city of bricks, left it a city of marble';
  }
}
