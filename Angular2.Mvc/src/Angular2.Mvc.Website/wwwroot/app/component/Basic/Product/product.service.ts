/// <reference path="../../../../lib-npm/typings/jsnlog.d.ts" />
import {Injectable, Inject} from '@angular/core';
import { Http, Headers, RequestOptions  } from '@angular/http';
import { AngularFire, FirebaseListObservable, FirebaseApp  } from 'angularfire2';
import {Product} from '../../../class/Product';
import {ProductType} from '../../../class/ProductType';
import { Utility} from '../../../class/Utility';
import { EnumEx} from '../../../class/EnumEx';
import { ProductTypeEnum } from '../../../enum/ProductTypeEnum';


@Injectable()
export class ProductService {

    private httpOptions: RequestOptions;
    constructor(
        //@Inject(FirebaseApp) private firebaseApp: any,
        private af: AngularFire) {

    }

    //Query data from firebase
    private _queryProducts() {

        this.af.auth.subscribe(
            user => {
                if (!user) {
                    swal("Error", "Please login ... ", "error");
                }
            },
            error => JL("Angular2").error(error)
        );

        return this.af.database.object('/Demo/products');
    }

    //Get Product types list
    public getProductTypes() {
        let prodTypes: ProductType[] = [];

        //Get name-value pairs from ProductTypeEnum
        let prodTypeEnumList = EnumEx.getNamesAndValues(ProductTypeEnum);

        //Convert name-value pairs to ProductType[]
        prodTypeEnumList.forEach(pair => {
            let prodType = { 'id': pair.value.toString(), 'name': pair.name };
            prodTypes.push(prodType);
        });

        return prodTypes;

        //return PRODUCT_TYPES;
    }


    


    public getByKey(key: string) {

        return new Promise<Product>(
            resolve => {
                this.af.database.object('/Demo/products/' + key).subscribe(data => {
                    resolve(data);
                })
            });
    }

    public get(id: string) {
        return new Promise<Product>(
            resolve => {
                //From Firebase
                this._queryProducts().subscribe(data => {
                    if (data) {
                        let prod = data.find(x => x.Id == id);
                        resolve(prod);
                    }
                    else {
                        resolve(null);
                    }

                })

            });
    }

    //Get books
    public getBooks() {
        return new Promise<Product[]>(
            resolve => {

                //Use local const data
                //let books = PRODUCTS.filter(x => x.Type == "Book");

                //From Firebase
                this._queryProducts().subscribe(data => {
                    if (data) {
                        let books = data.filter(x => x.Type == "Book");
                        resolve(books);
                    }
                    else {
                        resolve([]);
                    }

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
                this._queryProducts().subscribe(data => {
                    if (data) {
                        let toys = data.filter(x => x.Type == "Toy");
                        resolve(toys);
                    }
                    else {
                        resolve([]);
                    }
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
                this._queryProducts().subscribe(data => {
                    if (data) {
                        let musices = data.filter(x => x.Type == "Music");
                        resolve(musices);
                    }
                    else {
                        resolve([]);
                    }
                });
            });
    }

    //Create new product
    public create(prod: Product) {
        //Set UUID to id
        prod.Id = Utility.generateUUID();

        var getPromise = new Promise(
            resolve => {
                let itemObservable = this._queryProducts();
                console.log(itemObservable);
                let current = null;
                itemObservable.subscribe(value => {
                    current = value;
                    current.push(prod);
                    resolve(current);
                })
            }).then((newValue) => {
                let itemObservable = this._queryProducts();
                itemObservable.update(newValue);
            });

        //Could also use the following codes to append a new object to database with specified key!
        //var getPromise = new Promise(
        //    resolve => {
        //        let itemObservable = this.af.database.object('/Demo/products/' + prod.Id);
        //        itemObservable.set(prod);
        //        resolve();
        //    });

        return getPromise;
    }

    //Update a product
    public update(prod: Product) {

        var getPromise = new Promise(
            resolve => {
                let itemObservable = this._queryProducts();
                let current: Product[] = [];
                itemObservable.subscribe(value => {
                    current = value;
                    for (let i = 0; i < current.length; i++) {
                        let item = current[i];
                        if (item.Id == prod.Id) {
                            item.Price = prod.Price;
                            item.Title = prod.Title;
                            item.TypeId = prod.TypeId;
                            item.Type = prod.Type;
                        }
                    }

                    resolve(current);
                })
            }).then((newValue) => {
                let itemObservable = this._queryProducts();
                itemObservable.update(newValue);
            });

        return getPromise;
    }

    //Remove all products
    public removeAll() {
        var getPromise = new Promise(
            resolve => {
                let itemObservable = this._queryProducts();
                itemObservable.remove();
            })
        return getPromise;
    }

    //Remove a product
    public remove(prod: Product) {
        var promise = new Promise(
            resolve => {
                let itemObservable = this._queryProducts();
                let current: Product[] = [];
                itemObservable.subscribe(value => {
                    current = value;

                    //Remove item
                    for (let i = 0; i < current.length; i++) {
                        let item = current[i];
                        if (item.Id == prod.Id) {
                            var index = current.indexOf(item);
                            current.splice(index, 1);
                        }
                    }

                    resolve(current);
                })
            }).then((newValue: Product[]) => {

                let itemObservable = this._queryProducts();
                let prods: Product[] = [];
                newValue.forEach(item => {
                    prods.push(item);
                });

                itemObservable.set(prods); //PS. Cannot use update() here.
            });

        return promise;
    }


}


const PRODUCTS: Product[] =
    [{ "Id": "1", "TypeId": "1", "Type": "Book", "Title": "Book 1", "Price": 400 },
        { "Id": "2", "TypeId": "1", "Type": "Book", "Title": "Book 2", "Price": 250 },
        { "Id": "3", "TypeId": "1", "Type": "Book", "Title": "Book 3", "Price": 650 },
        { "Id": "4", "TypeId": "2", "Type": "Toy", "Title": "Doll", "Price": 1000 },
        { "Id": "5", "TypeId": "2", "Type": "Toy", "Title": "Toy Train", "Price": 2200 },
        { "Id": "6", "TypeId": "2", "Type": "Toy", "Title": "LEGO", "Price": 3000 },
        { "Id": "7", "TypeId": "3", "Type": "Music", "Title": "Speed Metal", "Price": 600 },
        { "Id": "8", "TypeId": "3", "Type": "Music", "Title": "Theater Metal", "Price": 450 }];

//const PRODUCT_TYPES: ProductType[] =
//    [{ "id": "1", "name": "Book" }, { "id": "2", "name": "Toy" }, { "id": "3", "name": "Music" }];
