import {Injectable} from '@angular/core';

@Injectable()
export class RestUriService {

    private REST_ROOT_URL: string = "http://localhost:7856/";
    private WEB_ROOT_URL: string = "http://localhost:4240/";

    //Customer
    public customerGetAllUri: string = this.REST_ROOT_URL.concat("api/Basic/Customer/GetAll/");
    public customerGetUri: string = this.REST_ROOT_URL.concat("api/Basic/Customer/Get/");
    public customerCreateUri: string = this.REST_ROOT_URL.concat("api/Basic/Customer/Create/");
    public customerUpdateUri: string = this.REST_ROOT_URL.concat("api/Basic/Customer/Update/");
    public customerRemoveUri: string = this.REST_ROOT_URL.concat("api/Basic/Customer/Remove/");

    //CustomerMvc
    public customerMvcEditPvUri: string = this.WEB_ROOT_URL.concat("Basic/CustomerMvc/Edit/");

}
