/**
 * Author Moeid Heidari
 * Date 22 May 2022
 */
/**
 * Location Entity
 */
export class Location {
  /**
   * Latitude of the user retrived from CRM system.
   */
  lat: number;

  /**
   * Longitude of the customer retrived from CRM system
   */
  long: number;
  /**
   * Constructs the location entity
   * @param lat latitude of the user
   * @param long longitude of the user
   */
  constructor(lat: number, long: number) {
    this.lat = lat;
    this.long = long;
  }
}
