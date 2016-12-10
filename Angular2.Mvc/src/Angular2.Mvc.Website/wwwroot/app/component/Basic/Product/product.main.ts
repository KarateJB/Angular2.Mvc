import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {ProductAppModule} from './product.app.module';
import {enableProdMode} from '@angular/core';
import { provideRoutes } from '@angular/router';


//enableProdMode();
platformBrowserDynamic().bootstrapModule(ProductAppModule);

