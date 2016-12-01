import { NgModule,LOCALE_ID }      from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { CustomerMvcAppComp } from './customermvc.app.comp';
import { CustomerMvcListComp } from './customermvc.list.comp';
import { CustomerMvcCreateComp } from './customermvc.create.comp';
import { CustomerMvcEditComp } from './customermvc.edit.comp';
import { CustomerMvcRoutes } from './customermvc.route';
import { SanitizeHtml } from '../../pipe/sanitizeHtml.pipe';



@NgModule({
    imports: [
        BrowserModule,
        FormsModule, 
        HttpModule,
        CustomerMvcRoutes
    ],
    declarations: [CustomerMvcAppComp, CustomerMvcListComp, CustomerMvcCreateComp, CustomerMvcEditComp, SanitizeHtml],
    providers: [
        
    ],
    bootstrap: [CustomerMvcAppComp]
})
export class CustomerMvcAppModule { }
