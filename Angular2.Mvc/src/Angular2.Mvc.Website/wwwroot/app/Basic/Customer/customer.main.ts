//import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
//import {enableProdMode} from '@angular/core';
//import {CustomerAppModule} from './customer.app.module';

////enableProdMode();
//platformBrowserDynamic().bootstrapModule(CustomerAppModule);

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {CustomerAppModule} from './customer.app.module';
import {enableProdMode} from '@angular/core';
import { provideRoutes } from '@angular/router';

//enableProdMode();
platformBrowserDynamic().bootstrapModule(CustomerAppModule);

