﻿
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {CustomerMvcCreateModule} from './customermvc-create.module';
import {enableProdMode} from '@angular/core';
import { provideRoutes } from '@angular/router';


//enableProdMode();
platformBrowserDynamic().bootstrapModule(CustomerMvcCreateModule);

