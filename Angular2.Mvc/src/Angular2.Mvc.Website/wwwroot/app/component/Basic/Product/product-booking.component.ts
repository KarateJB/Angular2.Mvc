/// <reference path="../../../../lib-npm/typings/jsnlog.d.ts" />
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../../class/Product';
import { ProductService } from './product.service';

declare var swal: any; //SweetAlert2 typings definition

@Component({
    selector: 'product-booking',
    template: `
               <table>
                 <tr>
                   <td style="min-width:25px"><i class="fa fa-minus"></i></td>
                   <td style="max-width:50px"><input type="text" value="0" /></td>
                   <td style="max-width:25px"><i class="fa fa-plus"></i></td>
                 </tr>
               </table>
              `
})

export class ProductBookingComponent implements OnInit {
    private title: string;
    private books: Product[];
    constructor(
        private router: Router,
        private productService: ProductService
    ) {
        this.productService = productService;
    }

    ngOnInit() {
    }
}

