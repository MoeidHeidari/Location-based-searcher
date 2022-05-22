export class Location{
    /**
     * Latitude of the user retrived from CRM system.
     */
    lat:number;

    /**
     * Longitude of the customer retrived from CRM system
     */
    long:number;

    constructor(lat: number,long:number) {
        this.lat=lat;
        this.long=long;
      }
}