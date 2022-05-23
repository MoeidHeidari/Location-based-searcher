import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InvitationRquestDTO } from '../../application/dtos';
import { Customer, Location } from '../entities';
import { asyncFilter, distance, paginate, readFile } from '../helpers';
import { Customers } from '../seeder';

/**
 * Invitation repository class
 */
@Injectable()
export class InvitationRepository {
  /**
   * Seeds the Customers list from Given customers.txt file
   */
  async onApplicationBootstrap() {
    await this.init();
  }
  //================================================================================================================
  /**
   * Initializes the customers list. reads from file, reformat and saves into the Customers list.
   */
  async init() {
    for (let line of (await readFile('src/domain/repository/customers.txt')).split('\n')) {
      try {
        line = line.replace(`id: `, `"id":"`).replace(`, lat:`, `", "lat":`).replace(`, long`, `, "long"`);
        line = '{' + line.substring(0, line.length - 2) + '}';
        const customer = JSON.parse(line);
        Customers.push(new Customer(customer.id, new Location(customer.lat, customer.long)));
      } catch (error) {
        process.emitWarning('something strange happened');
        continue;
      }
    }
  }
  //================================================================================================================
  /**
   * Searchs for a customer by provided id.
   * @param id id of the customer to retrive
   * @returns returns a Customer
   */
  async findOne(id: string): Promise<Customer | undefined> {
    try {
      const result = Customers.find(customer => customer.id === id);
      if (!result) throw new NotFoundException('entity not found');
      return result;
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
  //=================================================================================================================
  /**
   * Filters all customers  within the distance.
   * @param query query parameter to filter based on.
   * @param current_location current location of Parloa
   * @returns a list of Customer[]
   */
  async findAll(query?: InvitationRquestDTO, current_location?: Location): Promise<Customer[]> {
    const result = await asyncFilter(Customers, async (customer: Customer) => {
      return (
        (await distance(
          Number(customer.location?.lat),
          Number(customer.location?.long),
          Number(current_location?.lat),
          Number(current_location?.long)
        )) <= Number(query?.radius)
      );
    });
    result.sort((a: { id: string }, b: { id: string }) => (a.id < b.id ? -1 : a.id > b.id ? 1 : 0));
    return paginate(result, Number(query?.limit), Number(query?.page));
  }
}
