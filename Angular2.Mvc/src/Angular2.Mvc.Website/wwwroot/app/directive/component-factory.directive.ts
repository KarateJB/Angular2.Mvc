import { 
  Directive, 
  Component, 
  ComponentFactory, 
  OnChanges, 
  Input, 
  ViewContainerRef,
  Compiler,
  ComponentFactoryResolver
 } from '@angular/core';

import { CommonModule } from '@angular/common';


@Directive({
  selector: '[ctrl-factory]'
})
export class ControlFactoryDirective implements OnChanges {
  @Input() selector: string;
  componentRef;
  init = false;

  constructor(
    private vcRef: ViewContainerRef, 
    private resolver: ComponentFactoryResolver) {
      
      
    }

  ngOnChanges() {
    
    console.log("this.selector=" + this.selector);
    if (!this.selector || this.init) return;
    
    const factories = Array.from(this.resolver['_factories'].values());
    const factory = <ComponentFactory<any>>factories.find((x: any) => x.selector === this.selector);

    const compRef = this.vcRef.createComponent(factory);

    if (this.componentRef) {
      this.componentRef.destroy();
    }

    this.componentRef = compRef;
    this.init = true;
  }
  
  public ngOnDestroy(){
    if (this.componentRef) {
        this.componentRef.destroy();
        this.componentRef = null;
    }
  }
}

