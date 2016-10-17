import {Injectable} from '@angular/core';

@Injectable()
export class RestUriService {

    private REST_ROOT_URL: string = "http://localhost:7856/";
    public customerGetAllUri: string = this.REST_ROOT_URL.concat("api/Basic/Customer/GetAll/");


}
