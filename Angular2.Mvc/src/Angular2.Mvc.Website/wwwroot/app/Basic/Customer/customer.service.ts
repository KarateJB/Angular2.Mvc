import {Injectable} from '@angular/core';
import { Http } from '@angular/http';
import {Customer} from './Tcustomer';
import {ICrudService} from '../../interface/ICrudService';
import {RestUriService} from '../../service/resturi.service';

@Injectable()
export class CustomerService implements ICrudService {

    private customers: Customer[];

    constructor(
        private http: Http,
        private resturiService: RestUriService
    ) {
        console.log("Get customer uri = " + this.resturiService.customerGetAllUri);
        this.customers = [];
    }

    //Get all customers
    public getAll() {
        return new Promise<Customer[]>(
            resolve => {
                //resolve(CUSTOMERS);
                this.http.get(this.resturiService.customerGetAllUri)
                    .subscribe(value => {
                        console.log(value);
                        Object.assign(this.customers, value.json());
                        console.log(this.customers);
                        resolve(value.json());
                    });
            });
    }
    public get(id: number) {
        return new Promise<Customer>(
            resolve => {
                this.getAll().then(function (data) {
                    var cust = data.find(x => x.Id == id);
                    resolve(cust);
                    //setTimeout(() => resolve(cust), 1000);
                })
                
            });
    }
    public search(keyword: string) {
        let rtn: Customer[] = new Array<Customer>();

        for (let i = 0; i < this.customers.length; i++) {
            var cust = this.customers[i];
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


const CUSTOMERS: Customer[] =
    [{ "Id": 1, "Name": "<b>JB</b>", "Phone": "0933XXXXXX", "Age": 35 },
        { "Id": 2,"Name": "<b>Lily</b>", "Phone": "0910XXXXXX", "Age": 18 },
        { "Id": 3,"Name": "<b>Leia</b>", "Phone": "N/A", "Age": 3 },
        { "Id": 4,"Name": "<b>Darth vader</b>", "Phone": "02-1234567", "Age": 28 },
        { "Id": 5,"Name": "<b>Hachi</b>", "Phone": "N/A", "Age": 6 },
        { "Id": 6,"Name": "<b>Luke Skywalker</b>", "Phone": "02-5678901", "Age": 10 },
        { "Id": 7,"Name": "<b>Anakin Skywalker</b>", "Phone": "0988ZZZZZZ", "Age": 13 },
        { "Id": 8,"Name": "<b>Obi wan</b>", "Phone": "0912YYYYYY", "Age": 65 }];
