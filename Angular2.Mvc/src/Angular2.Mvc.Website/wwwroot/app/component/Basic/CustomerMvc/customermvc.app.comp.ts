import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

@Component({
    selector: 'customermvc-app',
    template: '<router-outlet></router-outlet>'
})
export class CustomerMvcAppComp implements OnInit {
    ngOnInit() {
    }
}

