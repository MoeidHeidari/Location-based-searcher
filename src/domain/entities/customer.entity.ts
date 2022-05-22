import { Location } from "./location.entity";

export class Customer{
    /**
     * Id of the customer inside the CRM system
     */
    id?: string;

    /**
     * Location of the user retrived from CRM system.
     */
    location?:Location;

    constructor(id: string,location: Location) {
        this.id=id;
        this.location=location;
      }
}