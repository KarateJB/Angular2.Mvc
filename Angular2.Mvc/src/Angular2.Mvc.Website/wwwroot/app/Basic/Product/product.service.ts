/// <reference path="../../../lib-npm/typings/jsnlog.d.ts" />
import {Injectable,Inject} from '@angular/core';
import {Product} from '../../class/Product';


@Injectable()
export class ProductService {

    constructor() {

    }

    //Get books
    public getBooks() {
        return new Promise<Product[]>(
            resolve => {
                let books = PRODUCTS.filter(x => x.Type == "Book");
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
       [{ "Id": "1", "TypeId":"1", "Type": "Book", "Title": "Book 1", "Price": 400 },
        { "Id": "2", "TypeId":"1", "Type": "Book", "Title": "Book 2", "Price": 250 },
        { "Id": "3", "TypeId":"1", "Type": "Book", "Title": "Book 3", "Price": 650 },
        { "Id": "4", "TypeId":"2", "Type": "Toy", "Title": "Doll", "Price": 1000 },
        { "Id": "5", "TypeId":"2", "Type": "Toy", "Title": "Toy Train", "Price": 2200 },
        { "Id": "6", "TypeId":"2", "Type": "Toy", "Title": "LEGO", "Price": 3000 },
        { "Id": "7", "TypeId":"3", "Type": "Music", "Title": "Speed Metal", "Price": 600 },
        { "Id": "8", "TypeId":"3", "Type": "Music", "Title": "Theater Metal", "Price": 450 }];
