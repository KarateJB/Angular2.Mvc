import {CustomerIndexComponent} from './customer.index.component';
import {CustomerEditComponent} from './customer.edit.component';


export const CustomerRoutes = [
    { path: '/Basic/Customer/Index', name: 'Index', component: CustomerIndexComponent },
    { path: '/Basic/Customer/Edit:id', name: 'Edit', component: CustomerEditComponent }
];
