/**
 * Author Moeid Heidari
 * Date 22 May 2022
 */
import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsNotEmpty, IsNumber } from 'class-validator';
/**
 * List of allowed properties in this DTO
 */
const allowedProperties = ['lat', 'long'];
/**
 * Location DTO
 */
export class LocationDTO {
    /**
     * Latitude of the provided location.
     */
    @IsDefined()
    @IsNotEmpty()
    @IsNumber()
    @ApiProperty({
        description: 'latitude',
        example: 5,
    })
    lat: number;
    /**
     * Longitude of the provided location.
     */
    @IsDefined()
    @IsNotEmpty()
    @IsNumber()
    @ApiProperty({
        description: 'longitude',
        example: 5,
    })
    long: number;

    /**
     * get user DTO constructor
     * @param properties DTO properties
     */
    constructor(properties: any = {}) {
        Object.keys(properties).forEach((key: string) => {
            if (allowedProperties.includes(key))
                this[key as keyof this] = properties[key];
        });
    }
}
