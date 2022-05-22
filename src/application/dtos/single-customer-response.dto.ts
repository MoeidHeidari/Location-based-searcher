/**
 * Author Moeid Heidari
 * Date 22 May 2022
 */
import { IsDefined, IsNotEmpty, IsNotEmptyObject, IsNumber, IsString, IsUrl, ValidateNested } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Customer } from '../../domain/entities';
import { Type } from 'class-transformer';
import { Url } from 'url';
import { LocationDTO } from './location.dto';
/**
 * List of allowed properties in this DTO
 */
const allowedProperties = ['id','location'];
/**
 * Single customer response DTO
 */
export class SingleCustomerResponseDTO {
  /**
   * Location of the customer
   */
  @IsDefined()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => LocationDTO)
  @ApiProperty({
    description: 'A list of should be invited customers',
  })
  location: LocationDTO;

  /**
   * Id of the customer
   */
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: 'Id of the customer',
  })
  id: string;


  /**
   * get signgle customer DTO constructor
   * @param properties DTO properties
   */
  constructor(properties: any = {}) {
    Object.keys(properties).forEach((key: string) => {
      if (allowedProperties.includes(key)) this[key as keyof this] = properties[key];
    });
    this.location = new LocationDTO(this.location);
  }
}
