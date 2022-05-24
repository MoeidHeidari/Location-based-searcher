/**
 * Author Moeid Heidari
 * Date 22 May 2022
 */
import { expandEnvVariables } from '../../domain/helpers';
/**
 * Environment object variable expansion
 */
expandEnvVariables();

/**
 * options enum
 */
export enum EnvObjects {
  PARLOA_OPTIONS = 'ParloaOptions',
}
//===================================================================================================
/**
 * Parloa options
 */
export interface ParloaOptions {
  /**
   * Represents the latitude of Parloa locatino
   */
  parloa_lat: number;
  /**
   * Represents the Longitude of Parloa locatino
   */
  parloa_long: number;
}

/**
 * configuration function
 * @returns configuration taken from env
 */
export const configuration = (): any => ({
  ParloaOptions: {
    parloa_lat: process.env.PARLOA_LAT,
    parloa_long: process.env.PARLOA_LONG,
  },
});
