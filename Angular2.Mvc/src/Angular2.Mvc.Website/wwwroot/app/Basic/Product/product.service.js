System.register(['@angular/core', 'angularfire2', '../../class/Utility', '../../class/EnumEx', '../../enum/ProductTypeEnum'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var core_1, angularfire2_1, Utility_1, EnumEx_1, ProductTypeEnum_1;
    var ProductService, PRODUCTS;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (angularfire2_1_1) {
                angularfire2_1 = angularfire2_1_1;
            },
            function (Utility_1_1) {
                Utility_1 = Utility_1_1;
            },
            function (EnumEx_1_1) {
                EnumEx_1 = EnumEx_1_1;
            },
            function (ProductTypeEnum_1_1) {
                ProductTypeEnum_1 = ProductTypeEnum_1_1;
            }],
        execute: function() {
            ProductService = (function () {
                function ProductService(firebaseApp, af) {
                    this.firebaseApp = firebaseApp;
                    this.af = af;
                }
                //Query data from firebase
                ProductService.prototype.queryProducts = function () {
                    return this.af.database.object('/Demo/products');
                };
                //Get Product types list
                ProductService.prototype.getProductTypes = function () {
                    var prodTypes = [];
                    //Get name-value pairs from ProductTypeEnum
                    var prodTypeEnumList = EnumEx_1.EnumEx.getNamesAndValues(ProductTypeEnum_1.ProductTypeEnum);
                    //Convert name-value pairs to ProductType[]
                    prodTypeEnumList.forEach(function (pair) {
                        var prodType = { 'id': pair.value.toString(), 'name': pair.name };
                        prodTypes.push(prodType);
                    });
                    return prodTypes;
                    //return PRODUCT_TYPES;
                };
                ProductService.prototype.get = function (id) {
                    var _this = this;
                    return new Promise(function (resolve) {
                        //From Firebase
                        _this.queryProducts().subscribe(function (data) {
                            if (data) {
                                var prod = data.find(function (x) { return x.Id == id; });
                                resolve(prod);
                            }
                            else {
                                resolve(null);
                            }
                        });
                    });
                };
                //Get books
                ProductService.prototype.getBooks = function () {
                    var _this = this;
                    return new Promise(function (resolve) {
                        //Use local const data
                        //let books = PRODUCTS.filter(x => x.Type == "Book");
                        //From Firebase
                        _this.queryProducts().subscribe(function (data) {
                            if (data) {
                                var books = data.filter(function (x) { return x.Type == "Book"; });
                                resolve(books);
                            }
                            else {
                                resolve([]);
                            }
                        });
                    });
                };
                //Get toys
                ProductService.prototype.getToys = function () {
                    var _this = this;
                    return new Promise(function (resolve) {
                        //let toys = PRODUCTS.filter(x => x.Type == "Toy");
                        //resolve(toys);
                        //From Firebase
                        _this.queryProducts().subscribe(function (data) {
                            if (data) {
                                var toys = data.filter(function (x) { return x.Type == "Toy"; });
                                resolve(toys);
                            }
                            else {
                                resolve([]);
                            }
                        });
                    });
                };
                //Get toys
                ProductService.prototype.getMusic = function () {
                    var _this = this;
                    return new Promise(function (resolve) {
                        //let musices = PRODUCTS.filter(x => x.Type == "Music");
                        //resolve(musices);
                        //From Firebase
                        _this.queryProducts().subscribe(function (data) {
                            if (data) {
                                var musices = data.filter(function (x) { return x.Type == "Music"; });
                                resolve(musices);
                            }
                            else {
                                resolve([]);
                            }
                        });
                    });
                };
                //Create new product
                ProductService.prototype.create = function (prod) {
                    var _this = this;
                    //Set UUID to id
                    prod.Id = Utility_1.Utility.generateUUID();
                    var getPromise = new Promise(function (resolve) {
                        var itemObservable = _this.queryProducts();
                        var current = null;
                        itemObservable.subscribe(function (value) {
                            current = value;
                            current.push(prod);
                            resolve(current);
                        });
                    }).then(function (newValue) {
                        var itemObservable = _this.queryProducts();
                        itemObservable.update(newValue);
                    });
                    return getPromise;
                };
                //Update a product
                ProductService.prototype.update = function (prod) {
                    var _this = this;
                    var getPromise = new Promise(function (resolve) {
                        var itemObservable = _this.queryProducts();
                        var current = [];
                        itemObservable.subscribe(function (value) {
                            current = value;
                            for (var i = 0; i < current.length; i++) {
                                var item = current[i];
                                if (item.Id == prod.Id) {
                                    item.Price = prod.Price;
                                    item.Title = prod.Title;
                                    item.TypeId = prod.TypeId;
                                    item.Type = prod.Type;
                                }
                            }
                            resolve(current);
                        });
                    }).then(function (newValue) {
                        var itemObservable = _this.queryProducts();
                        itemObservable.update(newValue);
                    });
                    return getPromise;
                };
                //Remove all products
                ProductService.prototype.removeAll = function () {
                    var _this = this;
                    var getPromise = new Promise(function (resolve) {
                        var itemObservable = _this.queryProducts();
                        itemObservable.remove();
                    });
                    return getPromise;
                };
                //Remove a product
                ProductService.prototype.remove = function (prod) {
                    var _this = this;
                    var promise = new Promise(function (resolve) {
                        var itemObservable = _this.queryProducts();
                        var current = [];
                        itemObservable.subscribe(function (value) {
                            current = value;
                            //Remove item
                            for (var i = 0; i < current.length; i++) {
                                var item = current[i];
                                if (item.Id == prod.Id) {
                                    var index = current.indexOf(item);
                                    current.splice(index, 1);
                                }
                            }
                            resolve(current);
                        });
                    }).then(function (newValue) {
                        var itemObservable = _this.queryProducts();
                        var prods = [];
                        newValue.forEach(function (item) {
                            prods.push(item);
                        });
                        itemObservable.set(prods); //PS. Cannot use update() here.
                    });
                    return promise;
                };
                ProductService = __decorate([
                    core_1.Injectable(),
                    __param(0, core_1.Inject(angularfire2_1.FirebaseApp)), 
                    __metadata('design:paramtypes', [Object, angularfire2_1.AngularFire])
                ], ProductService);
                return ProductService;
            }());
            exports_1("ProductService", ProductService);
            PRODUCTS = [{ "Id": "1", "TypeId": "1", "Type": "Book", "Title": "Book 1", "Price": 400 },
                { "Id": "2", "TypeId": "1", "Type": "Book", "Title": "Book 2", "Price": 250 },
                { "Id": "3", "TypeId": "1", "Type": "Book", "Title": "Book 3", "Price": 650 },
                { "Id": "4", "TypeId": "2", "Type": "Toy", "Title": "Doll", "Price": 1000 },
                { "Id": "5", "TypeId": "2", "Type": "Toy", "Title": "Toy Train", "Price": 2200 },
                { "Id": "6", "TypeId": "2", "Type": "Toy", "Title": "LEGO", "Price": 3000 },
                { "Id": "7", "TypeId": "3", "Type": "Music", "Title": "Speed Metal", "Price": 600 },
                { "Id": "8", "TypeId": "3", "Type": "Music", "Title": "Theater Metal", "Price": 450 }];
        }
    }
});
//const PRODUCT_TYPES: ProductType[] =
//    [{ "id": "1", "name": "Book" }, { "id": "2", "name": "Toy" }, { "id": "3", "name": "Music" }];
//# sourceMappingURL=product.service.js.map