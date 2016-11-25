import { NgModule,LOCALE_ID }      from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { CustomerDynamicIndexComponent } from './index.component';
import { CustomerDynamicListComponent } from './list.component';
import { CustomerDynamicCardComponent } from './card.component';
import { ComponentOutlet } from '../../directive/component-outlet.directive';



@NgModule({
    imports: [
        BrowserModule,
        FormsModule, 
        HttpModule,
    ],
    declarations: [CustomerDynamicIndexComponent, CustomerDynamicListComponent, CustomerDynamicCardComponent, ComponentOutlet],
    providers: [
        
    ],
    entryComponents: [CustomerDynamicListComponent, CustomerDynamicCardComponent],
    bootstrap: [CustomerDynamicIndexComponent]
})
export class CustomerDynamicIndexModule { }
