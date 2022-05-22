/**
 * Author Moeid Heidari
 * Date 22 May 2022
 */
import { HttpStatus, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InvitationResponseDTO, InvitationRquestDTO } from '../../application/dtos';
import { EnvObjects, ParloaOptions } from '../../infrastructure/config';
import { HttpResponseException } from '../exceptions';
import { processHttpError, validateDTO, validateOutputDTO } from '../helpers';
import { HttpResponse } from '../interfaces';
import { HttpResponseService, LoggerService } from './common';
/**
 * Invitation service
 */
@Injectable()
export class InvitationService {
  /**
   * Options for envs
   */
  private options: any = this.configService.get<ParloaOptions>(EnvObjects.PARLOA_OPTIONS);
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
    private readonly logger: LoggerService
  ) {}
  //===========================================================================================
  /**
   * Handles the Invitation request
   * @param query a query to get back the list of customers
   * @returns HTTPResponse
   */
  async handlInvitationRequest(query: InvitationRquestDTO): Promise<HttpResponse> {
    try {
      await validateDTO(query, this.httpResponseService);

     

      const result = new InvitationResponseDTO({ list: [],page:1,number:1,next:"/page/2" });
      await validateOutputDTO(result, this.logger);
      return this.httpResponseService.generate(HttpStatus.OK, result);
    } catch (error) {
      processHttpError(error, this.logger);
      throw new HttpResponseException(this.httpResponseService.generate(HttpStatus.INTERNAL_SERVER_ERROR));
    }
  }
}
