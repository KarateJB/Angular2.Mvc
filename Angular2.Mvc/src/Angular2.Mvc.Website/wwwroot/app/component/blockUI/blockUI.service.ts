import {Injectable, ApplicationRef, ElementRef, ComponentRef, ViewContainerRef, ComponentFactory,ComponentFactoryResolver } from '@angular/core';
import {BlockUIComponent} from './blockUI.comp';

@Injectable()
export class BlockUIService {


    private blockUI: ComponentRef<BlockUIComponent>;

    constructor(
        private appRef: ApplicationRef,
        //private vcRef: ViewContainerRef,
        private componentFactoryResolver: ComponentFactoryResolver) { }

    public start() {

        //let rootRef: ElementRef = this.appRef['_rootComponents'][0].location;
        let viewContainerRef: ViewContainerRef = this.appRef['_rootComponents'][0]['_hostElement'].vcRef;
        let factory = this.componentFactoryResolver.resolveComponentFactory(BlockUIComponent);
        this.blockUI = viewContainerRef.createComponent(factory);
    }


    public stop() {
        if (this.blockUI) {
            this.blockUI.destroy();
        }
    }
}