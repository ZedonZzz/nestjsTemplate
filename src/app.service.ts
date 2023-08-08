import { Injectable } from '@nestjs/common';
import { BusinessException } from './common/exceptions/business.exception';
@Injectable()
export class AppService {
  getHello(): string {
    throw new BusinessException('err');
  }
}
