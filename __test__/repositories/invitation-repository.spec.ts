import { InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { throwError } from 'rxjs';
import { Location } from '../../src/domain/entities';
import { InvitationRepository } from '../../src/domain/repository/invitation.repository';
import { Customers } from '../../src/domain/seeder';
import { HttpResponseService, LoggerService } from '../../src/domain/services/common';
import { InvitationService } from '../../src/domain/services/invitation.service';
import { EnvObjects, ParloaOptions, validate } from '../../src/infrastructure/config';
import { CommonModule } from '../../src/infrastructure/modules/common/common.module';
import {
  GET_SINGLE_CUSTOMER_BY_ID_1,
  GET_SINGLE_CUSTOMER_BY_ID_2,
  GET_SINGLE_CUSTOMER_BY_ID_3,
  GET_USERS_WITHIN_0_KM,
  GET_USERS_WITHIN_100_KM,
  GET_USERS_WITHIN_500_KM,
  GET_USERS_WITHIN_50_KM,
  GET_USERS_WITH_RANDOM_DATA,
  GET_USERS_WITH_WRONG_DATA,
} from '../factories/invitations.repository.factory';
describe('Invitation service', () => {
  /**
   * Make an Instantiation from Invitation service.
   */
  let repository: InvitationRepository;
  let config = new ConfigService();
  const logger = new LoggerService(InvitationService.name);
  const httpReponseService = new HttpResponseService();
  const invitationRepository = new InvitationRepository();

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: HttpResponseService,
          useValue: httpReponseService,
        },
        {
          provide: InvitationRepository,
          useValue: invitationRepository,
        },
        {
          provide: LoggerService,
          useValue: logger,
        },
        InvitationService,
      ],
      imports: [
        CommonModule,
        ConfigModule.forRoot({
          validate,
          isGlobal: true,
          cache: false,
          expandVariables: true,
          load: [() => ({ InvitationOptions: { parloa_lat: '52.493256', parloa_long: '13.446082' } })],
        }),
      ],
    }).compile();
    repository = module.get<InvitationRepository>(InvitationRepository);
    config = module.get<ConfigService>(ConfigService);
  });
  beforeAll(async () => {
    await repository.init();
  });
  //======================================================================================================
  describe('service status', () => {
    it('should be defined', () => {
      expect(repository).toBeDefined();
    });
  });
  //======================================================================================================================================================
  describe('repositories tests (Single Customer)', () => {
    it('should retrive one customer', async () => {
      const result = await repository.findOne(GET_SINGLE_CUSTOMER_BY_ID_1);
      expect(result?.id).toEqual(GET_SINGLE_CUSTOMER_BY_ID_1);
    });
    it('should retrive one customer', async () => {
      const result = await repository.findOne(GET_SINGLE_CUSTOMER_BY_ID_2);
      expect(result?.id).toEqual(GET_SINGLE_CUSTOMER_BY_ID_2);
    });
    it('should throw entity not found exception', async () => {
      try {
        await repository.findOne(GET_SINGLE_CUSTOMER_BY_ID_3);
      } catch (error) {
        expect(error).toBeDefined();
      }
    });
  });
  //======================================================================================================================================================
  describe('repositories tests (customers list based on distance)', () => {
    it('should retrive a list of users within 100km', async () => {
      const result = await repository.findAll(
        GET_USERS_WITHIN_100_KM,
        new Location(Number('52.493256'), Number('13.446082'))
      );
      expect(result.length).toEqual(19);
    });
    it('should retrive a list of users within 50km', async () => {
      const result = await repository.findAll(
        GET_USERS_WITHIN_50_KM,
        new Location(Number('52.493256'), Number('13.446082'))
      );
      expect(result.length).toEqual(7);
    });
    it('should no user outside 0km', async () => {
      const result = await repository.findAll(
        GET_USERS_WITHIN_0_KM,
        new Location(Number('52.493256'), Number('13.446082'))
      );
      expect(result.length).toEqual(0);
    });
    it('should all users within 500km', async () => {
      const result = await repository.findAll(
        GET_USERS_WITHIN_500_KM,
        new Location(Number('52.493256'), Number('13.446082'))
      );
      expect(result.length).toEqual(397);
    });
    it('should retrive internal error', async () => {
      try {
        await repository.findAll(GET_USERS_WITH_WRONG_DATA, new Location(Number('52.493256'), Number('13.446082')));
      } catch (error) {
        expect(error).toBeDefined();
      }
    });
    it('should be defined', async () => {
      const result = await repository.findAll(
        GET_USERS_WITH_RANDOM_DATA,
        new Location(Number('54.6931541546853256'), Number('44.48741231546082'))
      );
      expect(result.length).toEqual(0);
    });
  });
});
