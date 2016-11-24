/// <reference path="../../../../lib-npm/typings/jsnlog.d.ts" />
import {Injectable} from '@angular/core';
import { Http, Headers, RequestOptions  } from '@angular/http';
import {RestUriService} from '../../../service/resturi.service';

@Injectable()
export class CustomerMvcService {

    private httpOptions: RequestOptions;

    constructor(
        private http: Http,
        private resturiService: RestUriService
    ) {

        let headers = new Headers({ 'Content-Type': 'application/json' });
        this.httpOptions = new RequestOptions({ headers: headers });
    }

    //Get all customers
    public queryCustomerView() {
        return new Promise<string>(
            resolve => {
                this.http.get(this.resturiService.customerMvcCreateUri)
                    .subscribe(value => {

                        JL("Angular2").debug(value.text());
                        resolve(value.text());
                    });
            });
    }


}

