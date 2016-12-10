/// <reference path="../../../../lib-npm/typings/jsnlog.d.ts" />
import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {ProductService} from './product.service';
import {Product} from '../../../class/Product';
import {ProductType} from '../../../class/ProductType';


declare var swal: any; //SweetAlert2 typings definition

@Component({
    selector: 'product-edit',
    providers: [ProductService],
    templateUrl: '/app/component/Basic/Product/product-edit.component.html'
})

export class ProductEditComponent implements OnInit {
    title: string;
    private prod: Product;
    private selectedProdType: ProductType;
    private prodTypes: ProductType[];

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private prodService: ProductService
    ) {
        this.title = "Products - Edit";
        this.prod = new Product();
        this.prodTypes = this.prodService.getProductTypes();
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            let prodId = params['id'];

            this.prodService.get(prodId).then(
                data => {
                    this.prod = data;
                    this.prodTypes.forEach(type => {
                        if (type.id == this.prod.TypeId) {
                            console.log('matched type is ' + type.name);
                            this.selectedProdType = type;
                        }
                    })

                });
        });
    }

    //Save!
    private save() {

        this.prod.TypeId = this.selectedProdType.id;
        this.prod.Type = this.selectedProdType.name;

        this.prodService.update(this.prod).then(
            () => {

                swal(
                    'Success!',
                    'The data has been saved.',
                    'success'
                ).then(function () {
                    //Return to Index
                    //rt.navigate(['Basic/Product/Index']);
                });

            });
    }


    //Back to list (Show list)
    private backToList() {
        this.router.navigate(['Basic/Product/Index']);
    }
}

