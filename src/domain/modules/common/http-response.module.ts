/**
 * Author Moeid Heidari
 * Date 22 May 2022
 */
import { Module } from '@nestjs/common';
import { HttpResponseService } from '../../services/common';

@Module({
  providers: [HttpResponseService],
  exports: [HttpResponseService],
})
export class HttpResponseModule {}
