import {Injectable} from '@angular/core';
import { Http, Headers, RequestOptions  } from '@angular/http';
import {Product} from '../../class/Product';
//import {RestUriService} from '../../service/resturi.service';

@Injectable()
export class ProductService {

    private products: Product[];
    private httpOptions: RequestOptions;

    constructor() {
        this.products = [];
    }

    //Get books
    public getBooks() {
        return new Promise<Product[]>(
            resolve => {
                let books = PRODUCTS.filter(x => x.Type=="Book");
                resolve(books);
            });
    }
    //Get toys
    public getToys() {
        return new Promise<Product[]>(
            resolve => {
                let toys = PRODUCTS.filter(x => x.Type == "Toy");
                resolve(toys);
            });
    }
    //Get toys
    public getMusic() {
        return new Promise<Product[]>(
            resolve => {
                let musices = PRODUCTS.filter(x => x.Type == "Music");
                resolve(musices);
            });
    }


}


const PRODUCTS: Product[] =
       [{ "Id": 1, "Type":"Book","Title": "Book 1", "Price": 400 },
        { "Id": 2, "Type": "Book", "Title": "Book 2", "Price": 250 },
        { "Id": 3, "Type": "Book", "Title": "Book 3", "Price":650},
        { "Id": 4, "Type":"Toy","Title": "Doll", "Price": 1000 },
        { "Id": 5, "Type":"Toy","Title": "Toy Train", "Price": 2200 },
        { "Id": 6, "Type": "Toy", "Title": "LEGO", "Price": 3000 },
        { "Id": 7, "Type":"Music","Title": "Speed Metal", "Price": 600 },
        { "Id": 8, "Type":"Music","Title": "Theater Metal", "Price": 450 }];
