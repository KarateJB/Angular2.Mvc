import {  Directive, Component, ComponentFactory, OnChanges, Input, ViewContainerRef, Compiler, ComponentFactoryResolver } from '@angular/core';
//import { CommonModule } from '@angular/common';

@Directive({
    selector: '[component-outlet]'
})
export class ComponentOutlet implements OnChanges {
    @Input() selector: string;
    @Input() inputValue: any;

    componentRef;

    constructor(
        private vcRef: ViewContainerRef,
        private resolver: ComponentFactoryResolver) {

        
    }

    ngOnChanges() {

        console.log("this.selector=" + this.selector);
        console.log("this.inputValue=" + this.inputValue);

        if (!this.selector) return;

        const factories = Array.from(this.resolver['_factories'].values());
        const factory: any = factories.find((x: any) => x.selector === this.selector);
        const compRef:any = this.vcRef.createComponent(factory);

        //Set input value for the component (optional)
        compRef.instance.inputValue = this.inputValue;

        //console.log(this.resolver['_factories']);
        //var factories = Array.from(this.resolver['_factories'].keys());
        //var factoryClass: any = factories.find((x: any) => x.name === this.selector);
        //const factory = this.resolver.resolveComponentFactory(factoryClass);
        //const compRef = this.vcRef.createComponent(factory);



        if (this.componentRef) {
            this.componentRef.destroy();
        }

        this.componentRef = compRef;
    }

    public ngOnDestroy() {
        if (this.componentRef) {
            this.componentRef.destroy();
            this.componentRef = null;
        }
    }
}

