import {NgModule, Directive, Component, Compiler, ComponentFactory, ReflectiveInjector, ComponentFactoryResolver, ViewContainerRef, ModuleWithComponentFactories, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Directive({
    selector: '[componentOutlet]',
})
export class ComponentOutlet {
    @Input('componentOutlet') private template: string;
    @Input('componentOutletSelector') private selector: string;
    @Input('componentOutletContext') private context: Object;
    @Input('componentOutletImports') private imports: any[] = [CommonModule, FormsModule];

    constructor(private vcRef: ViewContainerRef, private compiler: Compiler) { }

    private _createDynamicComponent() {
        this.context = this.context || {};

        const metadata = new Component({
            selector: this.selector,
            template: this.template,
        });

        let ctx = this.context;
        let cmpClass = class _ {
            prototype: any = ctx;
        };
        let component = Component(metadata)(cmpClass);

        // make a module that does not inherit from anything except Object
        let mdClass = class _ {
            prototype: any = {}
        };

        return NgModule({
            imports: this.imports,
            declarations: [component],
            exports: [component],
            providers: []
        })(mdClass);
    }

    ngOnChanges() {
        let self = this;

        if (!self.template) return;
        console.log(self.template);
        let selfDyn = self._createDynamicComponent();
        console.log(selfDyn);
        self.compiler.compileModuleAndAllComponentsAsync(selfDyn)
            .then(factory => {
                self.vcRef.clear(); // to remove any previously loaded template, if this template is re-created dynamically from the parent
                const injector = ReflectiveInjector.fromResolvedProviders([], self.vcRef.parentInjector);

                let component: any;
                for (let i = factory.componentFactories.length - 1; i >= 0; i--) {
                    if (factory.componentFactories[i].selector === self.selector) {
                        component = factory.componentFactories[i];
                        break;
                    }
                }

                this.vcRef.createComponent(component, 0, injector);
            });
    }
}
