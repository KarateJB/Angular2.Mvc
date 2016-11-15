/// <reference path="../../../lib-npm/typings/jsnlog.d.ts" />
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ProductService} from './product.service';
import {Product} from '../../class/Product';
import {ProductType} from '../../class/ProductType';
import {ProductTypeEnum} from '../../enum/ProductTypeEnum';


declare var swal: any; //SweetAlert2 typings definition

@Component({
    selector: 'product-create',
    providers: [ProductService],
    templateUrl: '/app/Basic/Product/product-create.component.html'
})

export class ProductCreateComponent implements OnInit {
    title: string;
    private prod: Product;
    private prodHint: string;
    private selectedProdType: ProductType;
    private prodTypes: ProductType[];

    constructor(
        private router: Router,
        private prodService: ProductService
    ) {
        this.title = "Products - Create";
        this.prodHint = "";
        this.prod = new Product();
        this.prodTypes = this.prodService.getProductTypes();
    }

    ngOnInit() {

    }
    //Change Selected Product type callback
    private changeSelectedType(event: any) {

        console.log(event); //Show the selected option 
        console.log(ProductTypeEnum.Book);
        console.log(ProductTypeEnum.Music);

        switch (event.id)
        {
            case ProductTypeEnum.Book.toString():
                this.prodHint="Enter a book's title.."
                break;
            case ProductTypeEnum.Toy.toString():
                this.prodHint = "Enter a toy's name.."
                break;
            case ProductTypeEnum.Music.toString():
                this.prodHint = "Enter music.."
                break;
            default:
                this.prodHint = "";
                break;
        }
    }

    //Save!
    private save() {

        this.prod.TypeId = this.selectedProdType.id;
        this.prod.Type = this.selectedProdType.name;

        this.prodService.create(this.prod).then(
            () => {

                var rt = this.router;
                swal(
                    'Success!',
                    'The data has been saved.',
                    'success'
                ).then(function () {
                    //Return to Index
                    rt.navigate(['Basic/Product/Index']);
                });

            });
    }


    //Back to list (Show list)
    private backToList() {
        this.router.navigate(['Basic/Product/Index']);
    }
}

