import {CustomerIndexComponent} from './customer-index.component';
import {CustomerCreateComponent} from './customer-create.component';
import {CustomerEditComponent} from './customer-edit.component';


export const CustomerRoutes = [
    { path: '/Basic/Customer/Index', name: 'Index', component: CustomerIndexComponent },
    { path: '/Basic/Customer/Create', name: 'Create', component: CustomerCreateComponent },
    { path: '/Basic/Customer/Edit/:id', name: 'Edit', component: CustomerEditComponent }
];
