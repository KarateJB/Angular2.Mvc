
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {CustomerMvcIndexModule} from './customermvc-index.module';
import {enableProdMode} from '@angular/core';
import { provideRoutes } from '@angular/router';


//enableProdMode();
platformBrowserDynamic().bootstrapModule(CustomerMvcIndexModule);

