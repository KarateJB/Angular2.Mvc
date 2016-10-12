import {bootstrap} from 'angular2/platform/browser';
import {enableProdMode} from 'angular2/core';
import { APP_BASE_HREF } from 'angular2/platform/common';
//import { provideRouter } from 'angular2/router';
import {CustomerAppComponent} from './customer.app.component';
import {CustomerRoutes} from './customer.route';


//enableProdMode();
bootstrap(CustomerAppComponent);
