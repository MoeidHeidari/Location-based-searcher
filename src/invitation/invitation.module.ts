import { CacheModule, Module } from '@nestjs/common';
import { CommonModule } from '../common';
import { InvitationContoller } from './controller';
import { InvitationRepository } from './repository';
import { InvitationService } from './service';
/**
 * User module
 */
@Module({
    imports: [CommonModule, CacheModule.register()],
    controllers: [InvitationContoller],
    providers: [InvitationService, InvitationRepository],
    exports: [InvitationService],
})
export class InvitationModule {}
