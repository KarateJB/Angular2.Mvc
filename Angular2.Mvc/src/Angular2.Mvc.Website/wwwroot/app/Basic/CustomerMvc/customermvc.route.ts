import {CustomerMvcListComp} from './customermvc.list.comp';
import {CustomerMvcCreateComp} from './customermvc.create.comp';
import {CustomerMvcEditComp} from './customermvc.edit.comp';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
    { path: 'Basic/CustomerMvc/Index', component: CustomerMvcListComp },
    { path: 'Basic/CustomerMvc/Create', component: CustomerMvcCreateComp },
    { path: 'Basic/CustomerMvc/Edit/:id', component: CustomerMvcEditComp },
    { path: '', redirectTo: '/Basic/CustomerMvc/Index', pathMatch: 'full' }
];

export const appRoutingProviders: any[] = [
];

export const CustomerMvcRoutes: ModuleWithProviders = RouterModule.forRoot(appRoutes);
