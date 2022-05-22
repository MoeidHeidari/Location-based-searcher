/**
 * Author Moeid Heidari
 * Date 22 May 2022
 */
import { expandEnvVariables } from '../../domain/helpers';

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
   * represents the the radious within the customers should be invited.
   */
  radious: number;
}

/**
 * configuration function
 * @returns configuration taken from env
 */
export const configuration = (): any => ({
  ParloaOptions: {
    radious: process.env.RADIOUS,
  },
});
