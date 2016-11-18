import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductIndexComponent} from './product-index.component';
import { ProductCreateComponent} from './product-create.component';
import { ProductEditComponent} from './product-edit.component';



const appRoutes: Routes = [
    { path: 'Basic/Product/Index', component: ProductIndexComponent },
    { path: 'Basic/Product/Create', component: ProductCreateComponent },
    { path: 'Basic/Product/Edit/:id', component: ProductEditComponent },
    { path: '', redirectTo: '/Basic/Product/Index', pathMatch: 'full' }
];



export const ProductRoutes: ModuleWithProviders = RouterModule.forRoot(appRoutes);
