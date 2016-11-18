import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductIndexComponent} from './product-index.component';

const appRoutes: Routes = [
    { path: 'Basic/Product/Index', component: ProductIndexComponent },
    { path: '', redirectTo: '/Basic/Product/Index', pathMatch: 'full' }
];


export const ProductRoutes: ModuleWithProviders = RouterModule.forRoot(appRoutes);
