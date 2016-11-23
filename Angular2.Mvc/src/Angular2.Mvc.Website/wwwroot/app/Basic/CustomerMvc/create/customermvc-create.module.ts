import { NgModule,LOCALE_ID }      from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { CustomerMvcCreateComponent } from './customermvc-create.component';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule, 
        HttpModule,
    ],
    declarations: [CustomerMvcCreateComponent],
    providers: [
    ],
    bootstrap: [CustomerMvcCreateComponent]
})
export class CustomerMvcCreateModule { }
