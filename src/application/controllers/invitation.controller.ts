/**
 * Author Moeid Heidari
 * Date 22 May 2022
 */
import {
    Controller,
    Post,
    Body,
    HttpStatus,
    HttpCode,
    Get,
    Header,
    CacheInterceptor,
    UseInterceptors,
    Query,
  } from '@nestjs/common';
  import { HttpResponse } from '../../domain/interfaces';
  import { Public } from '../../domain/decorators';
  import { InvitationService } from '../../domain/services/invitation.service';
  import { ApiBody, ApiOperation, ApiParam, ApiResponse } from '@nestjs/swagger';
import { InvitationResponseDTO } from '../dtos/invitation-response.dto';
import { InvitationRquestDTO } from '../dtos/invitation-request.dto';
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
    @Public()
    async() {
      return 'Welcome to Invitation list endpoint';
    }
    //===========================================================================================================================
    /**
     * Takes a radious in which we want to invite the customers.
     * @param body radious circle information
     * @returns HTTPReponse
     */
    @ApiOperation({ summary: 'Finds the list of users which are within the circle' })
    @ApiResponse({
      status: 200,
      description: 'Returns back the list of should-be invited customers',
      type: InvitationResponseDTO,
    })
    @ApiBody({ type: [InvitationRquestDTO] })
    @Header('content-type', 'application/json')
    @Get('customers')
    @HttpCode(HttpStatus.OK)
    @Public()
    async invitation(@Query() query: any): Promise<HttpResponse> {
      //const response: HttpResponse = await this.invitationservice.handlInvitationRequest(new InvitationRquestDTO(query));
      return query;
    }
  }
  