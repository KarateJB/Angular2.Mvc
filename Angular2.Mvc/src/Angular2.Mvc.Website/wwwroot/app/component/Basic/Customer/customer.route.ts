import {CustomerIndexComponent} from './customer-index.component';
import {CustomerCreateComponent} from './customer-create.component';
import {CustomerEditComponent} from './customer-edit.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
    { path: 'Basic/Customer/Index', component: CustomerIndexComponent },
    { path: 'Basic/Customer/Create', component: CustomerCreateComponent },
    { path: 'Basic/Customer/Edit/:id', component: CustomerEditComponent },
    { path: '', redirectTo: '/Basic/Customer/Index', pathMatch: 'full' }
];

export const appRoutingProviders: any[] = [
];

export const CustomerRoutes: ModuleWithProviders = RouterModule.forRoot(appRoutes);
