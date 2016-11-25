import { NgModule,LOCALE_ID }      from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { CustomerDynamicIndexComponent } from './index.component';
import { CustomerDynamicListComponent } from './list.component';
import { SanitizeHtml } from '../../pipe/sanitizeHtml.pipe';
import { ComponentOutlet } from '../../directive/component-outlet.directive';



@NgModule({
    imports: [
        BrowserModule,
        FormsModule, 
        HttpModule,
    ],
    declarations: [CustomerDynamicIndexComponent, CustomerDynamicListComponent, SanitizeHtml, ComponentOutlet],
    providers: [
        
    ],
    entryComponents: [CustomerDynamicListComponent],
    bootstrap: [CustomerDynamicIndexComponent]
})
export class CustomerDynamicIndexModule { }
