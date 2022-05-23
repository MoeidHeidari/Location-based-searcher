import { Location } from "./location.entity";

/**
 * Customer entity
 */
export class Customer{
    /**
     * Id of the customer inside the CRM system
     */
    id?: string;

    /**
     * Location of the user retrived from CRM system.
     */
    location?:Location;
    /**
     * Constructs the customer entity
     * @param id Id of the user
     * @param location location of the user
     */
    constructor(id: string,location: Location) {
        this.id=id;
        this.location=location;
      }
}