import { NgModule,LOCALE_ID }      from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { CustomerMvcCreateComponent } from './create.component';
import { SanitizeHtml } from '../../pipe/sanitizeHtml.pipe';



@NgModule({
    imports: [
        BrowserModule,
        FormsModule, 
        HttpModule,
    ],
    declarations: [CustomerMvcCreateComponent, SanitizeHtml],
    providers: [
        
    ],
    bootstrap: [CustomerMvcCreateComponent]
})
export class CustomerMvcCreateModule { }
