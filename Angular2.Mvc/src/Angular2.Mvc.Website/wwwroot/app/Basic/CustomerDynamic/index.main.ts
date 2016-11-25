
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {CustomerDynamicIndexModule} from './index.module';
import {enableProdMode} from '@angular/core';
import { provideRoutes } from '@angular/router';


//enableProdMode();
platformBrowserDynamic().bootstrapModule(CustomerDynamicIndexModule);

