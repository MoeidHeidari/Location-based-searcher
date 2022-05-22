/**
 * Author Moeid Heidari
 * Date 22 May 2022
 */
import { IsDefined, IsNotEmpty, IsNotEmptyObject, IsNumber, IsString, IsUrl, ValidateNested } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
/**
 * List of allowed properties in this DTO
 */
const allowedProperties = ['id'];
/**
 * Single customer response DTO
 */
export class SingleCustomerRequestDTO {
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
  }
}
