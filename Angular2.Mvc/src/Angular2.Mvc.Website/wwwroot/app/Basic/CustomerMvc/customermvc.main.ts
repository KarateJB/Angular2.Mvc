
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {CustomerMvcAppModule} from './customermvc.app.module';
import {enableProdMode} from '@angular/core';
import { provideRoutes } from '@angular/router';


//enableProdMode();
platformBrowserDynamic().bootstrapModule(CustomerMvcAppModule);

