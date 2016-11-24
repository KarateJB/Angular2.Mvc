import { NgModule,LOCALE_ID }      from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { CustomerMvcIndexComponent } from './customermvc-index.component';
import { CustomerMvcTestComponent } from './customermvc-test.component';
import { MyTestComponent } from './customermvc-index.component';

import { SanitizeHtml } from '../../../pipe/sanitizeHtml.pipe';
import { ComponentOutlet } from '../../../directive/component-oulet.directive';
import { ComponentLoadFactory } from '../../../directive/component-load-factory.directive';



@NgModule({
    imports: [
        BrowserModule,
        FormsModule, 
        HttpModule,
    ],
    declarations: [CustomerMvcIndexComponent, CustomerMvcTestComponent, MyTestComponent, SanitizeHtml, ComponentOutlet, ComponentLoadFactory],
    providers: [
        
    ],
    entryComponents: [CustomerMvcTestComponent],
    bootstrap: [CustomerMvcIndexComponent]
})
export class CustomerMvcIndexModule { }
