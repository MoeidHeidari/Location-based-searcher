/**
 * Author Moeid Heidari
 * Date 22 May 2022
 */
import { HttpStatus, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { HttpResponseService } from '../../http/service';
import { LoggerService } from '../../logger';
import { EnvObjects, ParloaOptions } from '../../config';
import { InvitationRepository } from '../repository/invitation.repository';
import {
    InvitationResponseDTO,
    InvitationRquestDTO,
    SingleCustomerRequestDTO,
    SingleCustomerResponseDTO,
} from '../dto';
import { HttpResponse } from '../../http/interface';
import { Location } from '../entity';
import {
    processHttpError,
    validateDTO,
    validateOutputDTO,
} from '../../common/helpers';
import { HttpResponseException } from '../../http/exceptions';
/**
 * Invitation service
 */
@Injectable()
export class InvitationService {
    /**
     * Options for envs
     */
    private options: any = this.configService.get<ParloaOptions>(
        EnvObjects.PARLOA_OPTIONS
    );
    //===========================================================================================
    /**
     * Constructor of the invitation service class
     * @param httpResponseService Http response service
     * @param configService Config service
     * @param logger Logger service
     */
    constructor(
        private readonly httpResponseService: HttpResponseService,
        private readonly configService: ConfigService,
        private readonly logger: LoggerService,
        private readonly invitationRepository: InvitationRepository
    ) {}
    //===========================================================================================
    /**
     * Handles the Invitation request
     * @param query a query to get back the list of customers
     * @returns HTTPResponse
     */
    async handlInvitationRequest(
        query: InvitationRquestDTO
    ): Promise<HttpResponse> {
        try {
            await validateDTO(query, this.httpResponseService);
            const page = Number(query.page);
            const limit = Number(query.limit);
            const customers = await this.invitationRepository.findAll(
                query,
                new Location(
                    Number(this.options.parloa_lat),
                    Number(this.options.parloa_long)
                )
            );

            const result = new InvitationResponseDTO({
                list: customers,
                page: page,
                number: limit,
                next: `/api/v1/invitation/customers?radius=${
                    query.radius
                }&page=${Number(page + 1)}&limit=${query.limit}`,
            });
            await validateOutputDTO(result, this.logger);
            return this.httpResponseService.generate(HttpStatus.OK, result);
        } catch (error) {
            processHttpError(error, this.logger);
            throw new HttpResponseException(
                this.httpResponseService.generate(HttpStatus.NOT_FOUND)
            );
        }
    }
    //===========================================================================================
    /**
     * Returns  back one single customer by id
     * @param query query to get back the customer
     * @returns HttpReponse
     */
    async getOneCustomerById(
        query: SingleCustomerRequestDTO
    ): Promise<HttpResponse> {
        try {
            await validateDTO(query, this.httpResponseService);
            const customer = await this.invitationRepository.findOne(query.id);
            const result = new SingleCustomerResponseDTO(customer);
            await validateOutputDTO(result, this.logger);
            return this.httpResponseService.generate(HttpStatus.OK, result);
        } catch (error) {
            processHttpError(error, this.logger);
            throw new HttpResponseException(
                this.httpResponseService.generate(HttpStatus.NOT_FOUND)
            );
        }
    }
}
