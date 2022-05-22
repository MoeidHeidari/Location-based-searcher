import { CacheModule, Module } from '@nestjs/common';
import { InvitationContoller } from '../../application/controllers';
import { CommonModule } from '../../infrastructure/modules/common/common.module';
import { InvitationRepository } from '../repository/invitation.repository';
import { InvitationService } from '../services/invitation.service';
/**
 * User module
 */
@Module({
  imports: [CommonModule,CacheModule.register(),],
  controllers: [InvitationContoller],
  providers: [InvitationService,InvitationRepository],
  exports: [InvitationService],
})
export class IntersectionModule {}
