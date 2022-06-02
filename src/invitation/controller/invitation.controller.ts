/**
 * Author Moeid Heidari
 * Date 22 May 2022
 */
import {
    Controller,
    HttpStatus,
    HttpCode,
    Get,
    Header,
    CacheInterceptor,
    UseInterceptors,
    Query,
} from '@nestjs/common';

import { ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { HttpResponse } from '../../http/interface';
import {
    InvitationResponseDTO,
    InvitationRquestDTO,
    SingleCustomerRequestDTO,
} from '../dto';
import { InvitationService } from '../service';

/**
 * Invitation controller
 */
@Controller('api/v1/invitation')
@UseInterceptors(CacheInterceptor)
export class InvitationContoller {
    /**
     * Invitation controller class constructor
     * @param invitationService Invitation service
     */
    constructor(private readonly invitationservice: InvitationService) {}

    //===========================================================================================================================
    /**
     * Entrypoint of the IUO API
     * @returns Text
     */
    @ApiOperation({ summary: 'Entry point for Invitation API' })
    @ApiResponse({
        status: 200,
        description: 'Returns back the list of should-be invited customers',
        type: String,
    })
    @Get()
    async() {
        return 'Welcome to Invitation list endpoint';
    }
    //===========================================================================================================================
    /**
     * Takes a radious in which we want to invite the customers.
     * @param body radious circle information
     * @returns HTTPReponse
     */
    @ApiOperation({
        summary: 'Finds the list of users which are within the circle',
    })
    @ApiResponse({
        status: 200,
        description: 'Returns back the list of should-be invited customers',
        type: InvitationResponseDTO,
    })
    @ApiBody({ type: [InvitationRquestDTO] })
    @Header('content-type', 'application/json')
    @Get('customers')
    @HttpCode(HttpStatus.OK)
    async invitation(@Query() query: any): Promise<HttpResponse> {
        const response: HttpResponse =
            await this.invitationservice.handlInvitationRequest(
                new InvitationRquestDTO(query)
            );
        return response;
    }
    //===========================================================================================================================
    /**
     * Takes an id and returns the customer associated with.
     * @param wuery contains user id
     * @returns HTTPReponse
     */
    @ApiOperation({ summary: 'Returns single customer with id' })
    @ApiResponse({
        status: 200,
        description: 'Returns single customer with id',
        type: InvitationResponseDTO,
    })
    @ApiBody({ type: [InvitationRquestDTO] })
    @Header('content-type', 'application/json')
    @Get('customer')
    @HttpCode(HttpStatus.OK)
    async singleCustomer(@Query() query: any): Promise<HttpResponse> {
        const response: HttpResponse =
            await this.invitationservice.getOneCustomerById(
                new SingleCustomerRequestDTO(query)
            );
        return response;
    }
}
