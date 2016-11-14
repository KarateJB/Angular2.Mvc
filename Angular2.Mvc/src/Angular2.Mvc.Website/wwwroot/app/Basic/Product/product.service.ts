/// <reference path="../../../lib-npm/typings/jsnlog.d.ts" />
import {Injectable} from '@angular/core';
import { Http, Headers, RequestOptions  } from '@angular/http';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import {Product} from '../../class/Product';
import { Utility} from '../../class/Utility';

//import {RestUriService} from '../../service/resturi.service';

@Injectable()
export class ProductService {

    private httpOptions: RequestOptions;


    constructor(private af: AngularFire) {

    }

    //Query data from firebase
    private queryProducts() {
        return this.af.database.object('/Demo/products');
    }

    //Get books
    public getBooks() {
        return new Promise<Product[]>(
            resolve => {

                //Use local const data
                //let books = PRODUCTS.filter(x => x.Type == "Book");

                //From Firebase
                this.queryProducts().subscribe(data => {
                    let books = data.filter(x => x.Type == "Book");
                    resolve(books);
                })

            });
    }
    //Get toys
    public getToys() {
        return new Promise<Product[]>(
            resolve => {
                //let toys = PRODUCTS.filter(x => x.Type == "Toy");
                //resolve(toys);

                //From Firebase
                this.queryProducts().subscribe(data => {
                    let toys = data.filter(x => x.Type == "Toy");
                    resolve(toys);
                });
            });
    }
    //Get toys
    public getMusic() {
        return new Promise<Product[]>(
            resolve => {
                //let musices = PRODUCTS.filter(x => x.Type == "Music");
                //resolve(musices);

                //From Firebase
                this.queryProducts().subscribe(data => {
                    let musices = data.filter(x => x.Type == "Music");
                    resolve(musices);
                });
            });
    }

    //Create new product
    public create(prod: Product) {
        //Set UUID to id
        prod.Id = Utility.generateUUID();

        var getPromise = new Promise(
            resolve => {
                let itemObservable = this.queryProducts();
                let current = null;
                itemObservable.subscribe(value => {
                    current = value;
                    current.push(prod);
                    resolve(current);
                })
            }).then((newValue) => {
                let itemObservable = this.queryProducts();
                itemObservable.update(newValue);
            });

        return getPromise;

    }


}


const PRODUCTS: Product[] =
    [{ "Id": "1", "Type": "Book", "Title": "Book 1", "Price": 400 },
        { "Id": "2", "Type": "Book", "Title": "Book 2", "Price": 250 },
        { "Id": "3", "Type": "Book", "Title": "Book 3", "Price": 650 },
        { "Id": "4", "Type": "Toy", "Title": "Doll", "Price": 1000 },
        { "Id": "5", "Type": "Toy", "Title": "Toy Train", "Price": 2200 },
        { "Id": "6", "Type": "Toy", "Title": "LEGO", "Price": 3000 },
        { "Id": "7", "Type": "Music", "Title": "Speed Metal", "Price": 600 },
        { "Id": "8", "Type": "Music", "Title": "Theater Metal", "Price": 450 }];
