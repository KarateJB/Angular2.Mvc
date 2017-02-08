import {Injectable, ApplicationRef, ComponentRef, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import {BlockUIComponent} from './blockUI.comp';

@Injectable()
export class BlockUIService {


    private blockUI: ComponentRef<BlockUIComponent>;
    public vRef: ViewContainerRef;

    constructor(
        //private appRef: ApplicationRef,
        private componentFactoryResolver: ComponentFactoryResolver) { }

    public start() {

        //let rootRef: ElementRef = this.appRef['_rootComponents'][0].location;
        //console.log(this.appRef['_rootComponents'][0]);
        //let viewContainerRef: ViewContainerRef = this.appRef['_rootComponents'][0]['_hostElement'].vcRef;
        let factory = this.componentFactoryResolver.resolveComponentFactory(BlockUIComponent);
        this.blockUI = this.vRef.createComponent(factory);
    }


    public stop() {
        if (this.blockUI) {
            this.blockUI.destroy();
        }

        //Or use remove
        //let viewContainerRef: ViewContainerRef = this.appRef['_rootComponents'][0]['_hostElement'].vcRef;
        //viewContainerRef.remove(); //Remove the last View
    }
}