/**
 * Author Moeid Heidari
 * Date 22 May 2022
 */
import { IsDefined, IsNotEmpty, IsNotEmptyObject, IsNumber, IsUrl, ValidateNested } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Customer } from '../../domain/entities';
import { Type } from 'class-transformer';
import { Url } from 'url';
/**
 * List of allowed properties in this DTO
 */
const allowedProperties = ['list','page','number','next'];
/**
 * Invitation response DTO
 */
export class InvitationResponseDTO {
  /**
   * A list of should be invited customers
   */
  @IsDefined()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => Customer)
  @ApiProperty({
    description: 'A list of should be invited customers',
  })
  list: Customer[];

  /**
   * Represents the number of retrived customers.
   */
  @IsDefined()
  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({
    description: 'Number of retrived customers',
  })
  number: number;

  /**
   * Represents address of the next page.
   */
  @IsDefined()
  @IsNotEmpty()
  @IsUrl()
  @ApiProperty({
    description: 'next page address',
  })
  next: Url;

  /**
   * Represents th number of  current page.
   */
  @IsDefined()
  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({
    description: 'number of current page',
  })
  page: number;



  /**
   * get user DTO constructor
   * @param properties DTO properties
   */
  constructor(properties: any = {}) {
    Object.keys(properties).forEach((key: string) => {
      if (allowedProperties.includes(key)) this[key as keyof this] = properties[key];
    });
  }
}
