import {Injectable} from 'angular2/core';
import {Customer} from './Tcustomer';
import {ICrudService} from '../../Interface/ICrudService';

@Injectable()
export class CustomerService implements ICrudService {
    public getAll() {
        return new Promise<Customer[]>(
            resolve => setTimeout(() => resolve(customers), 1000));
    }
    public get(id: number) {
        return new Promise<Customer>(
            resolve => {
                var cust = customers.find(x => x.Id == id);
                setTimeout(() => resolve(cust), 1000);
            });
    }
    public search(keyword: string) {
        let rtn: Customer[] = new Array<Customer>();
        for (let i = 0; i < customers.length; i++) {
            var cust = customers[i];
            if (cust.Name.indexOf(keyword)>0) {
                rtn.push(cust);
            }
        }
        console.log(rtn);
        //var custs = customers.find(x => x.Name.indexOf(keyword) > 0);
        return rtn;
    }
    public create(item: Customer) {

        return new Promise(
            resolve => {
                //Save it to database
                resolve();
            });
    }
    public update(item: Customer) {
        return new Promise(
            resolve => {
                //Save it to database
                resolve();
            });
    }
    public delete(item: Customer) {
        return new Promise(
            resolve => {
                //Delete it from database
                resolve();
            });
    }

    
}


const customers: Customer[] =
    [{ "Id": 1, "Name": "<b>JB</b>", "Phone": "0933XXXXXX", "Age": 35 },
        { "Id": 2,"Name": "<b>Lily</b>", "Phone": "0910XXXXXX", "Age": 18 },
        { "Id": 3,"Name": "<b>Leia</b>", "Phone": "N/A", "Age": 3 },
        { "Id": 4,"Name": "<b>Darth vader</b>", "Phone": "02-1234567", "Age": 28 },
        { "Id": 5,"Name": "<b>Hachi</b>", "Phone": "N/A", "Age": 6 },
        { "Id": 6,"Name": "<b>Luke Skywalker</b>", "Phone": "02-5678901", "Age": 10 },
        { "Id": 7,"Name": "<b>Anakin Skywalker</b>", "Phone": "0988ZZZZZZ", "Age": 13 },
        { "Id": 8,"Name": "<b>Obi wan</b>", "Phone": "0912YYYYYY", "Age": 65 }];
