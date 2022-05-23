/**
 * Author Moeid Heidari
 * Date 22 May 2022
 */
import { plainToClass } from 'class-transformer';
import { validateSync, IsOptional } from 'class-validator';

/**
 * env vatiables
 */
class EnvironmentVariables {
  /**
   * Represents the latitude of Parloa locatino
   */
  @IsOptional()
  PARLOA_LAT = 52.493256;
  /**
   * Represents the Longitude of Parloa locatino
   */
  @IsOptional()
  PARLOA_LONG =13.446082;
}

/**
 * validates the config
 * @param config congig
 * @returns validated config
 */
export function validate(config: Record<string, unknown>) {
  const validatedConfig = plainToClass(EnvironmentVariables, config, { enableImplicitConversion: true });
  const errors = validateSync(validatedConfig, { skipMissingProperties: false });

  if (errors.length > 0) {
    throw new Error(errors.toString());
  }
  return validatedConfig;
}
