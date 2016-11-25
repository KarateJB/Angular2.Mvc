import { NgModule,LOCALE_ID }      from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { CustomerMvcIndexComponent } from './customermvc-index.component';
import { CustomerMvcTestComponent } from './customermvc-test.component';
import { SanitizeHtml } from '../../../pipe/sanitizeHtml.pipe';
import { ComponentOutlet } from '../../../directive/component-outlet.directive';



@NgModule({
    imports: [
        BrowserModule,
        FormsModule, 
        HttpModule,
    ],
    declarations: [CustomerMvcIndexComponent, CustomerMvcTestComponent, SanitizeHtml, ComponentOutlet],
    providers: [
        
    ],
    entryComponents: [CustomerMvcTestComponent],
    bootstrap: [CustomerMvcIndexComponent]
})
export class CustomerMvcIndexModule { }
