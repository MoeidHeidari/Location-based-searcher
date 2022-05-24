/**
 * Author Moeid Heidari
 * Date 22 May 2022
 */
import { IsDefined, IsNotEmpty, IsNotEmptyObject, IsNumber, IsString, Max, ValidateNested } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
/**
 * List of allowed properties in this DTO
 */
const allowedProperties = ['radius', 'limit', 'page'];
/**
 * IOU request DTO
 */
export class InvitationRquestDTO {
  /**
   * Coordinates of Paloa current location
   */
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: 'radius in which we want to invide the customers',
  })
  radius: string;

  /**
   * Represents the number of retrived customers.
   */
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: 'Limitation of the retrived customers',
  })
  limit: string;

  /**
   * Represents th number of  current page.
   */
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: 'number of current page',
  })
  page: string;

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
