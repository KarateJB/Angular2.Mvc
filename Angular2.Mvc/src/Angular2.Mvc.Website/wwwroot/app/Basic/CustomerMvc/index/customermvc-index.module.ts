import { NgModule,LOCALE_ID }      from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { CustomerMvcIndexComponent } from './customermvc-index.component';
import { SanitizeHtml } from '../../../pipe/sanitizeHtml.pipe';
import { ComponentOutlet } from '../../../directive/component-oulet.directive';



@NgModule({
    imports: [
        BrowserModule,
        FormsModule, 
        HttpModule,
    ],
    declarations: [CustomerMvcIndexComponent, SanitizeHtml, ComponentOutlet],
    providers: [
        
    ],
    bootstrap: [CustomerMvcIndexComponent]
})
export class CustomerMvcIndexModule { }
