import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import supertest from 'supertest';
import {
    E2E_FAKE_INVITATION_REQUEST_1,
    E2E_FAKE_INVITATION_REQUEST_10,
    E2E_FAKE_INVITATION_REQUEST_11,
    E2E_FAKE_INVITATION_REQUEST_12,
    E2E_FAKE_INVITATION_REQUEST_13,
    E2E_FAKE_INVITATION_REQUEST_14,
    E2E_FAKE_INVITATION_REQUEST_2,
    E2E_FAKE_INVITATION_REQUEST_3,
    E2E_FAKE_INVITATION_REQUEST_4,
    E2E_FAKE_INVITATION_REQUEST_5,
    E2E_FAKE_INVITATION_REQUEST_6,
    E2E_FAKE_INVITATION_REQUEST_7,
    E2E_FAKE_INVITATION_REQUEST_8,
    E2E_FAKE_INVITATION_REQUEST_9,
} from './factories';
import { AppModule } from '../src/app/app.module';

describe('Invitation endpoints (e2e)', () => {
    let app: INestApplication;
    let request: ReturnType<typeof supertest>;

    beforeAll(async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [AppModule],
        }).compile();

        app = module.createNestApplication();
        await app.init();

        const config = new DocumentBuilder()
            .setTitle('Parloa Invitation service')
            .setDescription(
                'A service to Find out should be invited customers list'
            )
            .setVersion('1.0')
            .build();
        const document = SwaggerModule.createDocument(app, config);
        SwaggerModule.setup('api', app, document);
        request = supertest(app.getHttpServer());
    });
    //=============================================================================================================================
    describe('check service liveness', () => {
        it('should receive status code 200', async () => {
            return await request.get('/').expect(200);
        });
    });

    describe('check invitations endpoints', () => {
        it('should receive status code 200', async () => {
            return await request
                .get('/api/v1/invitation')
                .expect(200)
                .expect('Welcome to Invitation list endpoint');
        });

        it('should return 200 Success request', async () => {
            return await request
                .get('/api/v1/invitation/customers')
                .query(E2E_FAKE_INVITATION_REQUEST_1)
                .expect(200);
        });
    });

    it('should return 200 Success request', async () => {
        return await request
            .get('/api/v1/invitation/customers')
            .query(E2E_FAKE_INVITATION_REQUEST_2)
            .expect(200);
    });
    it('should return 200 Success request', async () => {
        return await request
            .get('/api/v1/invitation/customers')
            .query(E2E_FAKE_INVITATION_REQUEST_3)
            .expect(200);
    });
    it('should return 400 Bad request', async () => {
        return await request
            .get('/api/v1/invitation/customers')
            .query(E2E_FAKE_INVITATION_REQUEST_4)
            .expect(400);
    });
    it('should return 400 Bad request', async () => {
        return await request
            .get('/api/v1/invitation/customers')
            .query(E2E_FAKE_INVITATION_REQUEST_5)
            .expect(400);
    });
    it('should return 200 Success request', async () => {
        return await request
            .get('/api/v1/invitation/customers')
            .query(E2E_FAKE_INVITATION_REQUEST_6)
            .expect(200);
    });
    it('should return 200 Success request', async () => {
        return await request
            .get('/api/v1/invitation/customers')
            .query(E2E_FAKE_INVITATION_REQUEST_7)
            .expect(200);
    });
    it('should return 200 Success request', async () => {
        return await request
            .get('/api/v1/invitation/customers')
            .query(E2E_FAKE_INVITATION_REQUEST_8)
            .expect(200);
    });
    it('should return 400 Bad request', async () => {
        return await request
            .get('/api/v1/invitation/customers')
            .query(E2E_FAKE_INVITATION_REQUEST_9)
            .expect(400);
    });
    it('should return 400 Bad request', async () => {
        return await request
            .get('/api/v1/invitation/customers')
            .query(E2E_FAKE_INVITATION_REQUEST_10)
            .expect(400);
    });
    it('should return 400 Bad request', async () => {
        return await request
            .get('/api/v1/invitation/customers')
            .query(E2E_FAKE_INVITATION_REQUEST_11)
            .expect(400);
    });
    it('should return 400 Bad request', async () => {
        return await request
            .get('/api/v1/invitation/customers')
            .query(E2E_FAKE_INVITATION_REQUEST_12)
            .expect(400);
    });
    it('should return 400 Bad request', async () => {
        return await request
            .get('/api/v1/invitation/customers')
            .query(E2E_FAKE_INVITATION_REQUEST_13)
            .expect(400);
    });
    it('should return 400 Bad request', async () => {
        return await request
            .get('/api/v1/invitation/customers')
            .query(E2E_FAKE_INVITATION_REQUEST_14)
            .expect(400);
    });

    afterEach(async () => {
        await app.close();
    });
});
