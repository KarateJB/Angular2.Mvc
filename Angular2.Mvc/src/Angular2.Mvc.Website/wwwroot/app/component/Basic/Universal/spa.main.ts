
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { SpaModule} from './spa.module';
import {enableProdMode} from '@angular/core';
import { provideRoutes } from '@angular/router';


//enableProdMode();
platformBrowserDynamic().bootstrapModule(SpaModule);

