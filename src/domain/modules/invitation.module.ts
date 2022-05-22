import { CacheModule, Module } from '@nestjs/common';
import { InvitationContoller } from '../../application/controllers';
import { CommonModule } from '../../infrastructure/modules/common/common.module';
import { InvitationService } from '../services/invitation.service';
/**
 * User module
 */
@Module({
  imports: [CommonModule,CacheModule.register(),],
  controllers: [InvitationContoller],
  providers: [InvitationService],
  exports: [InvitationService],
})
export class IntersectionModule {}
